import { ExternalLink, Github, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NeonButton } from "@/components/neon-button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
  achievement?: string
  color?: "purple" | "cyan" | "pink" | "green" | "blue" | "yellow" | "orange"
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  achievement,
  color = "purple",
}: ProjectCardProps) {
  const glowClass = `glow-border-${color}`
  const bgGradient = {
    purple: "from-purple-900/50 to-pink-900/50",
    cyan: "from-cyan-900/50 to-blue-900/50",
    pink: "from-pink-900/50 to-purple-900/50",
    green: "from-green-900/50 to-emerald-900/50",
    blue: "from-blue-900/50 to-indigo-900/50",
    yellow: "from-yellow-900/50 to-amber-900/50",
    orange: "from-orange-900/50 to-red-900/50",
  }[color]

  const tagBgClass = {
    purple: "bg-purple-900/50 text-purple-300 border-purple-700/50",
    cyan: "bg-cyan-900/50 text-cyan-300 border-cyan-700/50",
    pink: "bg-pink-900/50 text-pink-300 border-pink-700/50",
    green: "bg-green-900/50 text-green-300 border-green-700/50",
    blue: "bg-blue-900/50 text-blue-300 border-blue-700/50",
    yellow: "bg-yellow-900/50 text-yellow-300 border-yellow-700/50",
    orange: "bg-orange-900/50 text-orange-300 border-orange-700/50",
  }[color]

  const achievementBgClass = {
    purple: "bg-purple-900/30 border-purple-700/50 text-purple-300",
    cyan: "bg-cyan-900/30 border-cyan-700/50 text-cyan-300",
    pink: "bg-pink-900/30 border-pink-700/50 text-pink-300",
    green: "bg-green-900/30 border-green-700/50 text-green-300",
    blue: "bg-blue-900/30 border-blue-700/50 text-blue-300",
    yellow: "bg-yellow-900/30 border-yellow-700/50 text-yellow-300",
    orange: "bg-orange-900/30 border-orange-700/50 text-orange-300",
  }[color]

  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-lg group bg-gradient-to-br ${bgGradient} border-0 ${glowClass}`}
    >
      <div className="aspect-video w-full overflow-hidden relative">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-all group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <h3 className="text-white font-bold text-xl">{title}</h3>
        </div>
      </div>
      <CardHeader className="bg-gray-900/80">
        <CardTitle className="flex items-center gap-2 text-white">
          {title}
          {achievement && (
            <Badge variant="outline" className={`ml-2 ${achievementBgClass}`}>
              <Award className="h-3 w-3 mr-1" />
              Award
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardHeader>
      <CardContent className="bg-gray-900/80">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className={tagBgClass}>
              {tag}
            </Badge>
          ))}
        </div>
        {achievement && (
          <div className={`mt-4 p-2 rounded-md text-sm ${achievementBgClass} border`}>
            <Award className="inline-block h-4 w-4 mr-1" />
            {achievement}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between bg-gray-900/80">
        <NeonButton variant="outline" size="sm" asChild color={color}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </NeonButton>
        <NeonButton size="sm" asChild color={color}>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </NeonButton>
      </CardFooter>
    </Card>
  )
}
