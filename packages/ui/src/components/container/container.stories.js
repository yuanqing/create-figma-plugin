/** @jsx h */
import { h } from 'preact'
import { Container } from './container'

export default { title: 'Container' }

const style = {
  backgroundColor: 'rgba(255, 0, 0, 0.2)'
}

export function Normal () {
  return <Container style={style}>Text</Container>
}
