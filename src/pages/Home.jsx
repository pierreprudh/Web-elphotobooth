import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { AboutSection } from "./AboutSection";
import { ServiceSection } from "./ServiceSection";
import { HeroSection } from "./HeroSection";
import { Footer } from "./Footer";
import { ContactSection } from "./ContactSection";
import { PartnerSection } from "./PartnerSection";
import { AuroraBackground } from "./AuroraBackground";


export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
    <AuroraBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <PartnerSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};