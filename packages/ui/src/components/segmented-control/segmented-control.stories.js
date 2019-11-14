/** @jsx h */
import { h } from 'preact'
import { SegmentedControl } from './segmented-control'
import { VerticalSpace } from '../vertical-space/vertical-space'

export default { title: 'Segmented Control' }

export function Normal () {
  return (
    <SegmentedControl
      name='Normal'
      value='bar'
      options={['foo', 'bar', 'baz']}
    />
  )
}

export function WithDisabledOption () {
  return (
    <div>
      <SegmentedControl
        name='WithDisabledOption-1'
        value='baz'
        options={[{ disabled: true, value: 'foo' }, 'bar', 'baz']}
      />
      <VerticalSpace />
      <SegmentedControl
        name='WithDisabledOption-2'
        value='foo'
        options={['foo', { disabled: true, value: 'bar' }, 'baz']}
      />
      <VerticalSpace />
      <SegmentedControl
        name='WithDisabledOption-3'
        value='bar'
        options={['foo', 'bar', { disabled: true, value: 'baz' }]}
      />
    </div>
  )
}
