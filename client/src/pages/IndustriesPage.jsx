import PageHero from "../components/common/PageHero";

const IndustriesPage = () => {
  const industries = [
    {
      id: "retail-fmcg",
      title: "Retail & FMCG",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      description:
        "Transform your retail and FMCG business with advanced analytics. Optimize inventory, understand consumer behavior, enhance supply chain efficiency, and boost sales through data-driven insights.",
      features: [
        "Sales forecasting and demand planning",
        "Customer segmentation and behavior analysis",
        "Inventory optimization and management",
        "Price optimization and promotion analysis",
        "Supply chain visibility and efficiency",
      ],
    },
    {
      id: "hospitality",
      title: "Hospitality",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
      description:
        "Elevate guest experiences and operational excellence in the hospitality industry. Leverage analytics to optimize revenue, enhance service quality, and drive guest satisfaction.",
      features: [
        "Revenue management and dynamic pricing",
        "Guest satisfaction and sentiment analysis",
        "Occupancy forecasting and optimization",
        "Operational efficiency improvements",
        "Marketing campaign effectiveness",
      ],
    },
    {
      id: "healthcare",
      title: "HealthCare",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
      description:
        "Revolutionize healthcare delivery with intelligent analytics. Improve patient outcomes, optimize resource allocation, enhance operational efficiency, and reduce costs through data-driven decision making.",
      features: [
        "Patient care optimization and outcomes analysis",
        "Resource allocation and capacity planning",
        "Operational efficiency and cost reduction",
        "Predictive analytics for patient readmission",
        "Clinical decision support systems",
      ],
    },
    {
      id: "banking",
      title: "Banking",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      description:
        "Empower banking operations with cutting-edge analytics. Enhance risk management, detect fraud, improve customer experience, and drive profitable growth through intelligent data insights.",
      features: [
        "Risk assessment and credit scoring",
        "Fraud detection and prevention",
        "Customer lifetime value analysis",
        "Regulatory compliance and reporting",
        "Investment portfolio optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Industries We Serve"
        subtitle="Delivering tailored analytics solutions across diverse sectors"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80"
      />

      {/* Main Content */}
      <div id="page-content" className="bg-white">
        {/* Introduction Section */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                Industry Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                Sector-Specific{" "}
                <span className="gradient-text">Analytics Solutions</span>
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                We understand that every industry has unique challenges and
                opportunities. Our analytics solutions are tailored to meet the
                specific needs of your sector, delivering actionable insights
                that drive real business impact.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Sections */}
        {industries.map((industry, index) => (
          <section
            key={industry.id}
            id={industry.id}
            className={`py-16 md:py-24 scroll-mt-20 ${
              index % 2 === 0
                ? "bg-gradient-to-br from-white via-primary-50/30 to-white"
                : "bg-white"
            }`}
          >
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""} space-y-6`}
                >
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-brand-purple/10 to-brand-accent/10 text-brand-purple font-bold text-sm rounded-full border-2 border-brand-purple/20 shadow-md">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {industry.icon}
                    </svg>
                    {industry.title}
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900">
                    {industry.title}{" "}
                    <span className="gradient-text">Analytics</span>
                  </h3>
                  <p className="text-lg text-secondary-600 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="space-y-3 pt-4">
                    <p className="text-sm font-bold text-secondary-700 uppercase tracking-wider">
                      Key Capabilities
                    </p>
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-secondary-700 leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-accent/20 rounded-3xl transform rotate-3" />
                    <div className="relative bg-gradient-to-br from-brand-purple/10 to-brand-accent/10 rounded-3xl p-8 md:p-12 border-2 border-brand-purple/20 backdrop-blur-sm">
                      <svg
                        className="w-full h-64 text-brand-purple/30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {industry.icon}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                  Ready to Transform Your Industry?
                </h2>
                <p className="text-lg md:text-xl text-brand-glow mb-8 max-w-2xl mx-auto">
                  Let's discuss how our analytics solutions can drive growth and
                  innovation in your sector.
                </p>
                <a
                  href="/company/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <svg
                    className="w-5 h-5"
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
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndustriesPage;
