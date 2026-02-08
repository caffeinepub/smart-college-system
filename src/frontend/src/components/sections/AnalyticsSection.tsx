import { SimpleLineChart } from '../charts/SimpleLineChart';
import { RiskBarChart } from '../charts/RiskBarChart';
import { TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

export function AnalyticsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-balance">Smart Analytics Dashboard</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-powered insights to track performance, predict risks, and suggest improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Trends */}
          <div className="bg-card border border-border rounded-xl p-6 space-y-4 animate-slide-in-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Performance Trends</h3>
                <p className="text-sm text-muted-foreground">Track student progress over time</p>
              </div>
            </div>
            <SimpleLineChart />
            <p className="text-sm text-muted-foreground">
              Visualize academic performance trends across semesters with AI-driven pattern recognition to identify improvement opportunities.
            </p>
          </div>

          {/* Risk Prediction */}
          <div className="bg-card border border-border rounded-xl p-6 space-y-4 animate-slide-in-right">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Risk Prediction</h3>
                <p className="text-sm text-muted-foreground">Identify at-risk students early</p>
              </div>
            </div>
            <RiskBarChart />
            <p className="text-sm text-muted-foreground">
              AI algorithms analyze attendance, grades, and engagement to predict students who may need additional support.
            </p>
          </div>
        </div>

        {/* Improvement Suggestions */}
        <div className="mt-8 bg-card border border-border rounded-xl p-6 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-success" />
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-semibold">AI-Driven Improvement Suggestions</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    Personalized study recommendations based on individual learning patterns and performance gaps
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    Automated alerts for faculty when students show declining engagement or performance
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm text-muted-foreground">
                    Resource allocation optimization to maximize learning outcomes across departments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
