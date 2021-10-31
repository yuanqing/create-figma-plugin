import {
  Button,
  Container,
  render,
  TextboxMultiline,
  useInitialFocus,
  VerticalSpace
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

function Plugin (props: { text: string }) {
  const [text, setText] = useState(props.text)
  const handleUpdateButtonClick = useCallback(
    function () {
      emit('UPDATE_TEXT', text)
    },
    [text]
  )
  return (
    <Container>
      <VerticalSpace space='large' />
      <TextboxMultiline
        {...useInitialFocus()}
        onValueInput={setText}
        value={text}
      />
      <VerticalSpace space='large' />
      <Button fullWidth onClick={handleUpdateButtonClick}>
        Update Text
      </Button>
      <VerticalSpace space='small' />
    </Container>
  )
}

export default render(Plugin)
