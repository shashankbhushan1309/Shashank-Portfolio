import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Instagram, ExternalLink } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { SkillsSection } from "@/components/skills-section"
import { EducationTimeline } from "@/components/education-timeline"
import { ContactSection } from "@/components/contact-section"
import { ExperienceSection } from "@/components/experience-section"
import { AchievementsSection } from "@/components/achievements-section"
import { NeonText } from "@/components/neon-text"
import { NeonButton } from "@/components/neon-button"
import { NeonGrid } from "@/components/neon-grid"
import { ExpandingLogo } from "@/components/expanding-logo"
import { ProfileImageCarousel } from "@/components/profile-image-carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-purple-500/20 bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-gray-900/40">
        <div className="container flex h-16 items-center justify-between">
          <ExpandingLogo />
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors hover:text-glow-purple">
              About
            </Link>
            <Link href="#experience" className="text-gray-400 hover:text-white transition-colors hover:text-glow-cyan">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors hover:text-glow-pink">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-400 hover:text-white transition-colors hover:text-glow-green">
              Skills
            </Link>
            <Link href="#education" className="text-gray-400 hover:text-white transition-colors hover:text-glow-blue">
              Education
            </Link>
            <Link
              href="#achievements"
              className="text-gray-400 hover:text-white transition-colors hover:text-glow-yellow"
            >
              Achievements
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors hover:text-glow-orange">
              Contact
            </Link>
          </nav>
          <NeonButton variant="outline" size="sm" className="hidden md:flex" asChild color="purple">
            <a
              href="https://drive.google.com/file/d/1tyCS0RW8w69l4-IPIhAOu-UYZbLLqzLw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Resume
            </a>
          </NeonButton>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center relative overflow-hidden">
          <NeonGrid />
          <div className="relative z-10">
            <div className="mb-10 relative">
              <ProfileImageCarousel />
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-white font-medium text-sm whitespace-nowrap">
                BTech CSE Student
              </div>
            </div>
            <NeonText
              text="Hi, I'm Shashank Bhushan"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in"
              color="purple"
            />
            <p className="text-xl md:text-2xl text-gray-300 max-w-[750px] mb-8 animate-fade-in-delay">
              BTech CSE student passionate about Web Development, AI, and Blockchain technology.
            </p>
            <div className="flex gap-4 justify-center animate-fade-in-delay-2">
              <NeonButton asChild color="pink">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </NeonButton>
              <NeonButton variant="outline" asChild color="cyan">
                <a href="#contact">Contact Me</a>
              </NeonButton>
            </div>
            <div className="flex justify-center gap-4 mt-8 animate-fade-in-delay-3">
              <NeonButton variant="outline" size="icon" asChild color="purple">
                <a href="https://github.com/shashankbhushan1309" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </NeonButton>
              <NeonButton variant="outline" size="icon" asChild color="cyan">
                <a
                  href="https://www.linkedin.com/in/shashank-bhushan-755294231/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </NeonButton>
              <NeonButton variant="outline" size="icon" asChild color="pink">
                <a href="mailto:s.bhushan910@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </NeonButton>
              <NeonButton variant="outline" size="icon" asChild color="green">
                <a href="https://x.com/sarthak13092003" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </NeonButton>
              <NeonButton variant="outline" size="icon" asChild color="yellow">
                <a href="https://www.instagram.com/png.sb/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </NeonButton>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 scroll-mt-16">
          <NeonText text="About Me" className="text-3xl md:text-4xl font-bold mb-12 text-center" color="purple" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg overflow-hidden p-1 glow-border-purple">
              <div className="bg-gray-900 rounded-lg overflow-hidden p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-purple-500 glow-purple"></div>
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                      Full-Stack Developer
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-cyan-500 glow-cyan"></div>
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      AI Enthusiast
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-pink-500 glow-pink"></div>
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500">
                      Blockchain Developer
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-yellow-500 glow-yellow"></div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                      Data Analyst
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-500 glow-green"></div>
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                      Problem Solver
                    </h3>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <NeonButton variant="outline" size="icon" asChild color="purple">
                    <a href="https://github.com/shashankbhushan1309" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </NeonButton>
                  <NeonButton variant="outline" size="icon" asChild color="cyan">
                    <a
                      href="https://www.linkedin.com/in/shashank-bhushan-755294231/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </NeonButton>
                  <NeonButton variant="outline" size="icon" asChild color="pink">
                    <a href="mailto:s.bhushan910@gmail.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </NeonButton>
                  <NeonButton variant="outline" size="icon" asChild color="green">
                    <a href="https://x.com/sarthak13092003" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </NeonButton>
                  <NeonButton variant="outline" size="icon" asChild color="yellow">
                    <a href="https://www.instagram.com/png.sb/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </NeonButton>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                BTech CSE Student & Developer
              </h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate BTech Computer Science and Engineering student at Jaypee University of Engineering and
                Technology. With a strong foundation in programming and Software development, I've developed various projects
                that showcase my technical abilities and creativity.
              </p>
              <p className="text-gray-300 mb-6">
                My journey in technology began with a curiosity about how digital solutions can solve real-world
                problems. Since then, I've been constantly learning and improving my skills through coursework, personal
                projects, and collaborative work.
              </p>
              <p className="text-gray-300">
                I'm particularly interested in Web Development, Gen-AI, Backend and Blockchain technology. I believe in creating
                technology that makes a positive impact on society, as demonstrated by my healthcare and AI-focused
                projects.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 scroll-mt-16">
          <NeonText text="Work Experience" className="text-3xl md:text-4xl font-bold mb-12 text-center" color="cyan" />
          <ExperienceSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 scroll-mt-16">
          <NeonText text="My Projects" className="text-3xl md:text-4xl font-bold mb-12 text-center" color="pink" />
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Repair-Pal"
              description="Personalized Car breakdown Solutions - Developed a generative AI model providing real-time assistance during vehicle breakdowns with 90% accuracy in diagnosing issues. Diagnosed 500+ common car issues, reducing service response time by 40%."
              tags={["Generative AI", "Machine Learning", "Python", "React"]}
              imageUrl="/images/repair-pal.png"
              githubUrl="https://github.com/shashankbhushan1309/RepairPal"
              liveUrl="https://github.com/shashankbhushan1309/RepairPal"
              achievement="Top 30 in Tata InnoVent 2024 out of 2,500+ teams"
              color="purple"
            />
            <ProjectCard
              title="Heritage-Lens"
              description="Your Ultimate Heritage Companion - Developed an AI-powered image recognition tool for 10,000+ monuments with 85% accuracy. Integrated local business support for 100+ home-stays, shops, and services."
              tags={["AI", "Image Recognition", "React", "Node.js"]}
              imageUrl="/images/heritage-lens.png"
              githubUrl="https://github.com/Sama2911arth/Travisco"
              liveUrl="https://github.com/Sama2911arth/Travisco"
              achievement="SIH 2024 Project"
              color="cyan"
            />
            <ProjectCard
              title="Crypto-Label"
              description="Blockchain-based data labeling platform on Solana, ensuring transparent, secure, and low-cost transactions for freelancers. Integrated smart contract solutions to automate task allocation and payments, enhancing trust and efficiency."
              tags={["Blockchain", "Solana", "Smart Contracts", "React"]}
              imageUrl="/images/crypto-label.png"
              githubUrl="https://github.com/shashankbhushan1309/Cryptolabel"
              liveUrl="https://github.com/shashankbhushan1309/Cryptolabel"
              color="pink"
            />
            <ProjectCard
              title="Find-Your-Med-life"
              description="Affordable Healthcare at Your Fingertips - Designed and developed a healthcare application that enables users to find affordable alternative medicines. Helped 500+ users find affordable medicines, cutting costs by 40%, and compared 1,000+ medicine brands."
              tags={["Healthcare", "React", "Node.js", "MongoDB"]}
              imageUrl="/images/find-your-med.png"
              githubUrl="https://github.com/shashankbhushan1309/FindYourMed-Life"
              liveUrl="https://github.com/shashankbhushan1309/FindYourMed-Life"
              color="green"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 scroll-mt-16">
          <NeonText text="My Skills" className="text-3xl md:text-4xl font-bold mb-12 text-center" color="green" />
          <SkillsSection />
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24 scroll-mt-16">
          <NeonText text="Education" className="text-3xl md:text-4xl font-bold mb-12 text-center" color="blue" />
          <EducationTimeline />
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16 md:py-24 scroll-mt-16">
          <NeonText
            text="Achievements & Certifications"
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            color="yellow"
          />
          <AchievementsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 scroll-mt-16">
          <NeonText text="Get In Touch" className="text-3xl md:text-4xl font-bold mb-12 text-center" color="orange" />
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 bg-gray-900/30">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Shashank Bhushan. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="https://github.com/shashankbhushan1309"
              className="text-gray-400 hover:text-white transition-colors hover:text-glow-purple"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shashank-bhushan-755294231/"
              className="text-gray-400 hover:text-white transition-colors hover:text-glow-cyan"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:s.bhushan910@gmail.com"
              className="text-gray-400 hover:text-white transition-colors hover:text-glow-pink"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/sarthak13092003"
              className="text-gray-400 hover:text-white transition-colors hover:text-glow-green"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/png.sb/"
              className="text-gray-400 hover:text-white transition-colors hover:text-glow-yellow"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
