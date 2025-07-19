
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2 text-secondary" />
            AI & Big Data Experts Company
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Driving changes through
            <br />
            <span className="bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
              AI & Data solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            End-to-end AI solutions for businesses, innovators, domain experts, and investors. 
            Customized problem statements and universal market solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg">
              Read case studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Let's talk
            </Button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
            <Brain className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-2xl font-bold mb-4">AI Consulting</h3>
            <p className="text-gray-200">
              Discover AI's practical advantages with custom solutions tailored to your business needs
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
            <Zap className="w-12 h-12 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-4">Generative AI</h3>
            <p className="text-gray-200">
              Adapt cutting-edge Generative AI to your business needs with innovative solutions
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
            <Database className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Big Data Consulting</h3>
            <p className="text-gray-200">
              Transform your data into actionable business insights with advanced analytics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
