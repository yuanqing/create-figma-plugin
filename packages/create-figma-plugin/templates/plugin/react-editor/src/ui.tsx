import '!prismjs/themes/prism.css'

import {
  Button,
  Container,
  render,
  VerticalSpace
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { highlight, languages } from 'prismjs'
import Editor from 'react-simple-code-editor'

import styles from './styles.css'
import { InsertCodeHandler } from './types'

function Plugin() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`)
  const handleInsertCodeButtonClick = useCallback(
    function () {
      emit<InsertCodeHandler>('INSERT_CODE', code)
    },
    [code]
  )
  useEffect(function () {
    const textAreaElement = document.querySelector(`.${styles.textarea}`)
    if (textAreaElement === null) {
      return
    }
    // Make `react-simple-code-editor` work with `preact`
    textAreaElement.textContent = code
  }, [code])
  return (
    <Container space="medium">
      <VerticalSpace space="small" />
      <div class={styles.container}>
        <Editor
          highlight={function (code: string) {
            return highlight(code, languages.js, 'js')
          }}
          onValueChange={setCode}
          preClassName={styles.pre}
          textareaClassName={styles.textarea}
          value={code}
        />
      </div>
      <VerticalSpace space="large" />
      <Button fullWidth onClick={handleInsertCodeButtonClick}>
        Insert Code
      </Button>
      <VerticalSpace space="small" />
    </Container>
  )
}

export default render(Plugin)
