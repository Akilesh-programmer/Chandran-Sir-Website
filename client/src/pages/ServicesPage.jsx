import PageHero from "../components/common/PageHero";

const ServicesPage = () => {
  const services = [
    {
      id: "sales-analytics",
      title: "Sales Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      description:
        "Drive revenue growth with comprehensive sales analytics. Track performance, identify trends, forecast accurately, and optimize your sales strategies with real-time insights.",
      benefits: [
        "Real-time sales performance dashboards",
        "Sales forecasting and pipeline analysis",
        "Territory and rep performance tracking",
        "Win/loss analysis and deal insights",
        "Commission and incentive optimization",
      ],
    },
    {
      id: "marketing-analytics",
      title: "Marketing Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      ),
      description:
        "Maximize marketing ROI with data-driven insights. Understand campaign effectiveness, customer journeys, and channel performance to optimize your marketing spend.",
      benefits: [
        "Campaign performance and ROI measurement",
        "Customer journey mapping and attribution",
        "Channel effectiveness analysis",
        "Marketing mix modeling and optimization",
        "Brand sentiment and social media analytics",
      ],
    },
    {
      id: "hr-analytics",
      title: "HR Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      description:
        "Transform talent management with HR analytics. Improve recruitment, retention, engagement, and workforce planning through intelligent data insights.",
      benefits: [
        "Employee turnover prediction and retention",
        "Recruitment effectiveness and time-to-hire",
        "Employee engagement and satisfaction analysis",
        "Performance management and skill gap analysis",
        "Workforce planning and succession analytics",
      ],
    },
    {
      id: "customer-analytics",
      title: "Customer Analytics",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      ),
      description:
        "Deepen customer understanding and drive loyalty. Analyze behavior patterns, preferences, and lifetime value to create personalized experiences.",
      benefits: [
        "Customer segmentation and profiling",
        "Customer lifetime value prediction",
        "Churn prediction and prevention",
        "Personalization and recommendation engines",
        "Customer satisfaction and NPS analysis",
      ],
    },
    {
      id: "supply-chain",
      title: "Supply Chain & Inventory Management",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      ),
      description:
        "Optimize supply chain operations and inventory levels. Reduce costs, improve efficiency, and ensure product availability with predictive analytics.",
      benefits: [
        "Demand forecasting and inventory optimization",
        "Supplier performance and risk analysis",
        "Logistics and transportation optimization",
        "Warehouse efficiency and layout optimization",
        "Supply chain visibility and tracking",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive analytics solutions to transform your business"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80"
      />

      {/* Main Content */}
      <div id="page-content" className="bg-white">
        {/* Introduction Section */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                End-to-End{" "}
                <span className="gradient-text">Analytics Services</span>
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                From data collection to actionable insights, we provide
                comprehensive analytics services that empower your business to
                make informed decisions and drive measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
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
                      {service.icon}
                    </svg>
                    Service
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900">
                    <span className="gradient-text">{service.title}</span>
                  </h3>
                  <p className="text-lg text-secondary-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 pt-4">
                    <p className="text-sm font-bold text-secondary-700 uppercase tracking-wider">
                      Key Benefits
                    </p>
                    {service.benefits.map((benefit, idx) => (
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
                          {benefit}
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
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {service.icon}
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
                  Let's Build Your Analytics Solution
                </h2>
                <p className="text-lg md:text-xl text-brand-glow mb-8 max-w-2xl mx-auto">
                  Partner with us to unlock the full potential of your data and
                  drive transformative business outcomes.
                </p>
                <a
                  href="/company/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Start Your Journey</span>
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

export default ServicesPage;
