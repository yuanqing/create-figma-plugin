# Changelog

## 2.0.1

### `create-figma-plugin`

- Fix usage of the `Container` component in the `plugin/preact-rectangles` and `plugin/react-editor` templates.
- Bump dependencies in the `plugin/react-editor` template.

## 2.0.0

- Replaced `yarn@1` with `npm@8` for local development.

- Bumped dependencies in all packages.

### `@create-figma-plugin/ui@2.0.0`

#### CSS

- All CSS color variables (ie. variables with a `--color` prefix) have been removed. Use Figma’s official color tokens to style your custom components.
  - To migrate, do a search for `--color` in your CSS and [replace these variables with an appropriate color token](https://figma.com/plugin-docs/css-variables/#list-of-all-available-color-tokens) (ie. variables with a `--figma-color` prefix).

#### Components

- All components now utilize Figma’s color tokens, and support dark mode out of the box. ([#99](https://github.com/yuanqing/create-figma-plugin/issues/99))

##### `Banner`

- Renamed the `type` prop to `variant`.
  - Use `variant="success"` to render a green banner.

##### `Button`

- Renamed the `destructive` prop to `danger`.

##### `Container`

- The `space` prop is now required rather than optional.

##### `Disclosure`, `Modal`

- Renamed the `isOpen` prop to `open`.

##### `Dropdown`, `Textbox`, `TextboxAutocomplete`, `TextboxColor`, `TextboxMultiline`, `TextboxNumeric`

- Removed the `noBorder` prop. The default behavior is to not show a gray border in the passive state.
- Added a `variant` prop (*`string`*; optional).
  - Use `variant="border"` to show a gray border in the passive state.
  - Use `variant="underline"` to show a gray border only on the bottom side in the passive state.
- Fixed a bug with `Dropdown` not truncating when embedded within a `flex` parent. ([#101](https://github.com/yuanqing/create-figma-plugin/issues/101))
- Skip validation of clipboard content when `strict` is `false` in `TextboxAutocomplete`. ([#107](https://github.com/yuanqing/create-figma-plugin/issues/107))

##### `LoadingIndicator`, and all icon components

- The `color` prop must be a specific [Figma color token](https://github.com/yuanqing/create-figma-plugin/blob/36effe20059964672ce44daa6f772254b29baf53/packages/ui/src/types/colors.ts#L76-L130).

##### `IconButton`

- This is new, non-toggleable version of the `IconToggleButton` component. ([#102](https://github.com/yuanqing/create-figma-plugin/issues/102))

##### `IconToggleButton`

- This component was renamed from **`IconButton`**.

##### `Layer`

- The focus state now shows a border.
- Removed the `color` prop.
- Added a `component` prop (*`boolean`*; optional) for rendering a component layer (ie. purple icon and text).
- Made the `icon` prop mandatory.
- Renamed the `pageName` prop to `description`.

##### `SelectableItem`

- The focus state now shows a border.

##### `Text`

- Removed the `bold` and `muted` props.
  - Styling inline text should be done via the new inline text components **`Bold`**, **`Code`**, **`Link`**, and **`Muted`**.

##### `Toggle`

- Added a `children` prop (*`ComponentChildren`*; mandatory).

### `@create-figma-plugin/utilities@2.0.0`

- `showUI` now takes a `themeColors` option (*`boolean`*; optional), which defaults to `true`. (`themeColors` must be set to `true` if you’re using the components in `@create-figma-plugin/ui`.)

- Fix a compilation problem caused by missing `.js` extensions in the import statements in `set-relaunch-button.ts` and `unset-relaunch-button.ts`. ([#109](https://github.com/yuanqing/create-figma-plugin/issues/109))

## 1.9.2

- `@create-figma-plugin/ui`
  - Fix a bug with the `Dropdown` menu not re-calculating its height when `value` is `null`. ([#100](https://github.com/yuanqing/create-figma-plugin/issues/100))

## 1.9.1

- `@create-figma-plugin/ui`
  - Revert to `css-loader@5.2.7` and `style-loader@2.0.0`.

- Revert to `cpy-cli@3.1.1`.

## 1.9.0

- `@create-figma-plugin/build`
  - Fixed build error in Windows caused by `exec` call to `tcm`. ([#96](https://github.com/yuanqing/create-figma-plugin/issues/96))
  - Suppressed the `Cannot redeclare block-scoped variable 'fetch'.` type-check error when using `@figma/plugin-typings@^1.44.0`. ([#98](https://github.com/yuanqing/create-figma-plugin/issues/98))

- `@create-figma-plugin/ui`
  - Fixed a bug with scrollbars appearing in the `Dropdown` component. ([#97](https://github.com/yuanqing/create-figma-plugin/issues/97))
  - Added a `noTransition` prop to the `Modal` component.

- Bumped dependencies in all packages
  - Used `ava@4`, which required replacing `tsm` with `ts-node`.
  - Pinned to `typescript@4.4.4`.

## 1.8.4

- `@create-figma-plugin/build`
  - Resolve paths to `tcm` and `preact-compat` starting from `__dirname` so that `build-figma-plugin` will work when used in a `pnpm` monorepo. ([#84](https://github.com/yuanqing/create-figma-plugin/issues/84))

## 1.8.3

- `@create-figma-plugin/ui`
  - Fixed a bug with the `Modal` component incorrectly trapping focus on the first input it contains on subsequent renders. ([#80](https://github.com/yuanqing/create-figma-plugin/issues/80))

- `@create-figma-plugin/utilities`
  - Added a `ensureMinimumTime` utility.
  - Prevent modification of `defaultSettings` in `loadSettingsAsync`. ([#79](https://github.com/yuanqing/create-figma-plugin/pull/79))

- Bumped dependencies in all packages.

## 1.8.2

- Revamped the [documentation website](https://yuanqing.github.io/create-figma-plugin/).
- Bumped dependencies in all packages.

## 1.8.1

- `create-figma-plugin`
  - Fixed a bug to include the `.gitignore` file when bootstrapping from a template. ([#76](https://github.com/yuanqing/create-figma-plugin/pull/76))

## 1.8.0

- `@create-figma-plugin/utilities`
  - Added `isLocked` and `isVisible` utilities. ([#75](https://github.com/yuanqing/create-figma-plugin/pull/75))

- Added a recipe for disabling the automatic swapping of React imports using a `build-figma-plugin.ui.js` file.

## 1.7.3

- `@create-figma-plugin/build`
  - Allow `parameterOnly` to be set to `false`. ([#74](https://github.com/yuanqing/create-figma-plugin/pull/74))

## 1.7.2

- `@create-figma-plugin/build`
  - Suppressed TypeScript error that occurs when the type definition of an imported package contains `<reference types="node" />`. ([#71](https://github.com/yuanqing/create-figma-plugin/issues/71))

- `@create-figma-plugin/utilities`
  - `computeBoundingBox` – Accounted for `CodeBlock` node which does not have a `rotation` property.

- Bumped dependencies in all packages.
- Replaced `ts-node` with `tsm`.
- Use `stylelint-config-idiomatic-order` instead of `stylelint-config-rational-order` (via `stylelint-config-yuanqing`).

## 1.7.1

- Documentation updates.

## 1.7.0

- `@create-figma-plugin/build`
  - Added support for building FigJam widgets.
    - Added new configuration options `widgetApi`, `containsWidget`, and `permissions`.
  - Renamed the `apiVersion` configuration option to `api`, to be aligned with the plugin `manifest.json` API.

- `@create-figma-plugin/ui`
  - Added a FigJam theme. ([#63](https://github.com/yuanqing/create-figma-plugin/issues/63))
    - Components will automatically render using the Figma theme if the UI is launched from a Figma plugin, and the FigJam theme if the UI is launched from a FigJam plugin/widget.
  - Fixed a bug with small custom increments in the `TextboxNumeric` component. ([#70](https://github.com/yuanqing/create-figma-plugin/issues/70))

- `create-figma-plugin`
  - Refactored the `create-figma-plugin` CLI; a template can now be selected via an interactive interface.
  - Added a `widget/notepad` template, and reorganized existing templates.

- Documentation updates.

## 1.6.2

- `@create-figma-plugin/ui`
  - Fixed positioning logic in the `Modal` component.

- `@create-figma-plugin/utilities`
  - Added `traverseNodeAsync`.

## 1.6.1

- Documentation updates.

## 1.6.0

- `@create-figma-plugin/build`
  - Made `build-figma-plugin --watch` aware of changes to `build-figma-plugin.*.js` files.

- `@create-figma-plugin/ui`
  - Added a `Modal` component. ([#47](https://github.com/yuanqing/create-figma-plugin/issues/47))
  - Added new components `Disclosure`, `IconChevronDown32`, `IconChevronLeft32` `IconChevronRight32`, and `IconChevronUp32`.
  - Regenerated all icon components.
  - Added a `useWindowResize` hook. ([#59](https://github.com/yuanqing/create-figma-plugin/issues/59))
  - Added a call to `useEffect` in the `useFocusTrap` hook.
  - Added CSS variables `--box-shadow-menu`, `--box-shadow-modal`, and `--font-family-code`.
  - Made `computeBoundingBox` compatible with `@figma/plugin-typings@1.37.0`.

- `create-figma-plugin`
  - Renamed the `ui` template to `preact-rectangles`.
  - Added new templates `preact-resizable` and `react-editor`.
  - Updated the `@figma/plugin-typings` version to `1.37.0`.

- Bumped dependencies in all packages.

## 1.5.1

- Moved constants `MIXED_NUMBER` and `MIXED_STRING` from `@create-figma-plugin/ui` to `@create-figma-plugin/utilities`.

## 1.5.0

- `@create-figma-plugin/build`
  - Restart the TypeScript watcher when changes are made to `tsconfig.json`. ([#56](https://github.com/yuanqing/create-figma-plugin/issues/56))
  - Enabled usage of React components by swapping out `react` and `react-dom` imports with `preact/compat`.
  - Added the ability to import “global” CSS by adding a `!` prefix before the CSS file path. ([#60](https://github.com/yuanqing/create-figma-plugin/issues/60))
  - Accounted for the case where `figma.command` is `undefined` (eg. in a FigJam widget).

- `@create-figma-plugin/utilities`
  - Added support for FigJam nodes in `loadFontsAsync`. ([#57](https://github.com/yuanqing/create-figma-plugin/pull/57))

- Improved documentation.

## 1.4.0

- `@create-figma-plugin/build`
  - Suppressed the `Cannot redeclare block-scoped variable 'console'.` type-check error when using `@figma/plugin-typings@^1.32.0`. ([#54](https://github.com/yuanqing/create-figma-plugin/issues/54))
  - Added an escape hatch for modifying the `manifest.json` file just before it gets written to disk.

- `@create-figma-plugin/utilities`
  - `computeBoundingBox` – Accounted for FigJam-specific nodes (eg. `Connector`, `Sticky`) which do not have a `rotation` property.

- `create-figma-plugin`
  - Removed the `--yes` flag and the ability to customize the display name.
  - Removed the CLI interactive prompt.
  - Updated the plugin installation instructions in all templates.

- Bumped dependencies in all packages.

## 1.3.4

- `create-figma-plugin`
  - Pinned to a specific version of `@figma/plugin-typings` in all plugin templates.

- `@create-figma-plugin/utilities`
  - Returned `variant` data in `validateGumroadLicenseKeyMainAsync` and `validateGumroadLicenseKeyUiAsync`.

## 1.3.3

- Added docs for `editorType`.

## 1.3.2

- `@create-figma-plugin/build`
  - Fixed the building of CSS Module typings in Windows. ([#51](https://github.com/yuanqing/create-figma-plugin/issues/51))

- Improved documentation.

## 1.3.1

- `@create-figma-plugin/build`
  - Updated the configuration JSON schema.

- `@create-figma-plugin/utilities`
  - Added `deduplicateArray`.

- Added docs for `parameters` and `parameterOnly`.

## 1.3.0

- `@create-figma-plugin/build`
  - Added support for the new `editorType`, `parameters` and `parameterOnly` config.

- `@create-figma-plugin/monetization`
  - This package is deprecated; all monetization-related utility functions have been moved into `@create-figma-plugin/utilities`.

## 1.2.4

- `@create-figma-plugin/build`
  - Fixed a bug with the `build-figma-plugin` CLI throwing an error when the current working directory absolute path contains spaces. ([#49](https://github.com/yuanqing/create-figma-plugin/issues/49))

## 1.2.3

- `@create-figma-plugin/build`
  - Fixed a bug with how CSS file paths are resolved. ([#48](https://github.com/yuanqing/create-figma-plugin/issues/48))

## 1.2.2

- Added a recipe for using image assets in the plugin UI. ([#45](https://github.com/yuanqing/create-figma-plugin/issues/45))

## 1.2.1

- `create-figma-plugin`
  - Added a `ui` template.
  - Simplified the CLI; now, only a `name`, `displayName` and `template` are necessary.
  - Fixed a bug with CLI arguments parsing. ([#41](https://github.com/yuanqing/create-figma-plugin/issues/41#issuecomment-873329396))

- Added a recipe for customizing the underlying esbuild configuration.

## 1.2.0

- `@create-figma-plugin/build`
  - Added the ability to override the esbuild configuration for the main bundle (via a `build-figma-plugin.main.js` file) and the UI bundle (via a `build-figma-plugin.ui.js` file). ([#34](https://github.com/yuanqing/create-figma-plugin/issues/34))
  - Improved the UX of the `build-figma-plugin --watch --typecheck` terminal output. ([#38](https://github.com/yuanqing/create-figma-plugin/issues/38))
    - Fixed a bug with watch mode terminating on error. ([#40](https://github.com/yuanqing/create-figma-plugin/issues/40))

- `@create-figma-plugin/monetization`
  - This is a new package that includes utilities for:
    - Tracking the number of plugin runs.
    - Verifying a Gumroad license key.

- `@create-figma-plugin/ui`
  - New features:
    - Added `Banner` and `IconButton` components.
    - Added a `validateOnBlur` prop to `Textbox`, `TextboxNumeric`, and `TextboxMultiline`.
  - Bug fixes:
    - Allow pressing `Tab` to hide the menu in the `Dropdown` component.
    - Fixed a bug for when the `suffix` prop is specified in `TextboxNumeric`.
    - Fixed UI bugs in the `useFocusTrap` and `useScrollableMenu` hooks.
    - Middle-aligned the `icon` relative to the height of the textbox in the `Textbox`, `TextboxAutocomplete`, `TextboxNumeric` components.
    - Adjusted the focused style (the height of the blue outlined box) and the selected style (the background color of the selected text) of all textboxes (ie. `Textbox` etc.) to be identical to that in the Figma editor.
    - Prevent menu items in `Dropdown` and `TextboxAutocomplete` from wrapping.
    - Dynamically adjust the horizontal menu position of `Dropdown`. ([#37](https://github.com/yuanqing/create-figma-plugin/issues/37))
  - CSS:
    - Added colors `--color-black-6-translucent`, `--color-black-3-translucent`, and `--color-blue-30-translucent` to `@create-figma-plugin/ui/lib/css/base.css`.

- `@create-figma-plugin/utilities`
  - New features:
    - `convertHexColorToRgbColor`
    - `convertNamedColorToHexColor`
    - `convertRgbColorToHexColor`
    - `isValidHexColor`
    - `unsetRelaunchButton`
  - Bug fixes:
    - When `setRelaunchButton` is called, any relaunch buttons (with a different `relaunchButtonId`) previously set by the plugin on the particular node will be retained rather than overriden.

## 1.1.1

- `@create-figma-plugin/ui`
  - New features:
    - `TextboxColor` – Added a new component for receiving a user input hex color with opacity.
    - `Dropdown`, `TextboxAutocomplete` – Allow individual menu options to be `disabled`.
    - `SearchTextbox`, `Textbox`, `TextboxAutocomplete`, `TextboxMultiline`, `TextboxNumeric` – Added a `spellCheck` prop that defaults to `false` to hide the red squiggly lines from the browser’s spellchecking.
  - Bug fixes:
    - `Dropdown`, `TextboxAutocomplete` – Fixed a `z-index` bug with the menu, hide the menu on clicking anywhere outside the plugin `iframe` (previously the menu only hides when clicking outside the menu but *within* the plugin `iframe`).
    - `TextboxNumeric` – Fixed a bug with `revertOnEscapeKeyDown` not working as expected when the `suffix` prop is also set.
    - `Dropdown` – Fixed dynamic positioning of the menu.
    - `Button`, `SearchTextbox`, `Textbox`, `TextboxAutocomplete`, `TextboxMultiline`, `TextboxNumeric` – Set the `background-color` of the root element to `transparent`.

## 1.0.2

- `create-figma-plugin`
  - Added `src/**/*.tsx` to the **`"include"`** key of the `default` template’s `tsconfig.json`.

## 1.0.1

- `@create-figma-plugin/ui`
  - Made the `--box-shadow` style identical to that in the Figma CSS.
  - Fixed the style of disabled options in the `SegmentedControl` component.

- `create-figma-plugin`
  - Included `plugin-templates/*/.gitignore` in the published package.
  - Added a `^` prefix to `@create-figma-plugin/*` version numbers in the `default` template.

- Improved documentation.

## 1.0.0

*Note: 1.0.0 requires Node.js v14.*

- [`@create-figma-plugin/build@1`](#create-figma-pluginbuild1)
- [`@create-figma-plugin/tsconfig@1`](#create-figma-plugintsconfig1)
- [`@create-figma-plugin/ui@1`](#create-figma-pluginui1)
- [`@create-figma-plugin/utilities@1`](#create-figma-pluginutilities1)

### `@create-figma-plugin/build@1`

- The `build-figma-plugin` CLI is now powered by [esbuild](https://esbuild.github.io), replacing [Webpack](https://webpack.js.org/). esbuild is *extremely* fast, and building any non-trivial plugin should reliably take **less than 1 second**. (esbuild actually runs within a couple hundred milliseconds, but some parts of the build process – compiling and generating `.d.ts` files for CSS modules, generating the `manifest.json` file – still runs in Node.js-land.)

- Given the move away from Webpack, the ability to override the build process via a `figma-plugin.config.js` file has also been removed.

- Minification and type checking of your plugin code is now disabled by default in the `build-figma-plugin` CLI. The `build` and `watch` scripts in your `package.json` should be updated as follows:

    ```diff
      {
        ...
        "scripts": {
    -     "build": "build-figma-plugin",
    +     "build": "build-figma-plugin --typecheck --minify",
    -     "watch": "build-figma-plugin --watch",
    +     "watch": "build-figma-plugin --typecheck --watch",
          ...
        },
        ...
      }
    ```

- The ability to use SCSS in CSS Modules has been removed. Now, only “vanilla” CSS Modules is supported. To migrate, [use the `sass` CLI to do a one-off conversion of your `.scss` files to `.css`](https://sass-lang.com/documentation/cli/dart-sass), then update your UI code to reference the generated `.css` files.

- There’s now a [JSON schema](https://yuanqing.github.io/create-figma-plugin/figma-plugin.json) for validating the plugin configuration in your `package.json` file. To enable autocomplete and inline validation of your plugin configuration in [Visual Studio Code](https://code.visualstudio.com), create a `.vscode/settings.json` file containing the following:

    ```json
    {
      "json.schemas": [
        {
          "fileMatch": [
            "package.json"
          ],
          "url": "https://yuanqing.github.io/create-figma-plugin/figma-plugin.json"
        }
      ]
    }
    ```

### `@create-figma-plugin/tsconfig@1`

- The [`tsconfig.json`](https://github.com/yuanqing/create-figma-plugin/blob/main/packages/tsconfig/tsconfig.json) file has changed significantly, given the move to esbuild.

    ```json
    {
      "compilerOptions": {
        "esModuleInterop": true,
        "isolatedModules": true,
        "jsx": "react",
        "jsxFactory": "h",
        "lib": ["DOM", "ES2020"],
        "module": "ES2020",
        "moduleResolution": "Node",
        "strict": true
      }
    }
    ```

- Either copy the above to your project’s `tsconfig.json`, or directly extend from `@create-figma-plugin/tsconfig`. You should at least [ensure that the `"isolatedModules"` option is enabled in your `tsconfig.json`](https://esbuild.github.io/content-types/#typescript-caveats).

### `@create-figma-plugin/ui@1`

- There are *many* breaking changes and new features. Your best bet for migrating to `v1` might be to try to build your plugin using the `build-figma-plugin --typecheck --watch` command, and then incrementally fixing the errors surfaced by the TypeScript compiler. Otherwise, refer to usage examples of all the components in the [Storybook](https://yuanqing.github.io/create-figma-plugin/storybook/), or see below for a detailed breakdown of all component changes.

- One of the most significant changes is that the `onChange` prop of all components now has the signature `(event: JSX.TargetedEvent<HTMLInputElement>) => void`. See the before and after, using the `Checkbox` component as an example:

    ```tsx
    // Before `v1`

    const [state, setState] = useState({ foo: false })
    // ...
    <Checkbox name="foo" onChange={setState} value={state.foo}>
      Text
    </Checkbox>
    ```

    ```tsx
    // `v1`

    const [value, setValue] = useState(false)
    function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
      const newValue = event.currentTarget.checked
      console.log(newValue) //=> either `true` or `false`
      setValue(newValue)
    }
    // ...
    <Checkbox onChange={handleChange} value={value}>
      Text
    </Checkbox>
    ```

- An alternative to using the `onChange` prop to listen to state changes is to use the new `onValueChange` prop. This prop is available on all components that also have an `onChange` prop. The `onValueChange` handler has the signature `<Value, Name extends string>(newValue: Value, name?: Name) => void`, and it is called on every DOM `change` event. The second `name` parameter passed to the handler is precisely the `name` prop that was set on the component. Again, using the `Checkbox` component as an example:

    ```tsx
    const [value, setValue] = useState(false)
    function handleChange(newValue: boolean, name: undefined | string) {
      console.log(newValue) //=> either `true` or `false`
      console.log(name)     //=> 'foo'
      setValue(newValue)
    }
    // ...
    <Checkbox name="foo" onValueChange={handleValueChange} value={value}>
      Text
    </Checkbox>
    ```

- The `onChange` prop has been removed from the `SearchTextbox`, `Textbox`, `TextboxAutocomplete`, and `TextboxNumeric` components. (This prop was inaccurately named for these components because the handler is actually called on every DOM `input` event.) Instead, use the `onInput` and `onValueInput` props to handle the DOM `input` event.

- The `DropdownMenu` component has been removed. Use the new `Dropdown` component, which has an improved UI design and component API.

- All component styles are now written as “vanilla” CSS modules rather than SCSS. The previous SCSS variables are now expressed as [CSS variables on `:root`](https://github.com/yuanqing/create-figma-plugin/blob/main/packages/ui/src/css/base.css). Refer to the [`base.css`](https://github.com/yuanqing/create-figma-plugin/blob/main/packages/ui/src/css/base.css) file in `@create-figma-plugin/ui` for the list of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) that are available for use in your custom CSS.

- Added new components `Dropdown`, `MiddleAlign`, `TextboxMultiline` and `Toggle`, in addition to **175** icon components extracted from [Figma’s official “UI2” design system file on Figma Community](https://figma.com/community/file/928108847914589057).

#### Detailed breakdown of component changes

##### Icons

- All icons are now exported as Preact functional components. Refer to the following mapping to migrate existing icons to their equivalents in `v1`:

    - `checkCircleIcon` &rarr; `<IconCheckCircle32 />`
    - `checkIcon` &rarr; `<IconMenuCheckmarkChecked16 />`
    - `componentIcon` &rarr; `<IconLayerComponent16 />`
    - `crossIcon` &rarr; `<IconCross32 />`
    - `frameIcon` &rarr; `<IconLayerFrame16 />`
    - `imageIcon` &rarr; `<IconLayerImage16 />`
    - `moveDownIcon` &rarr; `<IconMoveDown16 />`
    - `moveRightIcon` &rarr; `<IconMoveRight16 />`
    - `searchIcon` &rarr; `<IconSearch32 />`
    - `spaceHorizontalIcon` &rarr; `<IconSpacingHorizontal16 />`
    - `spaceVerticalIcon` &rarr; `<IconSpacingVertical16 />`

    Note that `IconCheckCircle32`, `IconCross32` and `IconSearch32` all have a dimension of `32px`, which is double the size of the corresponding icons in versions of `@create-figma-plugin/ui` prior to `v1`.

- All icons also now take a `color` prop for customizing the `fill` colour of the icon `svg`.

##### `Button`

- The `focused` prop has been removed.

##### `Checkbox`

- The `focused` prop has been removed.
- The `onChange` prop now has the signature `(event: JSX.TargetedEvent<HTMLInputElement>) => void`.
- There’s a new `onValueChange` prop with the signature `(newValue: boolean, name?: string) => void`.

##### `FileUploadButton`

- The `focused` and `onClick` props have been removed.
- The `onSelectedFiles` prop now has the signature `(files: Array<File>) => void`.

##### `FileUploadDropzone`

- The `onSelectedFiles` prop now has the signature `(files: Array<File>) => void`.

##### `Layer`

- This component has an almost entirely new API. (The `onClick`, `selected`, and `type` props have been removed. New props include `bold`, `onChange`, `onValueChange`, `icon`, `color`, and `value`.)

##### `LoadingIndicator`

- There’s a new `color` prop for customizing the `fill` colour of the `svg` representing the loading indicator.

##### `RadioButtons`

- The `value` prop can now be `null`, or a `boolean`, `number`, or `string`.
- The `focused` prop has been removed.
- The `onChange` prop now has the signature `(event: JSX.TargetedEvent<HTMLInputElement>) => void`.
- There’s a new `onValueChange` prop with the signature `(newValue: boolean | number | string, name?: string) => void`.
- For the `RadioButtonsOption` type:
  - The `text` key has been renamed to `children`.
  - `value` can now only be a `boolean`, `number`, or `string`.

##### `SearchTextbox`

- The `focused` and `onChange` props have been removed.
- There’s a new `onInput` prop with the signature `(event: JSX.TargetedEvent<HTMLInputElement>) => void`.
- There’s a new `onValueInput` prop with the signature `(newValue: string, name?: string) => void`.

##### `SegmentedControl`

- The height of the component is now `24px` (reduced from `36px`) to be identical to the height of segmented controls in the Figma editor UI.
- The style of the component’s focused state has been tweaked to follow that of segmented controls in the Figma editor UI.
- The `value` prop cannot be `null` and can now only be a `boolean`, `number`, or `string`.
- The `focused` prop has been removed.
- The `onChange` prop now has the signature `(event: JSX.TargetedEvent<HTMLInputElement>) => void`.
- There’s a new `onValueChange` prop with the signature `(newValue: boolean | number | string, name?: string) => void`.
- In the `SegmentedControlOption` type:
  - The `text` key has been renamed to `children`.
  - `value` cannot be `null` and can now only be a `boolean`, `number`, or `string`.

##### `SelectableItem`

- The `onKeyDown` prop has been removed.
- The `onChange` prop now has the signature `(event: JSX.TargetedEvent<HTMLInputElement>) => void`.
- There’s a new `onValueChange` prop with the signature `(newValue: boolean, name?: string) => void`.

##### `Tabs`

- The `focused` prop has been removed.
- The `onChange` prop now has the signature `(event: JSX.TargetedEvent<HTMLInputElement>) => void`.
- There’s a new `onValueChange` prop with the signature `(newValue: string, name?: string) => void`.
- In the `TabsOption` type:
  - The `disabled` and `text` keys have been removed.
  - The `view` key has been renamed to `children`.
  - `value` can now only be a `string`.

##### `Textbox`

- The height of the component is now `28px` (reduced from `32px`) to be identical to the height of textboxes in the Figma editor UI.
- The `value` prop cannot be `null` and can now only be a `string`.
  - A [“Mixed” value](https://figma.com/plugin-docs/api/properties/figma-mixed/) is represented by the `MIXED_STRING` constant from `@create-figma-plugin/utilities`.
- The `focused`, `onChange`, and `type` props have been removed.
- There’s a new `onInput` prop with the signature `(event: JSX.TargetedEvent<HTMLInputElement>) => void`.
- There’s a new `onValueInput` prop with the signature `(newValue: string, name?: string) => void`.
- There’s a new `password` prop for changing the display to a password field. (Previously, you’d set the `type` prop to `'password'`.)
- There’s a new `revertOnEscapeKeyDown` prop to enable reverting the original `value` when the `Esc` key is pressed.

##### `TextboxAutocomplete`

- The height of the component is now `28px` (reduced from `32px`) to be identical to the height of textboxes in the Figma editor UI.
- The height of the autocomplete menu will dynamically expand (while still keeping within the dimensions of `window`) so as to fit as many items as possible in the menu.
- The `focused` and `onChange` props have been removed.
- There’s a new `onInput` prop with the signature `(event: JSX.TargetedEvent<HTMLInputElement>) => void`.
- There’s a new `onValueInput` prop with the signature `(newValue: string, name?: string) => void`.
- There’s a new `revertOnEscapeKeyDown` prop to enable reverting the original `value` when the `Esc` key is pressed.

##### `TextboxNumeric`

- The height of the component is now `28px` (reduced from `32px`) to be identical to the height of textboxes in the Figma editor UI.
- The `value` prop cannot be `null` and can now only be a `string`.
  - A [“Mixed” value](https://figma.com/plugin-docs/api/properties/figma-mixed/) is represented by the `MIXED_STRING` constant from `@create-figma-plugin/utilities`.
- The `focused`, and `onChange` props have been removed.
- There’s a new `onInput` prop with the signature `(event: JSX.TargetedEvent<HTMLInputElement>) => void`.
- There’s a new `onValueInput` prop with the signature `(newValue: string, name?: string) => void`.
- There’s a new `onNumericValueInput` prop with the signature `(newValue: null | number, name?: string) => void`, where `newValue` is the result of evaluating `value` as a numeric expression.
  - If `value` is the empty string, then `newValue` is null.
  - If `value` is the `MIXED_STRING` constant from `@create-figma-plugin/utilities`, then `newValue` will be the `MIXED_NUMBER` constant from the same.
- There’s a new `revertOnEscapeKeyDown` prop to enable reverting the original `value` when the `Esc` key is pressed.
- There’s a new `suffix` prop for automatically appending an arbitrary string to the numeric textbox.

### `@create-figma-plugin/utilities@1`

- `compareArrays` has been removed. Use `compareObjects` instead.
- `isWithinInstance` has been renamed to `isWithinInstanceNode`.
- `computeSiblingNodes`, `deduplicateNodes`, `sortNodesByCanonicalOrder`, and `sortNodesByName` all now take a type parameter `<Node extends SceneNode>`. This type parameter allows these functions to accept and return arrays of specific node types, rather than merely an array of `SceneNode`.
- `loadSettingsAsync` and `saveSettingsAsync` both now take an optional second argument for customizing the key for loading from or saving to `figma.clientStorage`.
- Added new utilities `compareStringArrays`, `getParentNode`, and `getSceneNodeById`.
