import { useEffect } from "react";

interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  action: () => void;
  description: string;
}

export const useKeyboardShortcuts = (shortcuts: KeyboardShortcut[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const shortcut = shortcuts.find(
        (s) =>
          s.key.toLowerCase() === event.key.toLowerCase() &&
          !!s.ctrlKey === event.ctrlKey &&
          !!s.shiftKey === event.shiftKey &&
          !!s.altKey === event.altKey
      );

      if (shortcut) {
        event.preventDefault();
        shortcut.action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts]);
};

// Common shortcuts for the portfolio
export const usePortfolioShortcuts = () => {
  const shortcuts: KeyboardShortcut[] = [
    {
      key: "h",
      action: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
      description: "Go to Home section"
    },
    {
      key: "a",
      action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
      description: "Go to About section"
    },
    {
      key: "p",
      action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
      description: "Go to Projects section"
    },
    {
      key: "c",
      action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
      description: "Go to Contact section"
    },
    {
      key: "t",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      description: "Scroll to top"
    },
    {
      key: "b",
      action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }),
      description: "Scroll to bottom"
    }
  ];

  useKeyboardShortcuts(shortcuts);
  return shortcuts;
};