import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SkillsSection() {
  const technicalSkills = [
    { name: "C/C++", icon: "💻", color: "purple" },
    { name: "Python", icon: "🐍", color: "cyan" },
    { name: "JavaScript", icon: "📜", color: "pink" },
    { name: "Java", icon: "☕", color: "green" },
    { name: "Linux", icon: "🐧", color: "blue" },
    { name: "HTML/CSS", icon: "🌐", color: "yellow" },
    { name: "React", icon: "⚛️", color: "orange" },
    { name: "Next.js", icon: "▲", color: "purple" },
    { name: "AngularJS", icon: "🅰️", color: "cyan" },
    { name: "Node.js", icon: "📦", color: "pink" },
    { name: "Django", icon: "🎸", color: "green" },
    { name: "Express JS", icon: "🚂", color: "blue" },
    { name: "MongoDB", icon: "🍃", color: "yellow" },
    { name: "SQL", icon: "🗄️", color: "orange" },
    { name: "NoSQL", icon: "📊", color: "purple" },
  ]

  const toolsSkills = [
    { name: "NumPy", icon: "🔢", color: "cyan" },
    { name: "Pandas", icon: "🐼", color: "pink" },
    { name: "Cisco Packet Tracer", icon: "🌐", color: "green" },
    { name: "Git", icon: "🔄", color: "blue" },
    { name: "Tkinter", icon: "🖼️", color: "yellow" },
    { name: "Solana (Blockchain)", icon: "⛓️", color: "orange" },
    { name: "Microsoft Office", icon: "📊", color: "purple" },
    { name: "Microsoft Excel", icon: "📈", color: "cyan" },
    { name: "Power BI", icon: "📊", color: "pink" },
  ]

  const techniquesSkills = [
    { name: "Feature Engineering & Selection", icon: "🔍", color: "green" },
    { name: "Data Cleaning", icon: "🧹", color: "blue" },
    { name: "Generative AI", icon: "🤖", color: "yellow" },
    { name: "Data Analytics", icon: "📊", color: "orange" },
  ]

  const softSkills = [
    { name: "Communication", icon: "🗣️", color: "purple" },
    { name: "Teamwork", icon: "👥", color: "cyan" },
    { name: "Adaptability", icon: "🔄", color: "pink" },
    { name: "Time Management", icon: "⏰", color: "green" },
    { name: "Problem Solving", icon: "🧩", color: "blue" },
    { name: "Leadership", icon: "👑", color: "yellow" },
  ]

  const getTextClass = (color: string) => {
    const classes = {
      purple: "text-purple-400",
      cyan: "text-cyan-400",
      pink: "text-pink-400",
      green: "text-green-400",
      blue: "text-blue-400",
      yellow: "text-yellow-400",
      orange: "text-orange-400",
    }
    return classes[color as keyof typeof classes]
  }

  const getBgClass = (color: string) => {
    const classes = {
      purple: "bg-purple-900/30 border-purple-500/30",
      cyan: "bg-cyan-900/30 border-cyan-500/30",
      pink: "bg-pink-900/30 border-pink-500/30",
      green: "bg-green-900/30 border-green-500/30",
      blue: "bg-blue-900/30 border-blue-500/30",
      yellow: "bg-yellow-900/30 border-yellow-500/30",
      orange: "bg-orange-900/30 border-orange-500/30",
    }
    return classes[color as keyof typeof classes]
  }

  const getGlowClass = (color: string) => {
    const classes = {
      purple: "glow-border-purple",
      cyan: "glow-border-cyan",
      pink: "glow-border-pink",
      green: "glow-border-green",
      blue: "glow-border-blue",
      yellow: "glow-border-yellow",
      orange: "glow-border-orange",
    }
    return classes[color as keyof typeof classes]
  }

  const renderSkillItems = (skills: any[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={`p-4 rounded-lg border ${getBgClass(
            skill.color,
          )} flex flex-col items-center justify-center text-center hover:scale-105 transition-transform ${getGlowClass(
            skill.color,
          )}`}
        >
          <div className="text-3xl mb-2">{skill.icon}</div>
          <span className={`font-medium ${getTextClass(skill.color)}`}>{skill.name}</span>
        </div>
      ))}
    </div>
  )

  return (
    <Tabs defaultValue="technical" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-gray-800/50 border border-gray-700">
        <TabsTrigger value="technical" className="data-[state=active]:bg-gray-900 data-[state=active]:text-purple-400">
          Languages & Frameworks
        </TabsTrigger>
        <TabsTrigger value="tools" className="data-[state=active]:bg-gray-900 data-[state=active]:text-cyan-400">
          Tools & Software
        </TabsTrigger>
        <TabsTrigger value="techniques" className="data-[state=active]:bg-gray-900 data-[state=active]:text-pink-400">
          Techniques
        </TabsTrigger>
        <TabsTrigger value="soft" className="data-[state=active]:bg-gray-900 data-[state=active]:text-green-400">
          Soft Skills
        </TabsTrigger>
      </TabsList>
      <TabsContent value="technical">
        <Card className="bg-gray-900/50 border-gray-700">
          <CardContent className="pt-6">{renderSkillItems(technicalSkills)}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tools">
        <Card className="bg-gray-900/50 border-gray-700">
          <CardContent className="pt-6">{renderSkillItems(toolsSkills)}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="techniques">
        <Card className="bg-gray-900/50 border-gray-700">
          <CardContent className="pt-6">{renderSkillItems(techniquesSkills)}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="soft">
        <Card className="bg-gray-900/50 border-gray-700">
          <CardContent className="pt-6">{renderSkillItems(softSkills)}</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
