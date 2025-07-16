import { Briefcase, Code, User, Sparkles, Pin, MapPin  } from "lucide-react"

export const AboutSection = () => {
  return <section id="about" className="py-24 px-4 relative">
    {" "}
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        À  <span className="text-primary">propos</span>
      </h2>

      <div className="grid gr-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img src="/model.png" alt="Modèle photobooth" className="max-w-full h-auto " />
        </div>

        <div className="space-y-6">
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

          <div className="grid grid-cols-3 gap-4 text-center text-sm sm:text-base">
            <div className="gradient-border p-6 card-hover">
              <h4 className="text-4xl font-bold text-primary">150+</h4>
              <p className="text-muted-foreground mt-2">Événements couverts</p>
            </div>
            <div className="gradient-border p-6 card-hover">
              <h4 className="text-4xl font-bold text-primary">98%</h4>
              <p className="text-muted-foreground mt-2">Clients satisfaits</p>
            </div>
            <div className="gradient-border p-6 card-hover">
              <h4 className="text-4xl font-bold text-primary">24h</h4>
              <p className="text-muted-foreground mt-2">Temps de réponse moyen</p>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin  className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  Location
                </h4>
                <p className="text-muted-foreground">
                  Sceaux, Hauts-de-Seine
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
}