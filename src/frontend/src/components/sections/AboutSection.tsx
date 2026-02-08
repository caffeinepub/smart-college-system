import { Sparkles, Target, Rocket } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About the System */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold">About the System</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Smart College System is an innovative, AI-powered education management platform designed to revolutionize how educational institutions operate. Built with cutting-edge technology and deep understanding of academic needs, our system seamlessly integrates all aspects of college management into one unified, intelligent platform.
              </p>
              <p className="text-lg leading-relaxed">
                From student enrollment to graduation, from faculty workload management to administrative oversight, Smart College System provides comprehensive tools that enhance efficiency, improve learning outcomes, and create a more connected campus community.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 animate-slide-in-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To empower educational institutions with intelligent technology that simplifies operations, enhances learning experiences, and enables data-driven decision making for better academic outcomes.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4 animate-slide-in-right">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To become the leading AI-powered education management platform globally, transforming how institutions operate and setting new standards for academic excellence and operational efficiency.
              </p>
            </div>
          </div>

          {/* Future Scope */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-semibold">Future Scope of AI in Education</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h4 className="text-lg font-semibold text-primary">Personalized Learning Paths</h4>
                <p className="text-muted-foreground">
                  AI will create individualized learning journeys for each student, adapting content difficulty, pace, and teaching methods based on learning styles, strengths, and areas for improvement.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h4 className="text-lg font-semibold text-primary">Predictive Analytics for Student Success</h4>
                <p className="text-muted-foreground">
                  Advanced machine learning models will predict student outcomes, identify at-risk students early, and recommend targeted interventions to improve retention and graduation rates.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h4 className="text-lg font-semibold text-primary">Intelligent Content Generation</h4>
                <p className="text-muted-foreground">
                  AI will assist educators in creating customized learning materials, assessments, and interactive content tailored to specific learning objectives and student needs.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h4 className="text-lg font-semibold text-primary">Virtual Reality & Immersive Learning</h4>
                <p className="text-muted-foreground">
                  Integration of VR/AR technologies with AI will enable immersive, hands-on learning experiences in virtual labs, historical recreations, and complex simulations.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h4 className="text-lg font-semibold text-primary">Automated Administrative Tasks</h4>
                <p className="text-muted-foreground">
                  AI will handle routine administrative tasks like scheduling, grading, report generation, and communication, freeing educators to focus on teaching and mentoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
