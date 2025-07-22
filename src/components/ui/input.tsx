import * as React from "react"

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={
          `border border-border bg-[hsl(var(--card))] text-[hsl(var(--foreground))] rounded px-3 py-2 outline-none focus:border-[hsl(var(--primary))] transition-colors ` +
          (className || "")
        }
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"
