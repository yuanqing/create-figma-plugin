/** @jsx figma.widget.h */

import { once, showUI } from '@create-figma-plugin/utilities'

const { widget } = figma
const { AutoLayout, Text, useSyncedState, usePropertyMenu } = widget

export default function () {
  widget.register(Notepad)
}

function Notepad() {
  const [text, setText] = useSyncedState('text', 'Hello\nWidgets')
  const items: Array<WidgetPropertyMenuItem> = [
    {
      itemType: 'action',
      propertyName: 'edit',
      tooltip: 'Edit'
    }
  ]
  async function onChange({
    propertyName
  }: WidgetPropertyEvent): Promise<void> {
    await new Promise<void>(function (resolve: () => void): void {
      if (propertyName === 'edit') {
        showUI({ height: 144, width: 240 }, { text })
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
      direction="horizontal"
      effect={{
        blur: 2,
        color: { a: 0.2, b: 0, g: 0, r: 0 },
        offset: { x: 0, y: 0 },
        spread: 2,
        type: 'drop-shadow'
      }}
      fill="#FFFFFF"
      height="hug-contents"
      horizontalAlignItems="center"
      padding={8}
      spacing={12}
      verticalAlignItems="center"
    >
      <AutoLayout
        direction="vertical"
        horizontalAlignItems="start"
        verticalAlignItems="start"
      >
        {text.split('\n').map((line) => {
          return line ? (
            <Text fontSize={12} horizontalAlignText="left" width="fill-parent">
              {line}
            </Text>
          ) : null
        })}
      </AutoLayout>
    </AutoLayout>
  )
}
