/* eslint-disable no-console */
import { Fragment, h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { Button } from '../../../components/button/button.js'
import { Textbox } from '../../../components/textbox/textbox/textbox.js'
import { VerticalSpace } from '../../../layout/vertical-space/vertical-space.js'
import { useFocusTrap } from '../use-focus-trap.js'

export default { title: 'Hooks/Use Focus Trap' }

export const UseFocusTrap = function () {
  const [value, setValue] = useState<string>('Text')
  useFocusTrap()
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Fragment>
      <Textbox name="text" onValueInput={setValue} value={value} />
      <VerticalSpace space="small" />
      <Button fullWidth onClick={handleClick}>
        Submit
      </Button>
    </Fragment>
  )
}
