
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, Code, Cog, TrendingUp, Shield, Briefcase, Factory } from "lucide-react";

export const Services = () => {
  const services = [
    {
      category: "DISCOVER",
      items: [
        {
          title: "AI Consulting",
          description: "Strategic AI implementation guidance",
          icon: Brain,
        },
        {
          title: "Big Data Consulting",
          description: "Data strategy and architecture",
          icon: Database,
        },
        {
          title: "Generative AI Consulting",
          description: "Next-gen AI solutions",
          icon: Code,
        },
      ],
    },
    {
      category: "ORGANIZE DATA",
      items: [
        {
          title: "Business Intelligence Services",
          description: "Data-driven decision making",
          icon: TrendingUp,
        },
        {
          title: "Data Engineering Services",
          description: "Scalable data infrastructure",
          icon: Cog,
        },
        {
          title: "Databricks Deployment Services",
          description: "Cloud data platform solutions",
          icon: Shield,
        },
      ],
    },
    {
      category: "DEVELOP",
      items: [
        {
          title: "AI Proof of Concept (PoC)",
          description: "Validate AI solutions",
          icon: Code,
        },
        {
          title: "Generative AI Development Company",
          description: "Custom AI model development",
          icon: Brain,
        },
        {
          title: "LLMs Development",
          description: "Large language model solutions",
          icon: Database,
        },
        {
          title: "Machine Learning Consulting",
          description: "ML strategy and implementation",
          icon: Cog,
        },
      ],
    },
    {
      category: "DEPLOY",
      items: [
        {
          title: "AI Integration Services",
          description: "Seamless AI deployment",
          icon: Shield,
        },
        {
          title: "MLOps Consulting",
          description: "Production ML operations",
          icon: TrendingUp,
        },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and data solutions across all stages of your digital transformation journey
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {services.map((category) => (
            <div key={category.category} className="space-y-6">
              <div className="text-center">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  {category.category}
                </h3>
              </div>
              
              {category.items.map((service) => (
                <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <service.icon className="w-8 h-8 text-green-500 mb-2" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ))}
        </div>

        {/* Industry Solutions */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Industry Solutions</h3>
            <p className="text-lg text-gray-600">
              Specialized AI solutions for various industries and domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "AI Finance", icon: TrendingUp, desc: "Financial analytics and automation" },
              { name: "Lawgichub AI", icon: Shield, desc: "Legal document analysis and compliance" },
              { name: "AI Agriculture", icon: Factory, desc: "Crop optimization and smart farming" },
              { name: "Manufacturing AI", icon: Cog, desc: "Production optimization and quality control" },
            ].map((solution) => (
              <Card key={solution.name} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <solution.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{solution.name}</h4>
                  <p className="text-gray-600 text-sm">{solution.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
