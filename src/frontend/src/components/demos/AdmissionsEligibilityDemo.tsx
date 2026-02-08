import { useState } from 'react';
import { ClipboardCheck, CheckCircle, XCircle } from 'lucide-react';

export function AdmissionsEligibilityDemo() {
  const [marks, setMarks] = useState('');
  const [category, setCategory] = useState('');
  const [course, setCourse] = useState('');
  const [result, setResult] = useState<{ eligible: boolean; message: string } | null>(null);

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    
    const marksNum = parseFloat(marks);
    
    // Simple rule-based eligibility logic
    let eligible = false;
    let message = '';

    if (isNaN(marksNum) || marksNum < 0 || marksNum > 100) {
      message = 'Please enter valid marks between 0 and 100.';
    } else if (!category || !course) {
      message = 'Please fill in all fields.';
    } else {
      // Course-specific thresholds
      const thresholds: Record<string, number> = {
        'Computer Science': 85,
        'Engineering': 80,
        'Business Administration': 75,
        'Arts & Humanities': 70,
      };

      const threshold = thresholds[course] || 75;
      
      // Category-based adjustments
      const categoryBonus: Record<string, number> = {
        'General': 0,
        'OBC': 5,
        'SC/ST': 10,
      };

      const bonus = categoryBonus[category] || 0;
      const adjustedThreshold = Math.max(threshold - bonus, 60);

      eligible = marksNum >= adjustedThreshold;
      
      if (eligible) {
        message = `Congratulations! You are eligible for ${course}. Your marks (${marksNum}%) meet the requirement of ${adjustedThreshold}% for ${category} category.`;
      } else {
        message = `Unfortunately, you are not eligible for ${course}. You need ${adjustedThreshold}% for ${category} category, but you have ${marksNum}%.`;
      }
    }

    setResult({ eligible, message });
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-6 animate-slide-in-left">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <ClipboardCheck className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Smart Admissions Checker</h3>
          <p className="text-sm text-muted-foreground">Check your eligibility instantly</p>
        </div>
      </div>

      <form onSubmit={checkEligibility} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="marks" className="text-sm font-medium">
            Marks Percentage (%)
          </label>
          <input
            id="marks"
            type="number"
            min="0"
            max="100"
            step="0.01"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            placeholder="Enter your marks"
            className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category" className="text-sm font-medium">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            required
          >
            <option value="">Select category</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC/ST">SC/ST</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="course" className="text-sm font-medium">
            Course Preference
          </label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            required
          >
            <option value="">Select course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Arts & Humanities">Arts & Humanities</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Check Eligibility
        </button>
      </form>

      {result && (
        <div
          className={`p-4 rounded-lg border ${
            result.eligible
              ? 'bg-success/10 border-success/50 text-success'
              : 'bg-destructive/10 border-destructive/50 text-destructive'
          } animate-fade-in`}
        >
          <div className="flex items-start gap-3">
            {result.eligible ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            )}
            <p className="text-sm">{result.message}</p>
          </div>
        </div>
      )}

      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          <strong>How it works:</strong> The system uses rule-based logic to determine eligibility based on marks, category, and course. Different courses have different thresholds, and category-based adjustments are applied.
        </p>
      </div>
    </div>
  );
}
