
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, BarChart3, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-primary/20">
            <TrendingUp className="w-4 h-4 mr-2 text-primary" />
            Strategic AI Investment Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
            Maximize ROI through
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              AI-powered innovation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            End-to-end AI solutions delivering measurable business value for enterprises, 
            investors, and industry leaders. Proven ROI across finance, legal, manufacturing, and agriculture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              View Investment Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-border">
            <DollarSign className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">Proven Returns</h3>
            <p className="text-muted-foreground">
              Average 300% ROI within 18 months through strategic AI implementation across portfolio companies
            </p>
          </div>
          
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-border">
            <BarChart3 className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">Market Leadership</h3>
            <p className="text-muted-foreground">
              Deploy cutting-edge AI solutions that position your investments ahead of market competition
            </p>
          </div>
          
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-border">
            <Shield className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">Risk Mitigation</h3>
            <p className="text-muted-foreground">
              Enterprise-grade AI solutions with comprehensive risk assessment and compliance frameworks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
