const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights with our comprehensive analytics solutions and visualization tools.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
    {
      id: 2,
      title: "Machine Learning",
      description:
        "Deploy intelligent ML models that learn, adapt, and drive business growth through predictive analytics.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
    },
    {
      id: 3,
      title: "AI Solutions",
      description:
        "Leverage cutting-edge artificial intelligence to automate processes and enhance decision-making capabilities.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      id: 4,
      title: "Data Engineering",
      description:
        "Build robust data pipelines and infrastructure for seamless data flow and processing at scale.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      ),
    },
    {
      id: 5,
      title: "Business Intelligence",
      description:
        "Create interactive dashboards and reports that provide real-time insights for strategic decision-making.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      ),
    },
    {
      id: 6,
      title: "Consulting & Strategy",
      description:
        "Expert guidance on data strategy, technology selection, and implementation roadmaps for success.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 leading-tight mb-4">
            Comprehensive Data <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 leading-relaxed">
            End-to-end services designed to help you harness the power of your
            data and drive meaningful business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-8 border border-secondary-100 shadow-sm hover:shadow-2xl hover:border-brand-purple/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-display font-bold text-secondary-900 mb-3 group-hover:text-brand-purple transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="relative mt-6 flex items-center text-brand-purple font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">Learn More</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
