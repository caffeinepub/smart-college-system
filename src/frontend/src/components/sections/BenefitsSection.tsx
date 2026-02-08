import { Users, GraduationCap, Shield } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: GraduationCap,
      title: 'For Students',
      items: [
        'Personalized learning dashboards with real-time progress tracking',
        'AI-powered study recommendations and performance insights',
        '24/7 virtual assistant for instant query resolution',
        'Mobile-friendly access to attendance, marks, and schedules',
        'Smart notifications for deadlines and important updates',
      ],
    },
    {
      icon: Users,
      title: 'For Faculty',
      items: [
        'Automated timetable generation and workload optimization',
        'Real-time student performance analytics and risk alerts',
        'Streamlined class management and attendance tracking',
        'AI-assisted grading and feedback tools',
        'Comprehensive reporting and insights dashboard',
      ],
    },
    {
      icon: Shield,
      title: 'For Administrators',
      items: [
        'Centralized management of all academic operations',
        'Data-driven decision making with predictive analytics',
        'Automated admissions and enrollment processing',
        'Resource allocation optimization across departments',
        'Enhanced security with biometric attendance systems',
      ],
    },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-balance">Benefits for Everyone</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Smart College System empowers every stakeholder with tailored features and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
