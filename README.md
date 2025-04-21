# Simple Dropdown

A simple, zero-dependency JavaScript module to easily initialize dropdowns. The package only works with bundler as it utulizes ES modules. Built with HTML, CSS, and JavaScript, this package provides basic styling and functionality to simplify the setup process.

## ✨ Features

- Tiny and framework-agnostic.
- No dependencies needed.
- Works with buttons, links, divs—anything!

## 🚀 Installation

To install using npm:

```bash
npm install @mphosomo/simple_dropdown
```

## 🔧 Usage

##### HTML Structure

To use the dropdown component, copy the following HTML structure(including class and id names):

```HTML
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

Import the initializeDropdown function to use it in your project: (Pay attention to comments)

```js
import { initializeDropdown } from "@mphosomo/simple_dropdown";
import "@mphosomo/simple_dropdown/style.css";

// To see if it works:
console.log(initializeDropdown()); // Should log 'initialized!'
```

## 🎨 Styling

You can easily customize the components css using the following:

- `#dropdown-trigger`
- `#dropdown-trigger:hover`
- `.dropdown-item`
- `.dropdown-item:hover`
