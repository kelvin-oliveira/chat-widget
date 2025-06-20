# Chat Widget

A customizable chat widget component for web applications built with React. Easily embed a modern, AI-powered chat interface in your app or website, either as a React component or as a standalone web component.

[![npm version](https://img.shields.io/npm/v/@k12kelvin/chat-widget.svg)](https://www.npmjs.com/package/@k12kelvin/chat-widget)

---

## Features

- **AI-Powered**: Connected to GPT-4.1-nano for intelligent conversations
- **Plug-and-play** chat widget for React or any web page
- **Multiple integration methods**: React component, web component, or global settings
- **Customizable themes** and branding with built-in presets
- **Shadow DOM encapsulation** for complete style isolation
- **Flexible configuration** via props, attributes, or global settings
- **Live playground** available at [widget-demo-app.vercel.app](https://widget-demo-app.vercel.app/)
- Built with React, Zustand, and Tailwind CSS

---

## Installation

```bash
npm install @k12kelvin/chat-widget
```

---

## Usage

### 1. As a React Component

```tsx
import React from "react";
import { Widget } from "@k12kelvin/chat-widget";

export default function App() {
  return (
    <Widget
      title="Eloquent AI"
      position="bottom-right"
      chatContext="You are a helpful customer support assistant for our e-commerce platform."
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
| `chatContext`       | `string`  | Context string passed to the AI for personalized responses |
| `position`          | `"bottom-left" \| "bottom-right"` | Widget position on screen |
| `showBrand`         | `boolean` | Show branding in the widget footer                |
| `status`            | `"maintenance" \| "offline" \| "online"` | Widget status |
| `suggestedQuestions`| `string[]`| Suggested questions for quick start               |
| `theme`             | `Theme`   | Theme object (see theming section)               |
| `title`             | `string`  | Widget title displayed in header                  |

---

### 2. As a Web Component

You can use the widget as a custom element `<chat-widget>` in any HTML page. The widget requires React and ReactDOM to be loaded first.

#### Method 1: Global Settings Configuration

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Widget Test</title>
</head>
<body>
  <script>
    window.chatWidgetSettings = {
      title: "Hello from Intercom Style!",
      position: "bottom-right",
      chatContext: "You are a helpful assistant for our website visitors.",
      suggestedQuestions: [
        "How can I get started?",
        "What services do you offer?"
      ]
    };
  </script>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@k12kelvin/chat-widget@0.1.0/dist/iife/chat-widget.iife.js"></script>
</body>
</html>
```

#### Method 2: Custom Element with Attributes

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Widget Test</title>
</head>
<body>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@k12kelvin/chat-widget@0.1.0/dist/iife/chat-widget.iife.js"></script>
  <chat-widget 
    title="Eloquent AI" 
    position="bottom-right"
    chat-context="You are a helpful customer service representative."
  ></chat-widget>
</body>
</html>
```

#### Method 3: Programmatic Boot

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Widget Test</title>
</head>
<body>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@k12kelvin/chat-widget@0.1.0/dist/iife/chat-widget.iife.js"></script>
  <script>
    window.ChatWidget.boot({
      title: "Eloquent AI",
      position: "bottom-right",
      chatContext: "You are an expert product advisor for our tech store.",
      theme: {
        primary: "#6F33B7",
        cardBackground: "#fff"
      },
      suggestedQuestions: [
        "What can you help me with?",
        "Tell me a fun fact"
      ]
    });
  </script>
</body>
</html>
```

You can also update the widget configuration at runtime:

```js
window.ChatWidget.update({ 
  title: "New Title",
  chatContext: "Updated context for the AI"
});
```

---

## Try it Live

Visit our interactive playground at **[widget-demo-app.vercel.app](https://widget-demo-app.vercel.app/)** to:
- Test different themes and configurations
- Preview the widget in real-time
- Copy your desired settings for easy integration
- See the AI in action with GPT-4.1-nano

### Playground Source Code
Check out the complete playground implementation and AI endpoint configuration at **[github.com/kelvin-oliveira/widget-demo-app](https://github.com/kelvin-oliveira/widget-demo-app)**. This repository contains:
- Full playground source code
- AI endpoint implementation details
- Integration examples and best practices

---

## Theming

Customize the widget's appearance with comprehensive theming options. The widget comes with several built-in themes:

### Built-in Themes
- `eloquent` (default)
- `eloquentDark`
- `forest`
- `forestDark`
- `minimalist`
- `minimalistDark`

### Custom Theme Example

```js
const customTheme = {
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

---

## AI Integration

This widget is powered by **GPT-4.1-nano**, providing intelligent and contextual responses. Use the `chatContext` prop to customize the AI's behavior for your specific use case:

```tsx
// E-commerce support
<Widget chatContext="You are a helpful customer support agent for an online store. Help users with orders, returns, and product questions." />

// Technical documentation
<Widget chatContext="You are a technical documentation assistant. Help users understand our API and provide code examples." />

// General website assistance
<Widget chatContext="You are a friendly website assistant. Help visitors navigate and find information about our services." />
```

---

## API Reference

### `window.ChatWidget` (Web Component)
- `boot(config?)`: Mounts the widget with the given configuration
- `update(config)`: Updates the widget's configuration at runtime

### `Widget` Component Props
See the props table above for all available options and their types.

### Configuration Object
All configuration options available for both React props and web component settings:

```typescript
interface WidgetConfig {
  title?: string;
  position?: "bottom-left" | "bottom-right";
  chatContext?: string;
  theme?: Theme;
  suggestedQuestions?: string[];
  showBrand?: boolean;
  status?: "maintenance" | "offline" | "online";
  brand?: {
    name: string;
    websiteUrl: string;
  };
}
```

## Support

- 📖 **Documentation**: This README and inline code documentation
- 🎮 **Playground**: [widget-demo-app.vercel.app](https://widget-demo-app.vercel.app/)
- 🐛 **Issues**: [GitHub Issues](https://github.com/kelvin-oliveira/chat-widget/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/kelvin-oliveira/chat-widget/discussions)

---

## Author

Created by **Kelvin Oliveira**
