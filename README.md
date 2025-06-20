# Chat Widget

A customizable chat widget component for web applications built with React. Easily embed a modern, themeable chat interface in your app or website, either as a React component or as a standalone web component.

[![npm version](https://img.shields.io/npm/v/chat-widget.svg)](https://www.npmjs.com/package/chat-widget)
[![license](https://img.shields.io/npm/l/chat-widget.svg)](LICENSE)

---

## Features

- Plug-and-play chat widget for React or any web page
- Customizable themes and branding
- Shadow DOM encapsulation for style isolation
- Easily configurable via props or attributes
- Supports both ESM/CJS and IIFE (web component) builds
- Built with React, Zustand, and Tailwind CSS

---

## Installation

```bash
npm install chat-widget
# or
yarn add chat-widget
```

---

## Usage

### 1. As a React Component

```tsx
import React from "react";
import { Widget } from "chat-widget";

export default function App() {
  return (
    <Widget
      title="Eloquent AI"
      position="bottom-right"
      theme={{
        primary: "#6F33B7",
        cardBackground: "#fff",
        // ...other theme options
      }}
      suggestedQuestions={[
        "What can you help me with?",
        "Tell me a fun fact",
      ]}
    />
  );
}
```

#### Props

| Prop                | Type      | Description                                      |
|---------------------|-----------|--------------------------------------------------|
| `brand`             | `Brand`   | Branding info `{ name, websiteUrl }`              |
| `chatContext`       | `string`  | Context string for the chat                       |
| `position`          | `"bottom-left" \| "bottom-right"` | Widget position on screen |
| `showBrand`         | `boolean` | Show branding in the widget footer                |
| `status`            | `"maintenance" \| "offline" \| "online"` | Widget status |
| `suggestedQuestions`| `string[]`| Suggested questions for quick start               |
| `theme`             | `Theme`   | Theme object (see below)                          |
| `title`             | `string`  | Widget title                                      |

---

### 2. As a Web Component (IIFE Build)

You can use the widget as a custom element `<chat-widget>` in any HTML page. Load the IIFE bundle and use the element directly:

```html
<!-- 1. Load the IIFE bundle (from your CDN or local build) -->
<script src="/dist/iife/chat-widget.iife.js"></script>

<!-- 2. Add the widget to your page -->
<chat-widget title="Eloquent AI" position="bottom-right"></chat-widget>

<!-- 3. Or boot dynamically with config -->
<script>
  window.ChatWidget.boot({
    title: "Eloquent AI",
    position: "bottom-right",
    theme: {
      primary: "#6F33B7",
      cardBackground: "#fff",
      // ...
    },
    suggestedQuestions: [
      "What can you help me with?",
      "Tell me a fun fact"
    ]
  });
</script>
```

You can also update the widget config at runtime:

```js
window.ChatWidget.update({ title: "New Title" });
```

---

## Theming

You can fully customize the widget's appearance via the `theme` prop or attribute. Example theme objects:

```js
const eloquentTheme = {
  assistantMessageBackground: "#F1F5F9",
  assistantMessageText: "#020817",
  border: "#E1E7EF",
  cardBackground: "#FFFFFF",
  footerBackground: "#F8FAFC",
  headerBackground: "#F1F5F9",
  primary: "#6F33B7",
  primaryText: "#FFFFFF",
  statusMaintenance: "#B7860B",
  statusOffline: "#94A3B8",
  statusOnline: "#16A249",
  textMuted: "#65758B",
  textPrimary: "#020817",
  textSecondary: "#94A3B8",
  userMessageBackground: "#6F33B7",
  userMessageText: "#FFFFFF",
};
```

Other built-in themes include `eloquentDark`, `forest`, `forestDark`, `minimalist`, and `minimalistDark` (see `src/constants/themes.ts`).

---

## API Reference

### `window.ChatWidget`
- `boot(config?)`: Mounts the widget with the given config.
- `update(config)`: Updates the widget's config at runtime.

### `Widget` Props
See the table above for all available props and their types.

---

## Development & Contributing

1. Clone the repo:
   ```bash
   git clone https://github.com/kelvin-oliveira/chat-widget.git
   cd chat-widget
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run locally:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

Pull requests and issues are welcome!

---

## License

ISC © Kelvin Oliveira 