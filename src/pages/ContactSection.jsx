import { Mail, MapPin, Phone } from "lucide-react"
import { SiInstagram, SiLinkedin } from "react-icons/si"
import { cn } from "../lib/utils"


export const ContactSection = () => {

  return <section id="contact" className="py-4  px-4 relative bg-secondary/30">
  <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Contactez <span className="text-primary"> nous </span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Si vous avez besoin de plus d'informations n'hésitez pas à nous contactez !
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:scale-105">
          <div className="p-3 rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
            <a href="mailto:ElPhotobooth@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              ElPhotobooth@gmail.com
            </a>
          </div>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:scale-105">
          <div className="p-3 rounded-full bg-primary/10">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Téléphone</h4>
            <a href="tel:" className="text-muted-foreground hover:text-primary transition-colors">
              07 78 82 03 20
            </a>
          </div>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:scale-105">
          <div className="p-3 rounded-full bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Location</h4>
            <span className="text-muted-foreground">Sceaux, France</span>
          </div>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:scale-105">
          <div className="p-3 rounded-full bg-primary/10">
            <SiInstagram className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Instagram</h4>
            <a href="https://www.instagram.com/elphotobooth_memories?igsh=MW40c3Njc2Y0bGdicA==" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              ElPhotobooth
            </a>
          </div>
        </div>
      </div>

  </div>
  </section>
}