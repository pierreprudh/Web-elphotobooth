import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
  return (
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 ">
        <div className="absolute inset-0 bg-[#f9f9f6] overflow-hidden">
          <svg className="absolute inset-0 h-full w-[200%] opacity-100 animate-wave" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,20 Q25,40 50,20 Q75,0 100,20 V100 H0 Z" className="fill-primary/20" />
            <path d="M0,30 Q25,50 50,30 Q75,10 100,30 V100 H0 Z" className="fill-primary/30" />
            <path d="M0,40 Q25,60 50,40 Q75,20 100,40 V100 H0 Z" className="fill-primary/40" />
            <path d="M0,50 Q25,70 50,50 Q75,30 100,50 V100 H0 Z" className="fill-primary/50" />
            <path d="M0,60 Q25,80 50,60 Q75,40 100,60 V100 H0 Z" className="fill-primary/60" />
            <path d="M0,70 Q25,90 50,70 Q75,50 100,70 V100 H0 Z" className="fill-primary/70" />
            <path d="M0,80 Q25,100 50,80 Q75,60 100,80 V100 H0 Z" className="fill-primary/80" />
          </svg>
        </div>
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hello, we are</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1"> Elphoto</span>
              <spasn className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Booth</spasn>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              Immortalisez vos plus beaux moments avec style – Elphotobooth, la touche fun et pro de vos événements.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#services" className="cosmic-button">
                Nos Formules
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">
            Scroll
          </span>
          <ArrowDown className="h-5 w-5 "/>
        </div>

      </section>
  );
}