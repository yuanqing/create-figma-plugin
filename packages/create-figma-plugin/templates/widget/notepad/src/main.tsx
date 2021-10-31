/** @jsx figma.widget.h */

import { once, showUI } from '@create-figma-plugin/utilities'

const { widget } = figma
const { AutoLayout, Text, useSyncedState, usePropertyMenu } = widget

export default function () {
  widget.register(Notepad)
}

function Notepad () {
  const [text, setText] = useSyncedState('text', 'Hello\nWidgets')
  const items: Array<WidgetPropertyMenuItem> = [
    {
      itemType: 'action',
      propertyName: 'edit',
      tooltip: 'Edit'
    }
  ]
  async function onChange ({
    propertyName
  }: WidgetPropertyEvent): Promise<void> {
    await new Promise<void>(function (resolve: () => void): void {
      if (propertyName === 'edit') {
        showUI({ width: 240, height: 144 }, { text })
        once('UPDATE_TEXT', function (text: string): void {
          setText(text)
          resolve()
        })
      }
    })
  }
  usePropertyMenu(items, onChange)
  return (
    <AutoLayout
      direction='horizontal'
      horizontalAlignItems='center'
      verticalAlignItems='center'
      height='hug-contents'
      padding={8}
      fill='#FFFFFF'
      spacing={12}
      effect={{
        type: 'drop-shadow',
        color: { r: 0, g: 0, b: 0, a: 0.2 },
        offset: { x: 0, y: 0 },
        blur: 2,
        spread: 2
      }}
    >
      <AutoLayout
        direction='vertical'
        horizontalAlignItems='start'
        verticalAlignItems='start'
      >
        {text.split('\n').map(line => {
          return line ? (
            <Text fontSize={12} horizontalAlignText='left' width='fill-parent'>
              {line}
            </Text>
          ) : null
        })}
      </AutoLayout>
    </AutoLayout>
  )
}
