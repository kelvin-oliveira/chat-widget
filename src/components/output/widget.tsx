/**
 * This file adds the <Widget> component to a Shadow DOM portal.
 * It allows the widget to be used in a web component context,
 * ensuring styles are encapsulated and do not leak into the main document.
 */

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import css from "../../styles/tailwind.generated.css?raw";
import { Widget as BaseWidget, WidgetProps } from "../widget/widget";

export function Widget(props: WidgetProps) {
  return (
    <ShadowRootPortal>
      <style>{css}</style>
      <BaseWidget {...props} />
    </ShadowRootPortal>
  );
}

function ShadowRootPortal({ children }: { children: ReactNode }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<null | ShadowRoot>(null);

  useEffect(() => {
    if (hostRef.current && !shadowRoot) {
      setShadowRoot(hostRef.current.attachShadow({ mode: "open" }));
    }
  }, [shadowRoot]);

  return (
    <div ref={hostRef}>
      {shadowRoot ? createPortal(children, shadowRoot) : null}
    </div>
  );
}
