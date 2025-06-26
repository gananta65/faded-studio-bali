export default function Services() {
  const services = [
    {
      title: "Haircut",
      description:
        "Classic, modern, or fade — sharp styles tailored to your look.",
      icon: "",
    },
    {
      title: "Beard Trim",
      description: "Neat beard sculpting for the perfect gentleman’s finish.",
      icon: "",
    },
    {
      title: "Hair Wash",
      description:
        "Refreshing scalp cleanse and massage with premium products.",
      icon: "",
    },
  ];

  return (
    <section
      id="services"
      className="bg-zinc-900 text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 border-l-4 border-yellow-500/80 pl-4 text-left">
          OUR <span className="text-yellow-500/80">SERVICES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-xl p-6 shadow hover:shadow-lg transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
