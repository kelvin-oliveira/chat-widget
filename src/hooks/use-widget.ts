import { useEffect, useRef } from "react";
import { useWidgetStore } from "../stores/widget-store";

export function useWidget() {
  const isOpen = useWidgetStore((state) => state.isOpen);
  const setIsOpen = useWidgetStore((state) => state.setIsOpen);
  const widgetRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath();

      const isInsideWidget = path.some(
        (element) =>
          element instanceof Element && widgetRef.current?.contains(element),
      );

      const isInsideTrigger = path.some(
        (element) =>
          element instanceof Element && triggerRef.current?.contains(element),
      );

      if (!isInsideWidget && !isInsideTrigger) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return { triggerRef, widgetRef };
}
