import { ComponentChildren, h } from 'preact'

import { IconColor } from '../types/colors.js'
import { createComponent } from '../utilities/create-component.js'

export type IconProps = {
  color?: IconColor
}

export function createIcon(svg: ComponentChildren) {
  return createComponent<HTMLDivElement, IconProps>(function ({
    color,
    ...rest
  }) {
    return (
      <div
        {...rest}
        style={{
          color:
            typeof color === 'undefined'
              ? 'currentColor'
              : `var(--figma-color-icon-${color})`
        }}
      >
        {svg}
      </div>
    )
  })
}
