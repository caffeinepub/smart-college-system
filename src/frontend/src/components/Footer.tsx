import { GraduationCap, Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram, SiGithub } from 'react-icons/si';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: SiFacebook, href: '#', label: 'Facebook' },
    { icon: SiX, href: '#', label: 'X (Twitter)' },
    { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: SiInstagram, href: '#', label: 'Instagram' },
    { icon: SiGithub, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold text-primary">
              <GraduationCap className="w-6 h-6" />
              <span>Smart College System</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-Powered Education Management Platform for the future of learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </a>
              <a href="#benefits" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Benefits
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Connect With Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {currentYear}. Built with{' '}
            <Heart className="w-4 h-4 text-destructive fill-destructive inline" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
