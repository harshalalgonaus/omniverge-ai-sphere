
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "AI Consulting",
    "Machine Learning Development",
    "Data Engineering",
    "Business Intelligence",
    "MLOps Solutions",
    "Generative AI Development"
  ];

  const solutions = [
    "Finance AI",
    "Healthcare AI",
    "Manufacturing AI",
    "Retail Intelligence",
    "Supply Chain Optimization",
    "Risk Assessment"
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "News & Updates",
    "Case Studies",
    "Partners"
  ];

  const legal = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Data Protection",
    "Compliance",
    "Security"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">AI OmnivergeSolutions</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                  Empowering businesses with cutting-edge AI solutions. We transform 
                  data into actionable insights and drive innovation through advanced 
                  artificial intelligence technologies.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="text-sm text-primary-foreground/80">
                    contact@aiomniversesolutions.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-sm text-primary-foreground/80">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-sm text-primary-foreground/80">
                    San Francisco, CA
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                {solutions.map((solution) => (
                  <li key={solution}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                    >
                      {solution}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 mb-6">
                {company.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {legal.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} AI OmnivergeSolutions. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                ISO 27001 Certified
              </a>
              <a 
                href="#" 
                className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                SOC 2 Compliant
              </a>
              <a 
                href="#" 
                className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                GDPR Ready
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
