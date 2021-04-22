/** @jsx h */
/* eslint-disable no-console */
import { h } from 'preact'

import { Button } from '../components/form/button/button'
import { Textbox } from '../components/form/textbox/textbox'
import { VerticalSpace } from '../components/layout/vertical-space/vertical-space'
import { useForm } from './use-form'

export default { title: 'Hooks/Use Form' }

type Props = {
  value: string
}

export const UseForm = function () {
  const props: Props = {
    value: ''
  }
  const { state, handleChange, handleSubmit, isValid, initialFocus } = useForm(
    props,
    {
      onClose: function () {
        console.log('onClose')
      },
      onSubmit: function ({ value }: Props) {
        console.log('onSubmit', { value })
      },
      validate: function ({ value }: Props) {
        console.log('validate', { value })
        return value !== ''
      }
    }
  )
  return (
    <div>
      <Textbox
        name="value"
        onChange={handleChange}
        value={state.value}
        {...initialFocus}
      />
      <VerticalSpace space="small" />
      <Button disabled={isValid() === false} fullWidth onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}
