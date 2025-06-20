/**
 * This file defines a custom HTML element <chat-widget> that can be used to embed a chat widget
 * in any HTML document. It uses React to render the widget and supports configuration
 * through attributes or a JSON object in the `data-props` attribute.
 * It also provides a global `ChatWidget` object to boot and update the widget dynamically.
 */

import ReactDOM from "react-dom/client";
import { Widget } from "./widget";

class ChatWidgetElement extends HTMLElement {
  connectedCallback() {
    // Gather all attributes as props
    const props: Record<string, any> = {};
    for (const attr of this.getAttributeNames()) {
      props[attr] = this.getAttribute(attr) || undefined;
    }

    // Support JSON props via data-props
    if (this.getAttribute("data-props")) {
      try {
        Object.assign(props, JSON.parse(this.getAttribute("data-props")!));
      } catch {}
    }

    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);
    ReactDOM.createRoot(mountPoint).render(<Widget {...props} />);
  }
}

customElements.define("chat-widget", ChatWidgetElement);

function bootWidget(config?: Record<string, any>) {
  // Remove any existing widget
  const existing = document.querySelector("chat-widget");
  if (existing) existing.remove();

  // Create and configure the widget
  const el = document.createElement("chat-widget");

  if (config) {
    // Set as attributes (primitive values)
    Object.entries(config).forEach(([key, value]) => {
      if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
      ) {
        el.setAttribute(key, String(value));
      } else {
        // For objects/arrays, use data-props
        el.setAttribute("data-props", JSON.stringify(config));
        return;
      }
    });
  }

  document.body.appendChild(el);
}

// Expose a global loader
(window as any).ChatWidget = {
  boot: (config?: Record<string, any>) => {
    bootWidget(config || (window as any).chatWidgetSettings);
  },
  update: (config: Record<string, any>) => {
    const el = document.querySelector("chat-widget");
    if (el && config) {
      Object.entries(config).forEach(([key, value]) => {
        if (
          typeof value === "string" ||
          typeof value === "number" ||
          typeof value === "boolean"
        ) {
          el.setAttribute(key, String(value));
        } else {
          el.setAttribute("data-props", JSON.stringify(config));
        }
      });
    }
  },
};

// Auto-boot if settings are present
if ((window as any).chatWidgetSettings) {
  (window as any).ChatWidget.boot();
}
