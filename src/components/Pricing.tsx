export default function Pricing() {
  const sections = [
    {
      title: "HAIRCUT",
      items: [
        { title: "LINE UP ONLY", price: "50K" },
        { title: "ZERO TRIM ONLY", price: "100K" },
        { title: "HEAD SHAVE", price: "150K" },
        { title: "HAIR CUT", price: "150K" },
      ],
    },
    {
      title: "BEARD",
      items: [
        { title: "BEARD TRIM", price: "80K" },
        { title: "HOT TOWEL SHAVE", price: "130K" },
        { title: "PERM BEARD COLORING", price: "Start from 300K" },
      ],
    },
    {
      title: "HAIR TREATMENT",
      items: [
        { title: "HAIR WASH ONLY", price: "50K" },
        { title: "HAIR ART DESIGN", price: "250K" },
        { title: "COMBO 1 (HAIRCUT + FULL SHAVE)", price: "250K" },
        { title: "COMBO 2 (HAIRCUT + BEARD TRIM)", price: "230K" },
        { title: "PERM CURL", price: "850K" },
        { title: "CONROW", price: "Start from 500K" },
        { title: "HAIR COLORING", price: "Start from 800K" },
      ],
    },
    {
      title: "MERCHANDISE",
      items: [
        { title: "T-SHIRT", price: "200K" },
        { title: "SHIRT", price: "350K" },
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
              <div className="border-b border-white/10 pb-2 mb-4">
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-2">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center px-4 py-2 rounded transition duration-200 hover:brightness-110"
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
