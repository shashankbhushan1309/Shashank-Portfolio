import { type ButtonHTMLAttributes, forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { VariantProps } from "class-variance-authority"
import type { buttonVariants } from "@/components/ui/button"

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  color?: "purple" | "cyan" | "pink" | "green" | "blue" | "yellow" | "orange"
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant, size, color = "purple", children, ...props }, ref) => {
    const colorClasses = {
      purple: {
        default: "bg-purple-600 hover:bg-purple-700 text-white glow-purple",
        outline: "border-purple-500 text-purple-400 hover:text-purple-300 hover:border-purple-400 glow-border-purple",
      },
      cyan: {
        default: "bg-cyan-600 hover:bg-cyan-700 text-white glow-cyan",
        outline: "border-cyan-500 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 glow-border-cyan",
      },
      pink: {
        default: "bg-pink-600 hover:bg-pink-700 text-white glow-pink",
        outline: "border-pink-500 text-pink-400 hover:text-pink-300 hover:border-pink-400 glow-border-pink",
      },
      green: {
        default: "bg-green-600 hover:bg-green-700 text-white glow-green",
        outline: "border-green-500 text-green-400 hover:text-green-300 hover:border-green-400 glow-border-green",
      },
      blue: {
        default: "bg-blue-600 hover:bg-blue-700 text-white glow-blue",
        outline: "border-blue-500 text-blue-400 hover:text-blue-300 hover:border-blue-400 glow-border-blue",
      },
      yellow: {
        default: "bg-yellow-600 hover:bg-yellow-700 text-white glow-yellow",
        outline: "border-yellow-500 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400 glow-border-yellow",
      },
      orange: {
        default: "bg-orange-600 hover:bg-orange-700 text-white glow-orange",
        outline: "border-orange-500 text-orange-400 hover:text-orange-300 hover:border-orange-400 glow-border-orange",
      },
    }

    const variantClass = variant === "outline" ? colorClasses[color].outline : colorClasses[color].default

    return (
      <Button className={cn(variantClass, className)} ref={ref} variant={variant} size={size} {...props}>
        {children}
      </Button>
    )
  },
)

NeonButton.displayName = "NeonButton"
