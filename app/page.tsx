import FaqSection from "./sections/faq";
import HeroSection from "./sections/hero";
import ContactSection from "./sections/contact";
import ProcessSection from "./sections/process";
import ServicesSection from "./sections/services";
import AboutUsSection from "./sections/about-us/about-us";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <ProcessSection />
      <ServicesSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
