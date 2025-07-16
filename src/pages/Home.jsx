import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { AboutSection } from "../components/AboutSection";
import { ServiceSection } from "../components/ServiceSection";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import { ContactSection } from "../components/ContactSection";
import { PartnerSection } from "../components/PartnerSection";
import { AuroraBackground } from "../components/AuroraBackground";


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