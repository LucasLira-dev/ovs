import * as React from "react"

export const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={
          `text-[hsl(var(--foreground))] font-medium text-sm ` +
          (className || "")
        }
        ref={ref}
        {...props}
      />
    )
  }
)
Label.displayName = "Label"
