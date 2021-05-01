/** @jsx h */
import { ComponentChildren, h, JSX, RefObject } from 'preact'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

import { OnValueChange, Props } from '../../../../types'
import { createClassName } from '../../../../utilities/create-class-name'
import { getCurrentFromRef } from '../../../../utilities/get-current-from-ref'
import { computeNextValue } from '../private/compute-next-value'
import { isKeyCodeCharacterGenerating } from '../private/is-keycode-character-generating'
import textboxStyles from '../textbox.css'
import textboxAutocompleteStyles from './textbox-autocomplete.css'

const EMPTY_STRING = ''
const INVALID_ID = null
const ID_DATA_ATTRIBUTE_NAME = 'data-textbox-autocomplete-id'

export type TextboxAutocompleteProps<N extends string> = {
  disabled?: boolean
  filter?: boolean
  icon?: ComponentChildren
  name?: N
  noBorder?: boolean
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onOptionClick?: OmitThisParameter<JSX.MouseEventHandler<HTMLDivElement>>
  onValueChange?: OnValueChange<string, N>
  options: Array<TextboxAutocompleteOption>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  strict?: boolean
  top?: boolean
  value: string
}
export type TextboxAutocompleteOption =
  | TextboxAutocompleteOptionHeader
  | TextboxAutocompleteOptionValue
  | TextboxAutocompleteOptionSeparator
export type TextboxAutocompleteOptionHeader = {
  header: string
}
export type TextboxAutocompleteOptionValue = {
  value: string
}
export type TextboxAutocompleteOptionSeparator = {
  separator: true
}

type Option =
  | TextboxAutocompleteOptionHeader
  | OptionValueWithId
  | TextboxAutocompleteOptionSeparator
type OptionValueWithId = TextboxAutocompleteOptionValue & {
  id: string
}
type Id = typeof INVALID_ID | string

