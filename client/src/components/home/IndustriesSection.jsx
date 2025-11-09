const IndustriesSection = () => {
  const industries = [
    {
      id: 1,
      title: "Healthcare",
      description:
        "Advanced analytics for patient care, operational efficiency, and medical research breakthroughs.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
    },
    {
      id: 2,
      title: "Finance & Banking",
      description:
        "Risk assessment, fraud detection, and algorithmic trading powered by machine learning.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      id: 3,
      title: "Retail & E-commerce",
      description:
        "Customer behavior analysis, demand forecasting, and personalized recommendation systems.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      ),
    },
    {
      id: 4,
      title: "Manufacturing",
      description:
        "Predictive maintenance, quality control, and supply chain optimization through IoT analytics.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      ),
    },
    {
      id: 5,
      title: "Telecommunications",
      description:
        "Network optimization, customer churn prediction, and service quality enhancement solutions.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />
      ),
    },
    {
      id: 6,
      title: "Energy & Utilities",
      description:
        "Smart grid analytics, consumption forecasting, and renewable energy optimization systems.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 leading-tight mb-4">
            Expertise Across{" "}
            <span className="gradient-text">Multiple Sectors</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 leading-relaxed">
            Delivering tailored data science solutions that address unique
            challenges in diverse industries worldwide.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className="group relative bg-gradient-to-br from-white to-primary-50/20 rounded-2xl p-8 border-2 border-secondary-100 hover:border-brand-purple/50 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {industry.icon}
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary-900 mb-3 group-hover:text-brand-purple transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  {industry.description}
                </p>

                {/* Explore link */}
                <button className="inline-flex items-center gap-2 text-brand-purple font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Solutions</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-accent/10 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-secondary-600 mb-6">
            Don't see your industry? We work with businesses across all sectors.
          </p>
          <button className="btn-primary px-8 py-4 text-lg font-semibold">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
