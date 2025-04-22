import { Award, BadgeIcon as Certificate, Medal, Star, Palette, Trophy, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AchievementsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-gradient-to-br from-yellow-900/50 to-transparent border-gray-700 glow-border-yellow transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-900/30 group">
        <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-yellow-950/50 group-hover:bg-yellow-950/70 transition-all duration-300">
          <Award className="h-6 w-6 text-yellow-300 glow-yellow group-hover:text-yellow-200" />
          <div>
            <CardTitle className="text-yellow-100 group-hover:text-white transition-colors">Top 30 Finalist</CardTitle>
            <CardDescription className="text-yellow-200 group-hover:text-yellow-100 transition-colors">
              Tata InnoVent 2024
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-white font-medium">
          <p className="text-sm group-hover:text-yellow-100 transition-colors">
            Secured a position in the Top 30 out of 2,500+ teams in Tata InnoVent 2024 with the project "Repair-Pal" - a
            generative AI solution for car breakdown assistance.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-900/50 to-transparent border-gray-700 glow-border-orange transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-900/30 group">
        <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-orange-950/50 group-hover:bg-orange-950/70 transition-all duration-300">
          <Certificate className="h-6 w-6 text-orange-300 glow-orange group-hover:text-orange-200" />
          <div>
            <CardTitle className="text-orange-100 group-hover:text-white transition-colors">
              Flutter Certification
            </CardTitle>
            <CardDescription className="text-orange-200 group-hover:text-orange-100 transition-colors">
              Infosys SpringBoard
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-white font-medium">
          <p className="text-sm group-hover:text-orange-100 transition-colors">
            Completed comprehensive Flutter development certification program from Infosys SpringBoard, gaining
            expertise in mobile app development.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-900/50 to-transparent border-gray-700 glow-border-purple transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-900/30 group">
        <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-purple-950/50 group-hover:bg-purple-950/70 transition-all duration-300">
          <Certificate className="h-6 w-6 text-purple-300 glow-purple group-hover:text-purple-200" />
          <div>
            <CardTitle className="text-purple-100 group-hover:text-white transition-colors">
              Python Certification
            </CardTitle>
            <CardDescription className="text-purple-200 group-hover:text-purple-100 transition-colors">
              Infosys SpringBoard
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-white font-medium">
          <p className="text-sm group-hover:text-purple-100 transition-colors">
            Completed Python programming certification from Infosys SpringBoard, mastering core concepts and advanced
            techniques in Python development.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-pink-900/50 to-transparent border-gray-700 glow-border-pink transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-900/30 group">
        <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-pink-950/50 group-hover:bg-pink-950/70 transition-all duration-300">
          <Medal className="h-6 w-6 text-pink-300 glow-pink group-hover:text-pink-200" />
          <div>
            <CardTitle className="text-pink-100 group-hover:text-white transition-colors">Gold Medal</CardTitle>
            <CardDescription className="text-pink-200 group-hover:text-pink-100 transition-colors">
              Cancer Patient Care Campaign
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-white font-medium">
          <p className="text-sm group-hover:text-pink-100 transition-colors">
            Recognized with a Gold Medal for leading a campaign for the care of patients suffering from Cancer,
            demonstrating leadership and social responsibility.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-cyan-900/50 to-transparent border-gray-700 glow-border-cyan transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-900/30 group">
        <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-cyan-950/50 group-hover:bg-cyan-950/70 transition-all duration-300">
          <Star className="h-6 w-6 text-cyan-300 glow-cyan group-hover:text-cyan-200" />
          <div>
            <CardTitle className="text-cyan-100 group-hover:text-white transition-colors">
              Technical Entry Scheme SSB Program
            </CardTitle>
            <CardDescription className="text-cyan-200 group-hover:text-cyan-100 transition-colors">
              Indian Army Selection Procedure
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-white font-medium">
          <p className="text-sm group-hover:text-cyan-100 transition-colors">
            Qualified for the Technical Entry Scheme SSB Program as part of the Indian Army Selection Procedure,
            demonstrating technical aptitude and leadership potential.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-900/50 to-transparent border-gray-700 glow-border-green transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-900/30 group">
        <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-green-950/50 group-hover:bg-green-950/70 transition-all duration-300">
          <Palette className="h-6 w-6 text-green-300 glow-green group-hover:text-green-200" />
          <div>
            <CardTitle className="text-green-100 group-hover:text-white transition-colors">
              Drawing Competitions
            </CardTitle>
            <CardDescription className="text-green-200 group-hover:text-green-100 transition-colors">
              Multiple Awards
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-white font-medium">
          <p className="text-sm group-hover:text-green-100 transition-colors">
            Won multiple drawing competitions at school and regional levels, showcasing artistic abilities and creative
            thinking.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-900/50 to-transparent border-gray-700 glow-border-blue transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-900/30 group">
        <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-blue-950/50 group-hover:bg-blue-950/70 transition-all duration-300">
          <Trophy className="h-6 w-6 text-blue-300 glow-blue group-hover:text-blue-200" />
          <div>
            <CardTitle className="text-blue-100 group-hover:text-white transition-colors">
              Academic Excellence
            </CardTitle>
            <CardDescription className="text-blue-200 group-hover:text-blue-100 transition-colors">
              School & Newspaper Recognition
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-white font-medium">
          <p className="text-sm group-hover:text-blue-100 transition-colors">
            Received multiple academic excellence medals from schools and recognition in newspapers for outstanding
            academic performance.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-900/50 to-transparent border-gray-700 glow-border-yellow md:col-span-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-900/30 group">
        <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-amber-950/50 group-hover:bg-amber-950/70 transition-all duration-300">
          <Lightbulb className="h-6 w-6 text-amber-300 glow-yellow group-hover:text-amber-200" />
          <div>
            <CardTitle className="text-amber-100 group-hover:text-white transition-colors">
              Science & Math Olympiads
            </CardTitle>
            <CardDescription className="text-amber-200 group-hover:text-amber-100 transition-colors">
              National Level Competitions
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-white font-medium">
          <p className="text-sm group-hover:text-amber-100 transition-colors">
            Won multiple Science and Mathematics Olympiads at school and national levels, demonstrating strong
            analytical skills and problem-solving abilities.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
