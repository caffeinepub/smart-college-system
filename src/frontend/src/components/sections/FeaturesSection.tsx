import { FeatureCard } from '../FeatureCard';
import {
  GraduationCap,
  MessageSquare,
  BarChart3,
  Users,
  Camera,
  ClipboardCheck,
  Bell,
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: GraduationCap,
      title: 'AI Student Portal',
      description:
        'Secure login for students with real-time attendance tracking, comprehensive marks overview, academic performance insights, and personalized dashboards tailored to individual learning needs.',
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot / Virtual Assistant',
      description:
        'Conversational AI assistant that answers queries related to courses, fees, timetable, exams, results, and campus services. Available 24/7 to support students and staff.',
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics Dashboard',
      description:
        'Visual charts and graphs showing student performance trends, risk prediction for at-risk students, and AI-driven academic improvement suggestions to enhance learning outcomes.',
    },
    {
      icon: Users,
      title: 'AI Faculty Assistant',
      description:
        'Powerful tools for faculty including automatic timetable generation, workload analysis, class management, performance tracking, and intelligent scheduling optimization.',
    },
    {
      icon: Camera,
      title: 'Face Recognition Attendance',
      description:
        'AI-based facial recognition attendance system (concept demo) with camera integration, automated attendance marking, and real-time verification for enhanced security and efficiency.',
    },
    {
      icon: ClipboardCheck,
      title: 'Smart Admissions System',
      description:
        'AI-powered eligibility checker for admissions using marks, category, and course preferences. Get instant results with intelligent matching and recommendation algorithms.',
    },
    {
      icon: Bell,
      title: 'Campus Intelligence',
      description:
        'Smart notification system for events, notices, announcements, deadlines, and real-time alerts. Keep students and staff informed with personalized, timely communications.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-balance">Core Features</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful AI-driven features that make Smart College System the future of education management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
