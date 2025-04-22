import { CalendarDays, GraduationCap, Trophy, MapPin } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationTimeline() {
  return (
    <div className="space-y-8">
      <Card className="border-l-4 border-l-blue-500 overflow-hidden bg-gray-900/50 border-gray-700 glow-border-blue">
        <CardHeader className="flex flex-row items-start gap-4 pb-2 bg-gradient-to-r from-blue-900/30 to-transparent">
          <GraduationCap className="mt-1 h-5 w-5 text-blue-400" />
          <div>
            <CardTitle className="text-white">Bachelor of Technology</CardTitle>
            <CardDescription className="text-gray-400">Computer Science & Engineering</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <CalendarDays className="mr-1 h-4 w-4" />
            <span>2022 - 2026</span>
          </div>
          <div className="flex items-center text-sm mb-4 text-gray-300">
            <MapPin className="mr-1 h-4 w-4 text-blue-400" />
            <span>Jaypee University of Engineering and Technology, Guna, MP</span>
          </div>
          <p className="text-sm text-gray-400">
            Relevant coursework: Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming,
            Computer Networks, Operating Systems, Software Engineering.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-start gap-2">
              <Trophy className="mt-0.5 h-4 w-4 text-blue-400" />
              <p className="text-sm text-gray-300">Top 30 finalist in Tata InnoVent 2024</p>
            </div>
            <div className="flex items-start gap-2">
              <Trophy className="mt-0.5 h-4 w-4 text-blue-400" />
              <p className="text-sm text-gray-300">Technical Lead at Mozilla Phoenix Club</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-indigo-400 overflow-hidden bg-gray-900/50 border-gray-700 glow-border-indigo">
        <CardHeader className="flex flex-row items-start gap-4 pb-2 bg-gradient-to-r from-indigo-900/30 to-transparent">
          <GraduationCap className="mt-1 h-5 w-5 text-indigo-400" />
          <div>
            <CardTitle className="text-white">All India Senior School Certificate Examination (Class 12)</CardTitle>
            <CardDescription className="text-gray-400">Science Stream</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <CalendarDays className="mr-1 h-4 w-4" />
            <span>2019 - 2021</span>
          </div>
          <div className="flex items-center text-sm mb-4 text-gray-300">
            <MapPin className="mr-1 h-4 w-4 text-indigo-400" />
            <span>Adrash Vikas Vidyalaya, Patna, Bihar</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-purple-400 overflow-hidden bg-gray-900/50 border-gray-700 glow-border-purple">
        <CardHeader className="flex flex-row items-start gap-4 pb-2 bg-gradient-to-r from-purple-900/30 to-transparent">
          <GraduationCap className="mt-1 h-5 w-5 text-purple-400" />
          <div>
            <CardTitle className="text-white">All India Secondary School Examination (Class 10)</CardTitle>
            <CardDescription className="text-gray-400">Science Stream</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <CalendarDays className="mr-1 h-4 w-4" />
            <span>2019</span>
          </div>
          <div className="flex items-center text-sm mb-4 text-gray-300">
            <MapPin className="mr-1 h-4 w-4 text-purple-400" />
            <span>Dr. G L Dutta D A V Public School, Patna, Bihar</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
