import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Keyboard } from "lucide-react";

const KeyboardShortcutsHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isTypingTarget = (el: EventTarget | null) => {
      const target = el as HTMLElement | null;
      if (!target) return false;
      const tag = target.tagName?.toLowerCase();
      const editable = (target as HTMLElement).isContentEditable;
      return editable || tag === "input" || tag === "textarea" || tag === "select";
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when user is typing in form fields/contenteditable
      if (isTypingTarget(event.target)) return;

      // Open on Shift + / ("?") across browsers/layouts
      const isQuestionMark = event.key === "?" || (event.key === "/" && event.shiftKey);
      if (isQuestionMark && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const shortcuts = [
    { key: "H", description: "Go to Home section" },
    { key: "A", description: "Go to About section" },
    { key: "P", description: "Go to Projects section" },
    { key: "C", description: "Go to Contact section" },
    { key: "T", description: "Scroll to top" },
    { key: "B", description: "Scroll to bottom" },
    { key: "?", description: "Show this help dialog" },
    { key: "Esc", description: "Close dialogs" },
  ];

  return (
    <>
      {/* Help trigger button with tooltip */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setIsOpen(true)}
              className="fixed bottom-8 left-8 z-50 p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-border hover:bg-muted transition-colors"
              aria-label="Show keyboard shortcuts"
            >
              <Keyboard className="w-5 h-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <div className="flex items-center gap-2">
              <span>Keyboard shortcuts</span>
              <Badge variant="outline" className="font-mono text-xs">Shift + /</Badge>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Keyboard className="w-5 h-5" />
              Keyboard Shortcuts
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Shortcuts list */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Use these keyboard shortcuts to navigate quickly:
              </p>
              <div className="space-y-2">
                {shortcuts.map((shortcut) => (
                  <div key={shortcut.key} className="flex items-center justify-between rounded-md border border-transparent hover:border-border/60 px-3 py-2 transition-colors">
                    <span className="text-sm">{shortcut.description}</span>
                    <Badge variant="outline" className="font-mono">
                      {shortcut.key}
                    </Badge>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Press <Badge variant="outline" className="font-mono text-xs">Shift + ?</Badge> to toggle this dialog
              </p>
            </div>

            {/* Image / illustration */}
            <div className="hidden md:block">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/placeholder.svg"
                  alt="Keyboard shortcuts illustration"
                  className="h-full w-full rounded-md border object-cover bg-muted"
                />
              </AspectRatio>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default KeyboardShortcutsHelp;