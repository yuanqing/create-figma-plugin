/** @jsx h */
import { h, JSX } from 'preact'

import { Props } from '../../types/types'

export type IconProps = {
  color?: IconColor
}
export type IconColor =
  | 'brand'
  | 'brand-pressed'
  | 'brand-secondary'
  | 'brand-tertiary'
  | 'component'
  | 'component-pressed'
  | 'component-secondary'
  | 'component-tertiary'
  | 'danger'
  | 'danger-hover'
  | 'danger-pressed'
  | 'danger-secondary'
  | 'danger-secondary-hover'
  | 'danger-tertiary'
  | 'disabled'
  | 'hover'
  | 'onbrand'
  | 'onbrand-secondary'
  | 'onbrand-tertiary'
  | 'oncomponent'
  | 'oncomponent-secondary'
  | 'oncomponent-tertiary'
  | 'ondanger'
  | 'ondanger-secondary'
  | 'ondanger-tertiary'
  | 'ondisabled'
  | 'oninverse'
  | 'onselected'
  | 'onselected-secondary'
  | 'onselected-strong'
  | 'onselected-tertiary'
  | 'onsuccess'
  | 'onsuccess-secondary'
  | 'onsuccess-tertiary'
  | 'onwarning'
  | 'onwarning-secondary'
  | 'onwarning-tertiary'
  | 'pressed'
  | 'secondary'
  | 'secondary-hover'
  | 'selected'
  | 'selected-secondary'
  | 'selected-tertiary'
  | 'success'
  | 'success-pressed'
  | 'success-secondary'
  | 'success-tertiary'
  | 'tertiary'
  | 'tertiary-hover'
  | 'warning'
  | 'warning-pressed'
  | 'warning-secondary'
  | 'warning-tertiary'

export function createIcon(
  path: string,
  options: { width: number; height: number }
): (props: Props<SVGSVGElement, IconProps>) => JSX.Element {
  const { width, height } = options
  return function Icon({
    color,
    ...rest
  }: Props<SVGSVGElement, IconProps>): JSX.Element {
    return (
      <svg
        {...rest}
        height={height}
        style={{
          fill:
            typeof color === 'undefined'
              ? 'currentColor'
              : `var(--figma-color-icon-${color})`
        }}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path clip-rule="evenodd" d={path} fill-rule="evenodd" />
      </svg>
    )
  }
}
