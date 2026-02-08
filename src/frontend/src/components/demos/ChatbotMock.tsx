import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

export function ChatbotMock() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello! I\'m your AI assistant. Ask me about courses, fees, timetable, exams, results, or campus services.', isUser: false },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: Record<string, string> = {
    courses: 'We offer programs in Computer Science, Engineering, Business Administration, Arts & Humanities, and more. Each program is designed with industry-relevant curriculum and hands-on learning.',
    fees: 'Tuition fees vary by program. Computer Science: $15,000/year, Engineering: $14,000/year, Business: $12,000/year. Financial aid and scholarships are available.',
    timetable: 'Your personalized timetable is available in the student portal. Classes typically run Monday-Friday, 9 AM - 5 PM, with flexible scheduling options.',
    exams: 'Mid-term exams are scheduled in Week 8, and final exams in Week 16. Exam schedules are posted 2 weeks in advance on the student portal.',
    results: 'Results are published within 2 weeks of exam completion. You can view your grades, GPA, and detailed performance reports in the student portal.',
    campus: 'Campus services include library (24/7), cafeteria, sports facilities, health center, counseling services, and career guidance. All services are accessible via your student ID.',
    library: 'Our library is open 24/7 with over 100,000 books, digital resources, and study spaces. Access e-books and journals through the online portal.',
    hostel: 'On-campus hostel accommodation is available with modern amenities. Application deadline is June 30th. Contact housing@college.edu for details.',
  };

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (input.includes(key)) {
        return response;
      }
    }

    // Fallback response
    return 'I can help you with information about courses, fees, timetable, exams, results, campus services, library, and hostel. Please ask me about any of these topics!';
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = { text: getResponse(input), isUser: false };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInput('');
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col h-[600px] animate-slide-in-right">
      <div className="flex items-center gap-3 p-4 border-b border-border bg-primary/5">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">AI Virtual Assistant</h3>
          <p className="text-sm text-muted-foreground">Ask me anything!</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                message.isUser
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-4 border-t border-border bg-muted/30">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Try asking about: courses, fees, timetable, exams, results, campus services
        </p>
      </form>
    </div>
  );
}
