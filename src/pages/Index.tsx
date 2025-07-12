
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CoreCapabilities } from "@/components/CoreCapabilities";
import { ClientLogos } from "@/components/ClientLogos";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <CoreCapabilities />
      <ClientLogos />
    </div>
  );
};

export default Index;
