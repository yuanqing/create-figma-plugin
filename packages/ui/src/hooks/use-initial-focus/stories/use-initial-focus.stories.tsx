/** @jsx h */
/* eslint-disable no-console */
import { Fragment, h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { Button } from '../../../components/button/button'
import { Textbox } from '../../../components/textbox/textbox/textbox'
import { VerticalSpace } from '../../../layout/vertical-space/vertical-space'
import { useInitialFocus } from '../use-initial-focus'

export default { title: 'Hooks/Use Initial Focus' }

export const UseInitialFocus = function () {
  const [value, setValue] = useState<string>('Text')
  const initialFocus = useInitialFocus()
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Fragment>
      <Textbox
        {...initialFocus}
        name="text"
        onValueInput={setValue}
        value={value}
        variant="border"
      />
      <VerticalSpace space="small" />
      <Button fullWidth onClick={handleClick}>
        Submit
      </Button>
    </Fragment>
  )
}
