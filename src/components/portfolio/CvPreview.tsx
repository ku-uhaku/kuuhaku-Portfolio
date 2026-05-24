import { motion } from "motion/react";
import { FileText, Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CV_PATH } from "./constants";
import { cn } from "@/lib/utils";

type CvPreviewProps = {
  variant?: "nav" | "hero" | "contact";
  className?: string;
};

export function CvPreview({ variant = "nav", className }: CvPreviewProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={cn(
            "inline-flex cursor-pointer items-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors",
            variant === "nav" &&
              "rounded-full border border-border px-4 py-2 hover:border-primary hover:bg-primary hover:text-primary-foreground",
            variant === "hero" &&
              "rounded-full border border-primary/60 bg-primary/10 px-6 py-3 text-foreground shadow-glow hover:bg-primary hover:text-primary-foreground",
            variant === "contact" &&
              "w-full justify-center rounded-full border border-border py-4 hover:border-primary hover:bg-primary/10",
            className,
          )}
        >
          <FileText className="h-3.5 w-3.5" />
          {variant === "hero" ? "Preview CV" : "CV"}
          <span className="text-primary">↗</span>
        </motion.button>
      </DialogTrigger>
      <DialogContent className="flex h-[min(92vh,820px)] max-w-4xl flex-col gap-0 overflow-hidden border-border/80 bg-card p-0 sm:rounded-2xl">
        <DialogHeader className="shrink-0 border-b border-border/60 px-6 py-4 text-left">
          <DialogTitle className="font-display text-xl font-bold tracking-tight">
            Curriculum Vitae
          </DialogTitle>
          <DialogDescription className="font-mono text-[10px] uppercase tracking-wider">
            Mohamed Barrah — Full-stack Developer
          </DialogDescription>
        </DialogHeader>
        <div className="relative min-h-0 flex-1 bg-muted/30">
          <iframe
            title="CV preview"
            src={`${CV_PATH}#toolbar=0&navpanes=0`}
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        <DialogFooter className="shrink-0 flex-row justify-between gap-3 border-t border-border/60 px-6 py-4 sm:justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">PDF · Preview</span>
          <a
            href={CV_PATH}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
