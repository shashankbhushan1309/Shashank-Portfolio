import { cn } from "@/lib/utils"

interface NeonTextProps {
  text: string
  className?: string
  color?: "purple" | "cyan" | "pink" | "green" | "blue" | "yellow" | "orange"
}

export function NeonText({ text, className, color = "purple" }: NeonTextProps) {
  const colorClasses = {
    purple: "text-purple-400 glow-text-purple",
    cyan: "text-cyan-400 glow-text-cyan",
    pink: "text-pink-400 glow-text-pink",
    green: "text-green-400 glow-text-green",
    blue: "text-blue-400 glow-text-blue",
    yellow: "text-yellow-400 glow-text-yellow",
    orange: "text-orange-400 glow-text-orange",
  }

  return <h2 className={cn(colorClasses[color], className)}>{text}</h2>
}
