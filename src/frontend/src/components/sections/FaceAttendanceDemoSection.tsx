import { Camera, CheckCircle, UserCheck, Database } from 'lucide-react';

export function FaceAttendanceDemoSection() {
  const workflowSteps = [
    { icon: Camera, label: 'Capture', description: 'Camera captures face' },
    { icon: UserCheck, label: 'Detect', description: 'AI detects features' },
    { icon: CheckCircle, label: 'Match', description: 'Verify identity' },
    { icon: Database, label: 'Record', description: 'Mark attendance' },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 text-foreground rounded-full text-sm font-medium">
            <span>Concept Demo</span>
          </div>
          <h2 className="text-balance">Face Recognition Attendance</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-powered facial recognition for automated, secure, and efficient attendance tracking.
          </p>
          <p className="text-sm text-muted-foreground italic">
            * This is a conceptual demonstration. No real biometric processing is performed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Camera UI Mockup */}
          <div className="space-y-4 animate-slide-in-left">
            <div className="relative group overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src="/assets/generated/face-attendance-camera-mock.dim_1200x800.png"
                alt="Face Recognition Camera Interface - Conceptual Demo"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Real-time camera interface with face detection overlay and verification status
            </p>
          </div>

          {/* Workflow Visualization */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-semibold">How It Works</h3>
            
            {/* Workflow Steps */}
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">
                      {index + 1}. {step.label}
                    </h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Workflow Diagram */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <img
                src="/assets/generated/face-attendance-workflow.dim_1400x320.png"
                alt="Face Recognition Attendance Workflow Diagram"
                className="w-full h-auto"
              />
            </div>

            {/* Benefits */}
            <div className="mt-6 space-y-2">
              <h4 className="font-semibold">Key Benefits</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Eliminates manual attendance marking and proxy attendance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Real-time attendance tracking with instant notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Enhanced security and accurate record-keeping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
