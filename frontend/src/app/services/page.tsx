export default function ServicesPage() {
  const services = [
    {
      title: "Buying Assistance",
      description: "Expert guidance through the entire home buying process"
    },
    {
      title: "Selling Strategy",
      description: "Maximize your home's value with our proven marketing approach"
    },
    {
      title: "Property Valuation",
      description: "Accurate pricing assessments for your property"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}