export default function Pricing() {
  const sections = [
    {
      title: "BARBER",
      items: [
        { title: "BEARD TRIM", price: "100k" },
        { title: "COMBO 1 (HAIRCUT + FULL SHAVE)", price: "300k" },
        { title: "COMBO 2 (HAIRCUT + BEARD TRIM)", price: "280k" },
        { title: "COMBO MAX", price: "380k" },
        { title: "CORNROWS", price: "500k" },
        { title: "HAIR ART DESIGN", price: "350k" },
        { title: "HAIR COLORING", price: "500k" },
        { title: "HAIR CUT", price: "200k" },
        { title: "HAIR WASH ONLY", price: "50k" },
        { title: "HEAD SHAVE", price: "180k" },
        { title: "Home Service", price: "500k" },
        { title: "HOT TOWEL SHAVE", price: "130k" },
        { title: "LINE UP ONLY", price: "100k" },
        { title: "NOSE WAX", price: "80k" },
        { title: "ZERO TRIM ONLY", price: "150k" },
      ],
    },
    {
      title: "BARBER STUFF",
      items: [
        { title: "AFTER SHAVE", price: "200k" },
        { title: "Aloevera", price: "75k" },
        { title: "Beard oil", price: "250k" },
        { title: "DURRACK", price: "150k" },
        { title: "FOAM", price: "150k" },
        { title: "HAIR SPRAY", price: "175k" },
        { title: "Powder", price: "100k" },
        { title: "Shaver", price: "550k" },
        { title: "STYLING COMB", price: "150k" },
        { title: "Trimmer", price: "500k" },
        { title: "Uppercut Shampo", price: "250k" },
        { title: "Wax", price: "150k" },
      ],
    },
    {
      title: "APPAREL",
      items: [
        { title: "SHIRT", price: "350k" },
        { title: "T-SHIRT", price: "200k" },
        { title: "TSRT BOXY", price: "250k" },
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-zinc-900 text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 border-l-4 border-yellow-500/80 pl-4 text-left">
          <span className="text-yellow-500/80">PRICING</span> (IDR)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="border-b border-white/100 pb-2 mb-4">
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-2">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center px-4 py-1 rounded transition duration-200 hover:brightness-110"
                  >
                    <span className="text-sm md:text-base font-medium uppercase tracking-wide text-left">
                      {item.title}
                    </span>
                    <span className="text-yellow-400 font-bold text-sm md:text-base">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