export function TextboxAutocomplete<N extends string>({
  disabled = false,
  filter = false,
  icon,
  name,
  noBorder = false,
  onInput = function () {},
  onOptionClick = function () {},
  onValueChange = function () {},
  placeholder,
  propagateEscapeKeyDown = true,
  strict = false,
  top = false,
  value,
  ...rest
}: Props<HTMLInputElement, TextboxAutocompleteProps<N>>): JSX.Element {
  const rootElementRef: RefObject<HTMLDivElement> = useRef(null)
  const inputElementRef: RefObject<HTMLInputElement> = useRef(null)
  const menuElementRef: RefObject<HTMLDivElement> = useRef(null)

  const [savedValue, setSavedValue] = useState<string>(value) // Keep a copy of the original textbox value
  const [selectedId, setSelectedId] = useState<Id>(INVALID_ID)
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  // Uncomment to debug
  // console.table([{ isMenuVisible, savedValue, selectedId, value }])

  const options: Array<Option> = rest.options
    .filter(function (option: TextboxAutocompleteOption) {
      if (filter === false || savedValue === EMPTY_STRING) {
        return true
      }
      if ('value' in option) {
        return doesStringContainSubstring(option.value, savedValue) === true
      }
      return false
    })
    .map(function (option: TextboxAutocompleteOption, index: number) {
      if ('value' in option) {
        const optionValueWithId: OptionValueWithId = {
          ...option,
          id: `${index}`
        }
        return optionValueWithId
      }
      return option
    })

  const triggerBlur = useCallback(function () {
    setIsMenuVisible(false)
    setSavedValue(EMPTY_STRING)
    const inputElement = getCurrentFromRef(inputElementRef)
    inputElement.blur()
  }, [])

  const updateSavedValue = useCallback(
    function (value: string) {
      const newId = getIdByValue(options, value)
      if (newId === INVALID_ID) {
        // `newValue` does not match any option in `options`
        setSavedValue(value)
        return
      }
      // `newValue` matches one of the options in `options`
      setSavedValue(EMPTY_STRING)
      setSelectedId(newId)
    },
    [options]
  )

  const handleFocus = useCallback(
    function (event: JSX.TargetedFocusEvent<HTMLInputElement>) {
      setIsMenuVisible(true)
      updateSavedValue(value)
      const inputElement = event.currentTarget
      inputElement.focus()
      inputElement.select()
    },
    [updateSavedValue, value]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
      const inputElement = event.currentTarget
      const key = event.key
      if (key === 'ArrowUp' || key === 'ArrowDown') {
        event.preventDefault()
        if (options.length === 0) {
          return
        }
        const newId =
          key === 'ArrowUp'
            ? computePreviousId(options, selectedId)
            : computeNextId(options, selectedId)
        if (newId === INVALID_ID) {
          // Reached beginning/end of list of `options`, so just restore `savedValue`
          setSelectedId(INVALID_ID)
          inputElement.value = savedValue
          onValueChange(savedValue, name)
          onInput(event)
          return
        }
        // Set the selected option to `newId`, and update `value`
        setSelectedId(newId)
        const newOptionValue = findOptionValueById(options, newId)
        if (newOptionValue === null) {
          throw new Error('Invariant violation') // `newId` is valid
        }
        const newValue = newOptionValue.value
        inputElement.value = newValue
        onValueChange(newValue, name)
        onInput(event)
        inputElement.select()
        return
      }
      if (key === 'Enter' || key === 'Escape' || key === 'Tab') {
        event.preventDefault()
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        triggerBlur()
        return
      }
      if (strict === false) {
        return
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        // Piece together `newValue`, and stop the `keyDown` event if `newValue` is invalid
        const newValue = computeNextValue(inputElement, event.key)
        if (isValidValue(options, newValue) === false) {
          event.preventDefault()
        }
      }
    },
    [
      name,
      onInput,
      onValueChange,
      options,
      propagateEscapeKeyDown,
      savedValue,
      selectedId,
      strict,
      triggerBlur
    ]
  )

  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      const newValue = event.currentTarget.value
      updateSavedValue(newValue)
      onValueChange(newValue, name)
      onInput(event)
    },
    [name, onInput, onValueChange, updateSavedValue]
  )

  const handleOptionClick = useCallback(
    function (event: JSX.TargetedMouseEvent<HTMLDivElement>) {
      const newId = event.currentTarget.getAttribute(
        ID_DATA_ATTRIBUTE_NAME
      ) as string
      // Set the selected option to `newId`, and update `value`
      setSelectedId(newId)
      const newOptionValue = findOptionValueById(options, newId)
      if (newOptionValue === null) {
        throw new Error('Invariant violation') // `newId` is valid
      }
      const newValue = newOptionValue.value
      onValueChange(newValue, name)
      onOptionClick(event)
      triggerBlur()
    },
    [name, onOptionClick, onValueChange, options, triggerBlur]
  )

  const handlePaste = useCallback(
    function (event: JSX.TargetedClipboardEvent<HTMLInputElement>) {
      if (event.clipboardData === null) {
        throw new Error('`event.clipboardData` is `null`')
      }
      const newValue = computeNextValue(
        event.currentTarget,
        event.clipboardData.getData('Text')
      )
      if (isValidValue(options, newValue) === false) {
        event.preventDefault()
      }
    },
    [options]
  )

  // Adjust the option menu scroll position so that the selected option is always visible
  useEffect(
    function () {
      if (isMenuVisible === false || options.length === 0) {
        return
      }
      const menuElement = getCurrentFromRef(menuElementRef)
      if (selectedId === INVALID_ID) {
        menuElement.scrollTop = 0
        return
      }
      const selectedElement = menuElement.querySelector<HTMLDivElement>(
        `[${ID_DATA_ATTRIBUTE_NAME}='${selectedId}']`
      )
      if (selectedElement === null) {
        return
      }
      if (selectedElement.offsetTop < menuElement.scrollTop) {
        menuElement.scrollTop = selectedElement.offsetTop
        return
      }
      const offsetBottom =
        selectedElement.offsetTop + selectedElement.offsetHeight
      if (offsetBottom > menuElement.scrollTop + menuElement.offsetHeight) {
        menuElement.scrollTop = offsetBottom - menuElement.offsetHeight
      }
    },
    [isMenuVisible, options, selectedId]
  )

  // Blur the input and hide the menu if we clicked outside the component
  useEffect(
    function () {
      function handleWindowMouseDown(event: MouseEvent) {
        const rootElement = getCurrentFromRef(rootElementRef)
        if (
          isMenuVisible === false ||
          rootElement === event.target ||
          rootElement.contains(event.target as HTMLElement) // FIXME
        ) {
          // Exit if we clicked on any DOM element that is part of the component
          return
        }
        triggerBlur()
      }
      window.addEventListener('mousedown', handleWindowMouseDown)
      return function () {
        window.removeEventListener('mousedown', handleWindowMouseDown)
      }
    },
    [isMenuVisible, triggerBlur, value]
  )

  return (
    <div
      ref={rootElementRef}
      class={createClassName([
        textboxStyles.textbox,
        noBorder === true ? textboxStyles.noBorder : null,
        typeof icon === 'undefined' ? null : textboxStyles.hasIcon
      ])}
    >
      <input
        {...rest}
        ref={inputElementRef}
        class={textboxStyles.input}
        disabled={disabled === true}
        name={name}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        placeholder={placeholder}
        tabIndex={disabled === true ? -1 : 0}
        type="text"
        value={value}
      />
      {typeof icon === 'undefined' ? null : (
        <div class={textboxStyles.icon}>{icon}</div>
      )}
      {disabled === false && isMenuVisible === true && options.length > 0 ? (
        <div
          ref={menuElementRef}
          class={createClassName([
            textboxAutocompleteStyles.menu,
            top === true ? textboxAutocompleteStyles.top : null,
            typeof icon === 'undefined'
              ? null
              : textboxAutocompleteStyles.hasIcon
          ])}
        >
          {options.map(function (option, index) {
            if ('separator' in option) {
              return (
                <hr
                  key={index}
                  class={textboxAutocompleteStyles.optionSeparator}
                />
              )
            }
            if ('header' in option) {
              return (
                <h1 key={index} class={textboxAutocompleteStyles.optionHeader}>
                  {option.header}
                </h1>
              )
            }
            return (
              <div
                key={option.id}
                class={createClassName([
                  textboxAutocompleteStyles.optionValue,
                  option.id === selectedId
                    ? textboxAutocompleteStyles.optionValueSelected
                    : null
                ])}
                onClick={handleOptionClick}
                {...{ [ID_DATA_ATTRIBUTE_NAME]: option.id }}
              >
                {option.value}
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

// Returns `true` if `string` contains `substring`, else `false`
function doesStringContainSubstring(
  string: string,
  substring: string
): boolean {
  return string.toLowerCase().indexOf(substring.toLowerCase()) !== -1
}

// Returns the `id` of an `OptionValueWithId` in `options` with the given `value`
function getIdByValue(options: Array<Option>, value: string): Id {
  for (const option of options) {
    if ('value' in option) {
      if (option.value === value) {
        return option.id
      }
    }
  }
  return INVALID_ID
}

// Returns `true` if `value` is a substring of `options[i].value` in `options`, else `false`
function isValidValue(options: Array<Option>, value: string): boolean {
  if (value === EMPTY_STRING) {
    return true
  }
  for (const option of options) {
    if ('value' in option) {
      if (option.value.toLowerCase().indexOf(value.toLowerCase()) === 0) {
        return true
      }
    }
  }
  return false
}

// Returns the `OptionValueWithId` in `options` with the given `id`, else `null`
function findOptionValueById(
  options: Array<Option>,
  id: string
): null | OptionValueWithId {
  for (const option of options) {
    if ('id' in option && option.id === id) {
      return option
    }
  }
  return null
}

// Returns the index of the `OptionValueWithId` in `options` with the given `id`, else `-1`
function getIndexById(options: Array<Option>, id: string): -1 | number {
  let index = 0
  for (const option of options) {
    if ('id' in option && option.id === id) {
      return index
    }
    index += 1
  }
  return -1
}

// Returns the `Id` of the `OptionValueWithId` _before_ the `OptionValueWithId` in `options` with the given `id`
function computePreviousId(options: Array<Option>, id: Id): Id {
  if (id === INVALID_ID) {
    const result = findOptionValueAtOrBeforeIndex(options, options.length - 1)
    return result === null ? null : result.id
  }
  const index = getIndexById(options, id)
  if (index === -1) {
    throw new Error(`No option with \`id\` ${id}`)
  }
  if (index === 0) {
    return null
  }
  const result = findOptionValueAtOrBeforeIndex(options, index - 1)
  return result === null ? null : result.id
}

// Returns the `Id` of the `OptionValueWithId` _after_ the `OptionValueWithId` in `options` with the given `id`
function computeNextId(options: Array<Option>, id: Id): Id {
  if (id === INVALID_ID) {
    const result = findOptionValueAtOrAfterIndex(options, 0)
    return result === null ? null : result.id
  }
  const index = getIndexById(options, id)
  if (index === -1) {
    throw new Error(`No option with \`id\` ${id}`)
  }
  if (index === options.length - 1) {
    return null
  }
  const result = findOptionValueAtOrAfterIndex(options, index + 1)
  return result === null ? null : result.id
}

// Returns the `OptionValueWithId` in `options` at or _before_ the `index`, else `null`
function findOptionValueAtOrBeforeIndex(
  options: Array<Option>,
  index: number
): null | OptionValueWithId {
  if (index < 0) {
    throw new Error('`index` < 0')
  }
  if (index > options.length - 1) {
    throw new Error('`index` > `options.length` - 1')
  }
  return findLastOptionValue(options.slice(0, index + 1))
}

// Returns the `OptionValueWithId` in `options` at or _after_ the `index`, else `null`
function findOptionValueAtOrAfterIndex(
  options: Array<Option>,
  index: number
): null | OptionValueWithId {
  if (index < 0) {
    throw new Error('`index` < 0')
  }
  if (index > options.length - 1) {
    throw new Error('`index` > `options.length` - 1')
  }
  return findFirstOptionValue(options.slice(index))
}

// Returns the first `OptionValueWithId` encountered in `options`, else `null`
function findFirstOptionValue(
  options: Array<Option>
): null | OptionValueWithId {
  for (const option of options) {
    if ('id' in option) {
      return option
    }
  }
  return null
}

// Returns the last `OptionValueWithId` encountered in `options`, else `null`
function findLastOptionValue(options: Array<Option>): null | OptionValueWithId {
  return findFirstOptionValue(options.slice().reverse())
}
