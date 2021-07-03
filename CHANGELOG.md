# Changelog

## 1.2.1

- `create-figma-plugin`
  - Add a `ui` template
  - Simplify the CLI; now, only a `name`, `displayName` and `template` are necessary

## 1.2.0

- `@create-figma-plugin/build`
  - Added the ability to override the esbuild configuration for the `main` bundle (via a `build-figma-plugin.main.js` file) and the `ui` bundle (via a `build-figma-plugin.ui.js` file)
  - Improve the UX of the `build-figma-plugin --watch --typecheck` terminal output

- `@create-figma-plugin/monetization`
  - This is a new package that includes utilities for:
    - Tracking the number of plugin runs
    - Verifying a Gumroad license key

- `@create-figma-plugin/ui`
  - New features:
    - Added `Banner` and `IconButton` components
    - Added a `validateOnBlur` prop to `Textbox`, `TextboxNumeric`, and `TextboxMultiline`
  - Bug fixes:
    - Allow pressing `Tab` to hide the menu in the `Dropdown` component
    - Fixed a bug for when the `suffix` prop is specified in `TextboxNumeric`
    - Fixed UI bugs in the `useFocusTrap` and `useScrollableMenu` hooks
    - Middle-aligned the `icon` relative to the height of the textbox in the `Textbox`, `TextboxAutocomplete`, `TextboxNumeric` components
    - Adjusted the focused style (the height of the blue outlined box) and the selected style (the background color of the selected text) of all textboxes (ie. `Textbox` etc.) to be identical to that in the Figma editor
    - Prevent menu items in `Dropdown` and `TextboxAutocomplete` from wrapping
    - Dynamically adjust the horizontal menu position of `Dropdown`
  - CSS:
    - Added colors `--color-black-6-translucent`, `--color-black-3-translucent`, and `--color-blue-30-translucent` to `@create-figma-plugin/ui/lib/css/base.css`

- `@create-figma-plugin/utilities`
  - New features:
    - `convertHexColorToRgbColor`
    - `convertNamedColorToHexColor`
    - `convertRgbColorToHexColor`
    - `isValidHexColor`
    - `unsetRelaunchButton`
  - Bug fixes:
    - When `setRelaunchButton` is called, any relaunch buttons (with a different `relaunchButtonId`) previously set by the plugin on the particular node will be retained rather than overriden

## 1.1.1

- `@create-figma-plugin/ui`
  - New features:
    - `TextboxColor` – Added a new component for receiving a user input hex color with opacity
    - `Dropdown`, `TextboxAutocomplete` – Allow individual menu options to be `disabled`
    - `SearchTextbox`, `Textbox`, `TextboxAutocomplete`, `TextboxMultiline`, `TextboxNumeric` – Added a `spellCheck` prop that defaults to `false` to hide the red squiggly lines from the browser’s spellchecking
  - Bug fixes:
    - `Dropdown`, `TextboxAutocomplete` – Fixed a `z-index` bug with the menu, hide the menu on clicking anywhere outside the plugin `iframe` (previously the menu only hides when clicking outside the menu but *within* the plugin `iframe`)
    - `TextboxNumeric` – Fixed a bug with `revertOnEscapeKeyDown` not working as expected when the `suffix` prop is also set
    - `Dropdown` – Fixed dynamic positioning of the menu
    - `Button`, `SearchTextbox`, `Textbox`, `TextboxAutocomplete`, `TextboxMultiline`, `TextboxNumeric` – Set the `background-color` of the root element to `transparent`

## 1.0.2

- `create-figma-plugin`
  - Added `src/**/*.tsx` to the **`"include"`** key of the `default` template’s `tsconfig.json`

## 1.0.1

- `@create-figma-plugin/ui`
  - Made the `--box-shadow` style identical to that in the Figma CSS
  - Fixed the style of disabled options in the `SegmentedControl` component
- `create-figma-plugin`
  - Included `plugin-templates/*/.gitignore` in the published package
  - Added a `^` prefix to `@create-figma-plugin/*` version numbers in the `default` template
- Improved documentation

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

- There are *many* breaking changes and new features. Your best bet for migrating to `v1` might be to try to build your plugin using the `build-figma-plugin --typecheck --watch` command, and then incrementally fixing the errors surfaced by the TypeScript compiler. Otherwise, refer to usage examples of all the components in the [Storybook](https://yuanqing.github.io/create-figma-plugin/ui/), or see below for a detailed breakdown of all component changes.

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
  - A [“Mixed” value](https://www.figma.com/plugin-docs/api/properties/figma-mixed/) is represented by the `MIXED_STRING` constant from `@create-figma-plugin/utilities`.
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
  - A [“Mixed” value](https://www.figma.com/plugin-docs/api/properties/figma-mixed/) is represented by the `MIXED_STRING` constant from `@create-figma-plugin/utilities`.
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
