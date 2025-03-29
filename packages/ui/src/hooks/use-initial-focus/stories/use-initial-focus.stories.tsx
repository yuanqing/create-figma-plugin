/* eslint-disable no-console */
import { Fragment, h, JSX } from 'preact'
import { useState } from 'preact/hooks'

import { Button } from '../../../components/button/button.js'
import { Textbox } from '../../../components/textbox/textbox/textbox.js'
import { VerticalSpace } from '../../../layout/vertical-space/vertical-space.js'
import { useInitialFocus } from '../use-initial-focus.js'

export default { title: 'Hooks/Use Initial Focus' }

export const UseInitialFocus = function () {
  const [value, setValue] = useState<string>('Text')
  const initialFocus = useInitialFocus()
  function handleClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  return (
    <Fragment>
      <Textbox {...initialFocus} onValueInput={setValue} value={value} />
      <VerticalSpace space="small" />
      <Button fullWidth onClick={handleClick}>
        Submit
      </Button>
    </Fragment>
  )
}
