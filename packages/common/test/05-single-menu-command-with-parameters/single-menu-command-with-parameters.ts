/* eslint-disable sort-keys */

import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import test from 'ava'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  api: '1.0.0',
  widgetApi: '1.0.0',
  editorType: ['figma'],
  containsWidget: false,
  id: 'a',
  commandId: null,
  name: 'a',
  main: null,
  ui: null,
  parameters: null,
  parameterOnly: true,
  relaunchButtons: null,
  rest: null
}

const menuItemConfig = {
  commandId: 'c--default',
  name: 'b',
  main: {
    src: 'c',
    handler: 'default'
  },
  ui: null,
  menu: null
}

test('single parameter', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-single-parameter'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameters: [
          {
            key: 'd',
            name: 'd',
            description: null,
            allowFreeform: false,
            optional: false
          }
        ],
        parameterOnly: true
      }
    ]
  })
})

test('name', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-name'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameters: [
          {
            key: 'd',
            name: 'e',
            description: null,
            allowFreeform: false,
            optional: false
          }
        ],
        parameterOnly: true
      }
    ]
  })
})

test('description', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '03-description'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameters: [
          {
            key: 'd',
            name: 'd',
            description: 'e',
            allowFreeform: false,
            optional: false
          }
        ],
        parameterOnly: true
      }
    ]
  })
})

test('allow freeform', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-allow-freeform'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameters: [
          {
            key: 'd',
            name: 'd',
            description: null,
            allowFreeform: true,
            optional: false
          }
        ],
        parameterOnly: true
      }
    ]
  })
})

test('optional', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-optional'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameters: [
          {
            key: 'd',
            name: 'd',
            description: null,
            allowFreeform: false,
            optional: true
          }
        ],
        parameterOnly: true
      }
    ]
  })
})

test('multiple parameters', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '06-multiple-parameters'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameters: [
          {
            key: 'd',
            name: 'e',
            description: null,
            allowFreeform: true,
            optional: false
          },
          {
            key: 'f',
            name: 'f',
            description: 'g',
            allowFreeform: false,
            optional: true
          }
        ],
        parameterOnly: true
      }
    ]
  })
})

test('parameter only false', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '07-parameter-only-false'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameters: [
          {
            key: 'd',
            name: 'd',
            description: null,
            allowFreeform: false,
            optional: false
          }
        ],
        parameterOnly: false
      }
    ]
  })
})
