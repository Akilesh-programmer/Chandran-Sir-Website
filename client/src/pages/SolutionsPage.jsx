import PageHero from "../components/common/PageHero";

const SolutionsPage = () => {
  const solutions = [
    {
      id: "kpi",
      title: "Key Performance Indicators",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      description:
        "Monitor and measure what matters most with customized KPI dashboards. Track performance metrics in real-time, identify trends, and make data-driven decisions aligned with your strategic goals.",
      capabilities: [
        "Custom KPI dashboard design and development",
        "Real-time performance monitoring",
        "Automated alerts and notifications",
        "Drill-down analysis and root cause identification",
        "Executive reporting and visualization",
      ],
    },
    {
      id: "customer-segregation",
      title: "Customer Segregation",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      description:
        "Understand your customer base through advanced segmentation. Group customers by behavior, preferences, and value to deliver personalized experiences and targeted marketing.",
      capabilities: [
        "Behavioral and demographic segmentation",
        "RFM (Recency, Frequency, Monetary) analysis",
        "Customer persona development",
        "Lifetime value segmentation",
        "Predictive customer clustering",
      ],
    },
    {
      id: "roi",
      title: "Return On Investment",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      description:
        "Measure and maximize return on investment across all initiatives. Track financial performance, optimize resource allocation, and justify decisions with data-driven ROI analysis.",
      capabilities: [
        "Marketing campaign ROI measurement",
        "Project investment analysis",
        "Resource allocation optimization",
        "Cost-benefit analysis and modeling",
        "Financial performance tracking",
      ],
    },
    {
      id: "competition-analysis",
      title: "Competition Analysis",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      description:
        "Stay ahead of the competition with comprehensive market intelligence. Analyze competitor strategies, market positioning, and industry trends to identify opportunities and threats.",
      capabilities: [
        "Competitor benchmarking and analysis",
        "Market share and positioning analysis",
        "Pricing strategy comparison",
        "SWOT analysis and strategic insights",
        "Industry trend monitoring",
      ],
    },
    {
      id: "forecasting",
      title: "Forecasting",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      ),
      description:
        "Predict future trends with advanced forecasting models. Leverage machine learning and statistical techniques to anticipate demand, plan resources, and prepare for what's ahead.",
      capabilities: [
        "Demand and sales forecasting",
        "Financial projection and budgeting",
        "Inventory and capacity planning",
        "Scenario modeling and what-if analysis",
        "Time series and predictive analytics",
      ],
    },
    {
      id: "analytics-everywhere",
      title: "Analytics Everywhere",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      description:
        "Democratize data across your organization with embedded analytics. Empower every team member with self-service analytics tools and insights integrated into their daily workflows.",
      capabilities: [
        "Self-service analytics platforms",
        "Embedded analytics in applications",
        "Mobile analytics and dashboards",
        "Collaborative analytics tools",
        "Data literacy and training programs",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Analytics Solutions"
        subtitle="Innovative solutions designed to solve your toughest business challenges"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80"
      />

      {/* Main Content */}
      <div id="page-content" className="bg-white">
        {/* Introduction Section */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                Proven Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                Purpose-Built{" "}
                <span className="gradient-text">Analytics Solutions</span>
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Our battle-tested solutions address specific business challenges
                with precision and expertise. Each solution is designed to
                deliver immediate value while supporting long-term strategic
                objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-white via-primary-50/30 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-brand-purple/40 overflow-hidden scroll-mt-20"
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {solution.icon}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-xs font-bold text-secondary-500 uppercase tracking-wider mb-4">
                        Key Capabilities
                      </p>
                      <ul className="space-y-2">
                        {solution.capabilities.map((capability, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-secondary-700"
                          >
                            <svg
                              className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-brand-purple via-brand-medium to-brand-accent rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
                  Find the Right Solution for You
                </h2>
                <p className="text-lg md:text-xl text-brand-glow mb-8 max-w-2xl mx-auto">
                  Not sure which solution fits your needs? Let's discuss your
                  challenges and find the perfect analytics solution.
                </p>
                <a
                  href="/company/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Speak with an Expert</span>
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

export default SolutionsPage;
