import { AdmissionsEligibilityDemo } from '../demos/AdmissionsEligibilityDemo';
import { ChatbotMock } from '../demos/ChatbotMock';

export function InteractiveDemosSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-balance">Interactive Demos</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Try out our AI-powered features with these interactive demonstrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <AdmissionsEligibilityDemo />
          <ChatbotMock />
        </div>
      </div>
    </section>
  );
}
