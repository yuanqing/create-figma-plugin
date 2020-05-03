# Figma plugin basics

## How a Figma plugin works

### Overview

Context | Figma plugin API  | JavaScript API
:--|:--|:--
Main context | 🟢 Available (via the [`figma`](https://figma.com/plugin-docs/api/figma/) global object) | 🟡 Only a subset is available (excludes [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), [`Fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))
UI context | 🔴 Not available | 🟢 Available

See that:

1. There is a concept of a “main context” and a “UI context”.
2. The availability of the Figma plugin API and JavaScript API differs between the two contexts.

### Main context

The entry point of a plugin command is a sandboxed JavaScript environment. We call this the plugin command’s **“main context”**.

Within this main context:

1. Our JavaScript code can access and manipulate the contents of the Figma document via the [Figma plugin API](https://figma.com/plugin-docs/api/api-overview/). The plugin API is made available on the [`figma`](https://figma.com/plugin-docs/api/figma/) global object.
2. Our JavaScript code can only access a subset of the standard browser JavaScript API. Most notably, this subset *excludes* both the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) as well as APIs such as [`Fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### UI context

Showing a UI for a plugin command must be explicitly triggered in the command’s main context. Figma would then display a modal in the Figma editor interface; this modal contains an `<iframe>` within which which we can render a UI. We call this `<iframe>` the plugin command’s **“UI context”**.

Within this UI context:

1. Our JavaScript code cannot access the Figma plugin API; there is *no* `figma` global.
2. Our JavaScript code can access the full browser JavaScript API. This includes both the DOM and `Fetch`. Note that the DOM would be DOM of the `<iframe>`, *not* the Figma editor.
3. We can have any arbitrary HTML, CSS, and JavaScript in the `<iframe>`.

### Three common use cases

Conceptually, the main and UI context would communicate through [“message passing”](https://figma.com/plugin-docs/how-plugins-run/). (In practice, this involves registering event listeners and emitting events.) Message passing between the main and UI context is the only way to utilize parts of the Figma plugin API or JavaScript API that are only available in the opposite context.

The following are three common use cases that we will encounter when developing a Figma plugin, and the steps for making each use case possible within Figma’s plugin execution model.

#### “We want to get data from the Figma document, and show the data in our plugin UI.”

To accomplish this:

1. In the main context, call the function to show the UI.
2. Read the required data off the Figma document in the main context. Pass the data from main context → UI context.
3. Receive and show the data in the `<iframe>`.

#### “We want to get data from the user, and use the data in our Figma document.”

To accomplish this:

1. In the main context, call the function to show the UI.
2. Render a form within the `<iframe>`. When the user clicks a submit button in the form, pass the user input data from UI context → main context.
3. Receive and use the data in the main context.

#### “We want to get data from an API endpoint, and use the data in our Figma document.”

To accomplish this:

1. In the main context, call the function to show the UI.
2. Pass a request to make an API call from main context → UI context.
3. Make an API call in the `<iframe>`. When we receive the data from the API, pass the data from UI context → main context.
4. Receive and use the data in the main context.

---

## What a Figma plugin can and cannot do

A Figma plugin can…

- Read and manipulate the contents (ie. pages, layers, components, styles) of the currently-open Figma document
- Store and retrieve data that is specific to the currently-open document
- Store and retrieve data that is specific to the plugin
- Get and set the user’s selection
- Get and set the currently-active page
- Run code in response to changes in the user’s selection or the currently-active page, while the plugin is currently running
- Change the viewport and zoom level
- Collapse and uncollapse layers in the the layer list panel
- Display a user interface in a modal in the Figma editor interface
- Do anything that can be done in an `<iframe>` using HTML, CSS and JavaScript eg. making API calls over the network, requesting a file from the user, handling images, leveraging web technologies like `<canvas>`, and so on

A Figma plugin cannot…

- Access Figma documents that are not currently open
- Create or open a new or existing Figma document
- Read or modify the name, ID, and URL of the currently-open Figma document
- Read or modify the document’s users and their access permissions
- Read or modify the document’s comments
- Read or modify components and styles from a Team library
- Run code in response to “granular” user actions in the Figma editor eg. mouse events on the canvas
- Show more than one modal; at most one plugin modal can be shown at a time
- Run persistently in the background
- Run alongside other plugins; at most one plugin can be running at a given time
- Trigger other plugins
- Trigger native Figma commands
- Specify keyboard shortcuts for its commands
- Run while the user is in Presentation View
- Run if the user only has View permissions for the currently-open document
- Modify the native Figma editor interface
