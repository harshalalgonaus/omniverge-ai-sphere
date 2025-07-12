
export const ClientLogos = () => {
  const clients = [
    "CLEVAIR",
    "teezily", 
    "ABB",
    "JABIL",
    "WOODWARD",
    "Ziff Davis"
  ];

  return (
    <section className="py-16 bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-gray-600 mb-8">Our clients</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div
                key={client}
                className="text-gray-400 font-medium text-lg hover:text-gray-600 transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 text-lg">
            Trusted by leading companies worldwide to deliver innovative AI solutions
          </p>
        </div>
      </div>
    </section>
  );
};
