import NavbarSection from "./Components/NavbarSection";
import HeroSection from "./Components/HeroSection";
import ProfileSection from "./Components/ProfileSection";
import ProjectSection from "./Components/ProjectSection";
import ContactSection from "./Components/ContactSection";
import FooterSection from "./Components/FooterSection";
import "remixicon/fonts/remixicon.css";
import ExperienceTree from "./Components/ExperienceFlow";
import Testimonials from "./Components/Testimonials";




export default function Home() {
  return (
    <main>
      <NavbarSection />
      <HeroSection />
      <ProfileSection />
      <ExperienceTree />
      <ProjectSection />
      <Testimonials />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
