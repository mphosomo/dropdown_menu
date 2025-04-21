# Simple Dropdown

---

A simple, zero-dependency JavaScript module to easily initialize dropdowns. Built with HTML, CSS, and JavaScript, this package provides basic styling to simplify the setup process.

## ✨ Features

- Tiny and framework-agnostic.
- No dependencies or bundler needed.
- Works with buttons, links, divs—anything!

## 🚀 Installation

To install using npm:

```bash
npm install simple-dropdown
```

## 🔧 Usage

##### HTML Structure

To use the dropdown component, copy the following HTML structure(including class and id names):

- Note: If you aren't using a bunder (e.g. Webpack), in the within the `<body></body>` tag, add the folloring:
  `<link
		rel="stylesheet"
		href="./node_modules/@mphosomo/simple_dropdown/style.css"
	/>`

Dropdown Structure:

```
    <div class="dropdown-container">
        <button type="button" id="dropdown-trigger">Trigger Dropdown</button>

        <div class="dropdown">
            <div class="dropdown-item">Item 1</div>
            <div class="dropdown-item">Item 2</div>
            <div class="dropdown-item">Item 3</div>
            <!-- All the dropdown items required -->
        </div>
    </div>
```

##### JavaScript

Import the dropdown CSS and the initializeDropdown function to use it in your project:

```
import { initializeDropdown } from '@mphosomo/simple-dropdown'
```

- If you are using a bundler (e.g. Webpack), you should also import the css in your .js file:
  `import 'simple-dropdown/style.css'`

Then call `initializeDropdown()`

- To see if the function is working, you may `console.log(initializeDropdown())` which should log `initialized!`.

## 🎨 Styling

You can easily customize the components css using the following:

- `#dropdown-trigger`
- `#dropdown-trigger:hover`
- `.dropdown-item`
- `.dropdown-item:hover`
