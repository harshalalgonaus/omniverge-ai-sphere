
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Database, Settings, MessageSquare, Camera, BarChart, Check } from "lucide-react";

export const CoreCapabilities = () => {
  const capabilities = [
    {
      title: "Generative AI Development",
      description: "Custom AI model development and deployment",
      icon: MessageSquare,
      color: "text-green-500",
    },
    {
      title: "ContextClue",
      description: "Advanced context-aware AI solutions",
      icon: Eye,
      color: "text-blue-500",
    },
    {
      title: "Computer Vision Solutions",
      description: "Image and video analysis capabilities",
      icon: Camera,
      color: "text-purple-500",
    },
    {
      title: "Data Engineering Services",
      description: "Scalable data infrastructure and pipelines",
      icon: Database,
      color: "text-orange-500",
    },
    {
      title: "MLOps",
      description: "Production-ready ML operations",
      icon: Settings,
      color: "text-red-500",
    },
    {
      title: "Business Intelligence",
      description: "Data-driven insights and analytics",
      icon: BarChart,
      color: "text-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our core capabilities
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((capability) => (
                <Card key={capability.title} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <capability.icon className={`w-8 h-8 ${capability.color} mb-3`} />
                    <h3 className="font-semibold text-lg mb-2">{capability.title}</h3>
                    <p className="text-gray-600 text-sm">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Create the AI strategy with expert guidance
              </h3>
              
              <p className="text-gray-700">
                Create the AI strategy with expert guidance, identify the most impactful AI opportunities for 
                your business, and chart a clear path to AI implementation.
              </p>
              
              <div className="flex items-center space-x-2 text-green-700">
                <Check className="w-5 h-5" />
                <span className="font-medium">check</span>
              </div>
              
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Solutions */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Specialized Solutions</h3>
            <p className="text-lg text-gray-600">
              Domain-specific AI solutions for planning, economy, design, and forecasting
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Strategic Planning AI",
              "Economic Forecasting",
              "Design Automation",
              "Predictive Analytics",
              "Risk Assessment",
              "Market Intelligence",
              "Supply Chain Optimization",
              "Customer Intelligence",
            ].map((solution) => (
              <Card key={solution} className="text-center hover:shadow-md transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-gray-900">{solution}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
