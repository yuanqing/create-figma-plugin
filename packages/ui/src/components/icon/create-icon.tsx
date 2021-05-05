/** @jsx h */
import { h, JSX } from 'preact'

import { Props } from '../../types'

export type IconProps = Props<SVGSVGElement>

export function createIcon(
  path: string,
  options: { width: number; height: number }
): (props: IconProps) => JSX.Element {
  const { width, height } = options
  return function Icon(props: IconProps): JSX.Element {
    return (
      <svg
        {...props}
        fill="currentColor"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path clip-rule="evenodd" d={path} fill-rule="evenodd" />
      </svg>
    )
  }
}
