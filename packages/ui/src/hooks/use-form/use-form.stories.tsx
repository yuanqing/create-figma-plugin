/** @jsx h */
/* eslint-disable no-console */
import { Fragment, h } from 'preact'

import { Button } from '../../components/button/button'
import { VerticalSpace } from '../../components/layout/vertical-space/vertical-space'
import { Text } from '../../components/text/text'
import { Textbox } from '../../components/textbox/textbox/textbox'
import { useForm } from './use-form'

export default { title: 'Hooks/Use Form' }

export const Simple = function () {
  type FormState = { text: string }
  const { disabled, formState, handleSubmit, initialFocus, setFormState } =
    useForm<FormState>(
      { text: '' },
      {
        close: function (formState: FormState) {
          console.log('close', formState)
        },
        submit: function (formState: FormState) {
          console.log('submit', formState)
        },
        validate: function (formState: FormState) {
          console.log('validate', formState)
          return formState.text.length > 0
        }
      }
    )
  return (
    <Fragment>
      <Textbox
        {...initialFocus}
        name="text"
        onValueInput={setFormState}
        value={formState.text}
      />
      <VerticalSpace />
      <Button disabled={disabled === true} fullWidth onClick={handleSubmit}>
        Submit
      </Button>
    </Fragment>
  )
}

export const Transform = function () {
  type FormState = { text: string; wordCount: number }
  const { disabled, formState, handleSubmit, initialFocus, setFormState } =
    useForm<FormState>(
      { text: '', wordCount: 0 },
      {
        close: function (formState: FormState) {
          console.log('close', formState)
        },
        submit: function (formState: FormState) {
          console.log('submit', formState)
        },
        transform: function (formState: FormState) {
          console.log('transform', formState)
          return {
            ...formState,
            wordCount: formState.text.trim().split(' ').length
          }
        },
        validate: function (formState: FormState) {
          console.log('validate', formState)
          return formState.wordCount > 1
        }
      }
    )
  return (
    <Fragment>
      <Textbox
        {...initialFocus}
        name="text"
        onValueInput={setFormState}
        value={formState.text}
      />
      <VerticalSpace />
      <Text align="center">{formState.wordCount} words</Text>
      <VerticalSpace />
      <Button disabled={disabled === true} fullWidth onClick={handleSubmit}>
        Submit
      </Button>
    </Fragment>
  )
}
