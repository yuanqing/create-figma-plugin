import { createComponent } from '../../utilities/create-component.js'
import style from './preview.module.css'

export type PreviewProps = {
  children: JSX.Element
}

export const Preview = createComponent<HTMLDivElement, PreviewProps>(function (
  { children, ...rest },
  ref
) {
  return (
    <div {...rest} ref={ref} class={style.preview}>
      {children}
    </div>
  )
})
