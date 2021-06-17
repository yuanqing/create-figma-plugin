/** @jsx h */
import { h, JSX } from 'preact'

import { Props } from '../../types/types'
import styles from './icon.css'

export type IconProps = {
  color?: IconColor
}
export type IconColor =
  | 'black-30'
  | 'black-80'
  | 'blue'
  | 'green'
  | 'purple'
  | 'red'
  | 'white'
  | 'white-20'
  | 'white-40'

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
        class={
          typeof color === 'undefined' ? styles.currentColor : styles[color]
        }
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path clip-rule="evenodd" d={path} fill-rule="evenodd" />
      </svg>
    )
  }
}
