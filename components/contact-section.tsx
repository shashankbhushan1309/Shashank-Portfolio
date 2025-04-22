import { Mail, MapPin, Phone, Send, Twitter, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { NeonButton } from "@/components/neon-button"

export function ContactSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="border-t-4 border-t-orange-500 bg-gray-900/50 border-gray-700 glow-border-orange">
        <CardContent className="pt-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
              >
                Name
              </label>
              <Input id="name" placeholder="Your name" className="bg-gray-800/50 border-gray-700 text-white" />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                className="bg-gray-800/50 border-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
              >
                Subject
              </label>
              <Input id="subject" placeholder="Subject" className="bg-gray-800/50 border-gray-700 text-white" />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[120px] bg-gray-800/50 border-gray-700 text-white"
              />
            </div>
            <NeonButton type="submit" className="w-full" color="orange">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </NeonButton>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          Contact Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-orange-400 mt-0.5 glow-orange" />
            <div>
              <h4 className="font-medium text-white">Email</h4>
              <p className="text-gray-400">s.bhushan910@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-orange-400 mt-0.5 glow-orange" />
            <div>
              <h4 className="font-medium text-white">Phone</h4>
              <p className="text-gray-400">+91 9060487098</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-orange-400 mt-0.5 glow-orange" />
            <div>
              <h4 className="font-medium text-white">Location</h4>
              <p className="text-gray-400">Guna, Madhya Pradesh, India</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Twitter className="h-5 w-5 text-orange-400 mt-0.5 glow-orange" />
            <div>
              <h4 className="font-medium text-white">Twitter</h4>
              <a href="https://x.com/sarthak13092003" className="text-gray-400 hover:text-white">
                @sarthak13092003
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Instagram className="h-5 w-5 text-orange-400 mt-0.5 glow-orange" />
            <div>
              <h4 className="font-medium text-white">Instagram</h4>
              <a href="https://www.instagram.com/png.sb/" className="text-gray-400 hover:text-white">
                @png.sb
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Connect With Me
          </h3>
          <p className="text-gray-300 mb-4">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <div className="flex gap-4 mt-4">
            <NeonButton variant="outline" asChild color="orange">
              <a href="https://github.com/shashankbhushan1309" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </NeonButton>
            <NeonButton variant="outline" asChild color="orange">
              <a
                href="https://www.linkedin.com/in/shashank-bhushan-755294231/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </NeonButton>
            <NeonButton variant="outline" asChild color="orange">
              <a href="https://x.com/sarthak13092003" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </NeonButton>
          </div>
        </div>
      </div>
    </div>
  )
}
