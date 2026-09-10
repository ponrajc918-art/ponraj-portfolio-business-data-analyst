"use client";

import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { forwardRef, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "glass" | "ghost";
  size?: "md" | "lg";
  magnetic?: boolean;
};

const variants: Record<string, string> = {
  primary:
    "bg-gold text-[#0a0a0a] hover:bg-gold-soft shadow-[0_0_0_1px_rgba(212,175,55,0.4),0_8px_30px_-8px_rgba(212,175,55,0.55)]",
  glass:
    "glass text-text hover:border-gold/40 hover:bg-white/[0.06]",
  ghost: "text-muted hover:text-text",
};

const sizes: Record<string, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-[52px] px-8 text-[15px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, asChild, variant = "primary", size = "md", magnetic = true, children, ...props },
    ref
  ) => {
    const Comp: React.ElementType = asChild ? Slot : motion.button;
    const innerRef = useRef<HTMLButtonElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    function onMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
      if (!magnetic || !innerRef.current) return;
      const rect = innerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPos({ x: x * 0.25, y: y * 0.4 });
    }
    function onMouseLeave() {
      setPos({ x: 0, y: 0 });
    }

    const motionOnlyProps = asChild
      ? {}
      : {
          animate: { x: pos.x, y: pos.y },
          transition: { type: "spring", stiffness: 300, damping: 20, mass: 0.5 },
        };

    return (
      <Comp
        ref={(node: HTMLButtonElement) => {
          innerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.RefObject<HTMLButtonElement | null>).current = node;
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        {...motionOnlyProps}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 ease-out will-change-transform",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";
