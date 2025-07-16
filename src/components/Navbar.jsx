import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  {
    name: "Home", href: "#hero"
  },
  {
    name: "À propos", href: "#about"
  },
  {
    name: "Services", href: "#services"
  },
  //{
    //name: "Photo", href: "#photo"
  //},
  {
    name: "Contact", href: "#contact"
  },
]

export const Navbar = () => {

  const [isScrolled, setisScrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setisScrolled(currentScrollY > lastScrollY && currentScrollY > 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return <nav className={cn(
  "fixed w-full z-40 transition-all duration-300 py-12",
  isScrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
)}>
    <div className={cn(
      "container rounded-full py-8 px-6 sm:px-8 md:px-10 lg:px-12 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-7xl",
      "bg-white/10 backdrop-blur-2xl shadow-lg ring-1 ring-white/10 border border-white/10"
    )}>
    <div className= "flex items-center justify-between">
      <a className="text-2xl font-bold text-primary flex items-center"
         href="#hero">
        <span className="relative z-10">
          <span className="text-glow text-foreground">
              ElPhoto
          </span>{" "}
          Booth
        </span>
      </a>

      {/*Desktop version*/}

      <div className="hidden md:flex space-x-10">
        {navItems.map((item, key) => (
          <a key = {key} href={item.href} className="text-lg text-foreground/80 hover:text-primary transition-colors duration-500">
            {item.name}
          </a>
        ))}
      </div>

      {/*Mobile version*/}

      <button onClick={() => setisMenuOpen((prev) => !prev )}
              className="md:hidden p-2 text-foreground  z-50"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        > {
        isMenuOpen ? <X size={24} /> : <Menu size={24}/> }
      </button>

      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center h-screen",
        "transition-all duration-500 md:hidden",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <a className="text-4xl font-bold text-primary flex items-center mb-8"
           href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">
                El Photo
            </span>{""}
            Booth
          </span>
        </a>
        <div className="w-30 h-px bg-foreground/30 mb-8 transition-all duration-500 sm:w-48 md:w-60"></div>

          <div className="flex flex-col space-y-8 text-2xl">
            {navItems.map((item, key) => (
              <a key = {key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setisMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
      </div>
    </div>
    </div>
  </nav>

}
