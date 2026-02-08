export function DashboardPreviewSection() {
  const mockups = [
    {
      src: '/assets/generated/dashboard-mockup-1.dim_1400x900.png',
      alt: 'Smart College System Dashboard - Performance Analytics',
      caption: 'Comprehensive dashboard with real-time performance analytics, attendance tracking, and personalized insights.',
    },
    {
      src: '/assets/generated/dashboard-mockup-2.dim_1400x900.png',
      alt: 'Smart College System Dashboard - Attendance and Marks',
      caption: 'Detailed attendance overview and marks tracking with visual progress indicators and notifications.',
    },
  ];

  return (
    <section id="dashboard" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-balance">Dashboard Preview</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the intuitive interface designed for seamless navigation and powerful insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {mockups.map((mockup, index) => (
            <div
              key={index}
              className="space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group overflow-hidden rounded-xl border border-border shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src={mockup.src}
                  alt={mockup.alt}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground text-center px-4">
                {mockup.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
