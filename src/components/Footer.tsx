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
        <div className="py-8">
          <div className="grid grid-cols-5 gap-6">
            {/* Company Info */}
            <div className="col-span-1">
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">AI OmnivergeSolutions</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                  Empowering businesses with cutting-edge 
                  AI solutions and advanced artificial intelligence 
                  technologies.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <Mail className="w-3 h-3 text-secondary" />
                  <span className="text-sm text-primary-foreground/80">
                    contact@aiomniversesolutions.com
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3 h-3 text-secondary" />
                  <span className="text-sm text-primary-foreground/80">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 text-secondary" />
                  <span className="text-sm text-primary-foreground/80">
                    San Francisco, CA
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Services</h4>
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Solutions</h4>
              <ul className="space-y-1">
                {solutions.map((solution) => (
                  <li key={solution}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors block"
                    >
                      {solution}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Company</h4>
              <ul className="space-y-1">
                {company.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Legal</h4>
              <ul className="space-y-1">
                {legal.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors block"
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
        <div className="border-t border-primary-foreground/20 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} AI OmnivergeSolutions. All rights reserved.
            </div>
            <div className="flex space-x-4">
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