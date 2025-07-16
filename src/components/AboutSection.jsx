import { Briefcase, Code, User, Sparkles  } from "lucide-react"

export const AboutSection = () => {
  return <section id="about" className="py-24 px-4 relative">
    {" "}
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        À  <span className="text-primary">propos</span>
      </h2>

      <div className="grid gr-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 ">
          <h3 className="text-2xl font-semibold">Entreprise de location de Matériel Photo</h3>
          <p className="text-muted-foreground">
            Currently studying at ENSIIE, I’m passionate about data science, AI, and large-scale data analytics. I’ve gained hands-on experience through internships and personal projects involving predictive modeling, data visualization, and infrastructure tools.
          </p>
          <p className="text-muted-foreground">
            I enjoy turning complex problems into actionable insights, and love building tools that blend machine learning with clean, user-friendly interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button" >
              {" "}
              Contacter nous !
            </a>

          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code  className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  Data Scientist/Analyst
                </h4>
                <p className="text-muted-foreground">
                  Construisez des souvenirs inoubliables
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Sparkles  className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  Location
                </h4>
                <p className="text-muted-foreground">
                  Nous sommes basés en banlieue parisienne.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase  className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  Rapide
                </h4>
                <p className="text-muted-foreground">
                  Réponse rapide sous 1/2 jours
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
}