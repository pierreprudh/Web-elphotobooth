import { Briefcase, Code, User, Sparkles, Pin, MapPin  } from "lucide-react"
import ClickSpark from "./Spark"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return <section id="about" className="py-24 px-4 relative">
    {" "}
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        À  <span className="text-primary">propos</span>
      </h2>

      <div className="grid gr-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center">
          <ClickSpark>
            <img src="/model.png" alt="Modèle photobooth" className="max-w-full h-auto block cursor-pointer" />
          </ClickSpark>
          <div className="absolute -bottom-6 w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white shadow-lg font-semibold text-sm animate-bounce opacity-90">
            Click on me!
          </div>
        </div>

        <div className="space-y-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Sparkles  className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  Elphotobooth
                </h4>
                <p className="text-muted-foreground">
                  Construisez des souvenirs inoubliables
                </p>
              </div>
            </div>
          </div>

          <div ref={ref} className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm sm:text-base sm:direction-rtl sm:text-left">
            <div className="gradient-border p-6 card-hover">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                <CountUp start={inView ? 0 : null} end={150} duration={6} />+
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm mt-2">Événements couverts</p>
            </div>
            <div className="gradient-border p-6 card-hover">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                <CountUp start={inView ? 0 : null} end={98} duration={6} />%
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm mt-2">Clients satisfaits</p>
            </div>
            <div className="gradient-border p-6 card-hover">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                <CountUp start={inView ? 0 : null} end={24} duration={6} />h
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm mt-2">Temps de réponse moyen</p>
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
                  Ile-de-France
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
}