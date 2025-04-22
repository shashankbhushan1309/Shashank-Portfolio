import { CalendarDays, Briefcase } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <div className="space-y-8">
      <Card className="border-l-4 border-l-cyan-500 overflow-hidden bg-gray-900/50 border-gray-700 glow-border-cyan">
        <CardHeader className="flex flex-row items-start gap-4 pb-2 bg-gradient-to-r from-cyan-900/30 to-transparent">
          <Briefcase className="mt-1 h-5 w-5 text-cyan-400" />
          <div>
            <CardTitle className="text-white">Web Development Intern</CardTitle>
            <CardDescription className="text-gray-400">Proxenix</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <CalendarDays className="mr-1 h-4 w-4" />
            <span>2023</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            As a Web Development Intern at Proxenix, I worked on developing and maintaining web applications using
            modern technologies like React, Node.js, and MongoDB. I collaborated with a team of developers to implement
            new features and fix bugs in existing applications.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-1.5 glow-cyan"></div>
              <p className="text-sm text-gray-300">Developed responsive web interfaces using React and Tailwind CSS</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-1.5 glow-cyan"></div>
              <p className="text-sm text-gray-300">Implemented RESTful APIs using Node.js and Express</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-1.5 glow-cyan"></div>
              <p className="text-sm text-gray-300">Worked with MongoDB for database management</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-blue-500 overflow-hidden bg-gray-900/50 border-gray-700 glow-border-blue">
        <CardHeader className="flex flex-row items-start gap-4 pb-2 bg-gradient-to-r from-blue-900/30 to-transparent">
          <Briefcase className="mt-1 h-5 w-5 text-blue-400" />
          <div>
            <CardTitle className="text-white">Technical Lead (Volunteer)</CardTitle>
            <CardDescription className="text-gray-400">Mozilla Phoenix Club</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <CalendarDays className="mr-1 h-4 w-4" />
            <span>2022 - Present</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            As a Technical Lead at Mozilla Phoenix Club, I lead a team of student developers in organizing technical
            workshops, hackathons, and coding competitions. I mentor junior members and help them develop their
            technical skills.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 glow-blue"></div>
              <p className="text-sm text-gray-300">
                Organized technical workshops on web development and open-source technologies
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 glow-blue"></div>
              <p className="text-sm text-gray-300">Mentored junior members in developing their technical skills</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 glow-blue"></div>
              <p className="text-sm text-gray-300">Coordinated with other technical clubs for collaborative events</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
