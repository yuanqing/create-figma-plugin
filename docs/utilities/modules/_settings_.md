
# Module: "settings"

## Index

### Functions

* [loadSettingsAsync](_settings_.md#loadsettingsasync)
* [saveSettingsAsync](_settings_.md#savesettingsasync)

## Functions

###  loadSettingsAsync

▸ **loadSettingsAsync**(`defaultSettings`: Settings): *Promise‹Settings›*

*Defined in [settings.ts:9](https://github.com/yuanqing/create-figma-plugin/blob/c1a9a79/packages/utilities/src/settings.ts#L9)*

Loads your plugin’s `settings` (stored locally on the user’s computer).
Values in `settings` default to an optional `defaultSettings` object.

**Parameters:**

Name | Type |
------ | ------ |
`defaultSettings` | Settings |

**Returns:** *Promise‹Settings›*

___

###  saveSettingsAsync

▸ **saveSettingsAsync**(`settings`: Settings): *Promise‹void›*

*Defined in [settings.ts:23](https://github.com/yuanqing/create-figma-plugin/blob/c1a9a79/packages/utilities/src/settings.ts#L23)*

Saves the given `settings` for your plugin (stored locally on the user’s
computer).

**Parameters:**

Name | Type |
------ | ------ |
`settings` | Settings |

**Returns:** *Promise‹void›*
