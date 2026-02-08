import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { DashboardPreviewSection } from './components/sections/DashboardPreviewSection';
import { AnalyticsSection } from './components/sections/AnalyticsSection';
import { FaceAttendanceDemoSection } from './components/sections/FaceAttendanceDemoSection';
import { InteractiveDemosSection } from './components/sections/InteractiveDemosSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <DashboardPreviewSection />
        <AnalyticsSection />
        <FaceAttendanceDemoSection />
        <InteractiveDemosSection />
        <BenefitsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
