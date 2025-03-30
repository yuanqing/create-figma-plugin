/* eslint-disable no-console */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus.js'
import { IconFrame32 } from '../../../icons/icon-32/icon-frame-32.js'
import { SearchDropdown, SearchDropdownOption } from '../search-dropdown.js'

export default {
  tags: ['2'],
  title: 'Components/SearchDropdown'
}

export const Empty = function () {
  const options = [
    { text: 'Apple', value: 'apple' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blueberry', value: 'blueberry' },
    { text: 'Cherry', value: 'cherry' },
    { text: 'Grape', value: 'grape' },
    { text: 'Orange', value: 'orange' },
    { text: 'Pear', value: 'pear' },
    { text: 'Strawberry', value: 'strawberry' }
  ]

  const [searchValue, setSearchValue] = useState<string>('')
  const [value, setValue] = useState<null | string>(null)

  function handleSearchInput(newValue: string) {
    console.log(newValue)
    setSearchValue(newValue)
  }

  function handleValueChange(newValue: string | null) {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <SearchDropdown
      onSearchValueInput={handleSearchInput}
      onValueChange={handleValueChange}
      options={options}
      placeholder="Choose a fruit…"
      searchValue={searchValue}
      value={value}
    />
  )
}

export const Focused = function () {
  const options = [
    { text: 'Apple', value: 'apple' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blueberry', value: 'blueberry' },
    { text: 'Cherry', value: 'cherry' },
    { text: 'Grape', value: 'grape' },
    { text: 'Orange', value: 'orange' },
    { text: 'Pear', value: 'pear' },
    { text: 'Strawberry', value: 'strawberry' }
  ]

  const [searchValue, setSearchValue] = useState<string>('')
  const [value, setValue] = useState<null | string>(null)

  function handleSearchInput(newValue: string) {
    console.log(newValue)
    setSearchValue(newValue)
  }

  function handleValueChange(newValue: string | null) {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <SearchDropdown
      {...useInitialFocus()}
      onSearchValueInput={handleSearchInput}
      onValueChange={handleValueChange}
      options={options}
      placeholder="Choose a fruit…"
      searchValue={searchValue}
      value={value}
    />
  )
}

export const Selected = function () {
  const options = [
    { text: 'Apple', value: 'apple' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blueberry', value: 'blueberry' },
    { text: 'Cherry', value: 'cherry' },
    { text: 'Grape', value: 'grape' },
    { text: 'Orange', value: 'orange' },
    { text: 'Pear', value: 'pear' },
    { text: 'Strawberry', value: 'strawberry' }
  ]

  const [searchValue, setSearchValue] = useState<string>('')
  const [value, setValue] = useState<string | null>('banana')

  function handleSearchInput(newValue: string) {
    console.log(newValue)
    setSearchValue(newValue)
  }

  function handleValueChange(newValue: string | null) {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <SearchDropdown
      onSearchValueInput={handleSearchInput}
      onValueChange={handleValueChange}
      options={options}
      placeholder="Choose a fruit…"
      searchValue={searchValue}
      value={value}
    />
  )
}

export const WithSections = function () {
  const options = [
    { header: 'Fruits' },
    { text: 'Apple', value: 'apple' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blueberry', value: 'blueberry' },
    '-',
    { header: 'Vegetables' },
    { text: 'Carrot', value: 'carrot' },
    { text: 'Celery', value: 'celery' },
    { text: 'Cucumber', value: 'cucumber' }
  ]

  const [searchValue, setSearchValue] = useState<string>('')
  const [value, setValue] = useState<null | string>(null)

  function handleSearchInput(newValue: string) {
    console.log(newValue)
    setSearchValue(newValue)
  }

  function handleValueChange(newValue: string | null) {
    console.log(newValue)
    setValue(newValue)
  }

  const style = {
    bottom: '-8px',
    position: 'fixed',
    right: '-8px',
    width: '240px'
  }

  return (
    <SearchDropdown
      onSearchValueInput={handleSearchInput}
      onValueChange={handleValueChange}
      options={options as SearchDropdownOption[]}
      placeholder="Choose a food…"
      searchValue={searchValue}
      style={style}
      value={value}
    />
  )
}

export const Disabled = function () {
  const options = [
    { text: 'Apple', value: 'apple' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blueberry', value: 'blueberry' },
    { disabled: true, text: 'Cherry', value: 'cherry' },
    { text: 'Grape', value: 'grape' },
    { disabled: true, text: 'Orange', value: 'orange' },
    { text: 'Pear', value: 'pear' },
    { text: 'Strawberry', value: 'strawberry' }
  ]

  const [searchValue, setSearchValue] = useState<string>('')
  const [value, setValue] = useState<null | string>(null)

  function handleSearchInput(newValue: string) {
    console.log(newValue)
    setSearchValue(newValue)
  }

  function handleValueChange(newValue: string | null) {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <SearchDropdown
      disabled
      onSearchValueInput={handleSearchInput}
      onValueChange={handleValueChange}
      options={options}
      placeholder="Choose a fruit…"
      searchValue={searchValue}
      value={value}
    />
  )
}

export const WithIcon = function () {
  const options = [
    { text: 'Apple', value: 'apple' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blueberry', value: 'blueberry' },
    { text: 'Cherry', value: 'cherry' },
    { text: 'Grape', value: 'grape' },
    { text: 'Orange', value: 'orange' },
    { text: 'Pear', value: 'pear' },
    { text: 'Strawberry', value: 'strawberry' }
  ]

  const [searchValue, setSearchValue] = useState<string>('')
  const [value, setValue] = useState<null | string>(null)

  function handleSearchInput(newValue: string) {
    console.log(newValue)
    setSearchValue(newValue)
  }

  function handleValueChange(newValue: string | null) {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <SearchDropdown
      icon={<IconFrame32 />}
      onSearchValueInput={handleSearchInput}
      onValueChange={handleValueChange}
      options={options}
      placeholder="Choose a fruit…"
      searchValue={searchValue}
      value={value}
    />
  )
}

export const WithClearOnEscape = function () {
  const options = [
    { text: 'Apple', value: 'apple' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blueberry', value: 'blueberry' },
    { text: 'Cherry', value: 'cherry' },
    { text: 'Grape', value: 'grape' },
    { text: 'Orange', value: 'orange' },
    { text: 'Pear', value: 'pear' },
    { text: 'Strawberry', value: 'strawberry' }
  ]

  const [searchValue, setSearchValue] = useState<string>('')
  const [value, setValue] = useState<string | null>('banana')

  function handleSearchInput(newValue: string) {
    console.log(newValue)
    setSearchValue(newValue)
  }

  function handleValueChange(newValue: string | null) {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <div>
      <p style={{ marginBottom: '10px' }}>
        Press Escape key to clear the selection
      </p>
      <SearchDropdown
        clearOnEscapeKeyDown={true}
        onSearchValueInput={handleSearchInput}
        onValueChange={handleValueChange}
        options={options}
        placeholder="Choose a fruit…"
        searchValue={searchValue}
        value={value}
      />
    </div>
  )
}
