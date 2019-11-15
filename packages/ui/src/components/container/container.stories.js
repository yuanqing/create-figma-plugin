/** @jsx h */
import { h } from 'preact'
import { Container } from './container'
import { Text } from '../text/text'

export default { title: 'Container' }

export function Normal () {
  return (
    <Container>
      <Text>Text</Text>
    </Container>
  )
}
