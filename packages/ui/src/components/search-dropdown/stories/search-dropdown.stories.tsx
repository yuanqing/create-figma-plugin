/* eslint-disable no-console */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { useInitialFocus } from '../../../hooks/use-initial-focus/use-initial-focus.js'
import { IconFrame32 } from '../../../icons/icon-32/icon-frame-32.js'
import { SearchDropdown, SearchDropdownOption } from '../search-dropdown.js'

export default {
  tags: ['2'],
  title: 'Components/Search Dropdown'
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
      inputProps={useInitialFocus()}
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

  return (
    <SearchDropdown
      onSearchValueInput={handleSearchInput}
      onValueChange={handleValueChange}
      options={options as SearchDropdownOption[]}
      placeholder="Choose a food…"
      searchValue={searchValue}
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

export const CornerPositions = function () {
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
    setSearchValue(newValue)
  }

  function handleValueChange(newValue: string | null) {
    setValue(newValue)
  }

  const containerStyle = {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    height: '100vh',
    padding: '16px'
  }

  const dropdownStyle = {
    width: '240px'
  }

  return (
    <div style={containerStyle}>
      {/* Bottom Left */}
      <div style={{ bottom: '16px', left: '16px', position: 'fixed' }}>
        <SearchDropdown
          onSearchValueInput={handleSearchInput}
          onValueChange={handleValueChange}
          options={options}
          placeholder="Bottom Left"
          searchValue={searchValue}
          style={dropdownStyle}
          value={value}
        />
      </div>

      {/* Bottom Right */}
      <div style={{ bottom: '16px', position: 'fixed', right: '16px' }}>
        <SearchDropdown
          onSearchValueInput={handleSearchInput}
          onValueChange={handleValueChange}
          options={options}
          placeholder="Bottom Right"
          searchValue={searchValue}
          style={dropdownStyle}
          value={value}
        />
      </div>

      {/* Top Left */}
      <div style={{ left: '16px', position: 'fixed', top: '16px' }}>
        <SearchDropdown
          onSearchValueInput={handleSearchInput}
          onValueChange={handleValueChange}
          options={options}
          placeholder="Top Left"
          searchValue={searchValue}
          style={dropdownStyle}
          value={value}
        />
      </div>

      {/* Top Right */}
      <div style={{ position: 'fixed', right: '16px', top: '16px' }}>
        <SearchDropdown
          onSearchValueInput={handleSearchInput}
          onValueChange={handleValueChange}
          options={options}
          placeholder="Top Right"
          searchValue={searchValue}
          style={dropdownStyle}
          value={value}
        />
      </div>
    </div>
  )
}
