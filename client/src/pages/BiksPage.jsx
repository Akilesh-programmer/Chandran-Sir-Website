import PageHero from "../components/common/PageHero";

const BiksPage = () => {
  const biksProducts = [
    {
      id: "bi",
      title: "BIKS BI",
      subtitle: "Business Intelligence Platform",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      description:
        "A comprehensive business intelligence platform that transforms raw data into actionable insights. Empower your organization with intuitive analytics, interactive visualizations, and powerful reporting capabilities.",
      features: [
        "Interactive data visualization and exploration",
        "Drag-and-drop report builder",
        "Real-time data connectivity",
        "Advanced analytics and calculations",
        "Collaboration and sharing capabilities",
        "Mobile-responsive dashboards",
      ],
      useCases: [
        "Executive performance dashboards",
        "Departmental reporting and KPIs",
        "Operational analytics and monitoring",
        "Financial analysis and planning",
      ],
    },
    {
      id: "dashboard",
      title: "BIKS Dashboard",
      subtitle: "Unified Analytics Dashboard",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      ),
      description:
        "Centralize all your key metrics in one powerful dashboard. Monitor performance across your entire organization with customizable views, real-time updates, and intelligent alerts.",
      features: [
        "Customizable dashboard layouts",
        "Multi-source data integration",
        "Real-time performance monitoring",
        "Automated alerts and notifications",
        "Role-based access control",
        "White-label branding options",
      ],
      useCases: [
        "Company-wide performance tracking",
        "Multi-department visibility",
        "Executive decision support",
        "Operational command centers",
      ],
    },
    {
      id: "personalized",
      title: "Personalized BIKS",
      subtitle: "Tailored Analytics Experience",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
      description:
        "Experience analytics designed just for you. Get personalized insights, recommendations, and views based on your role, preferences, and business needs.",
      features: [
        "AI-powered personalized insights",
        "Role-specific dashboard configurations",
        "Custom metric tracking",
        "Personalized alert preferences",
        "Individual performance tracking",
        "Adaptive learning from user behavior",
      ],
      useCases: [
        "Individual contributor analytics",
        "Manager performance tracking",
        "Sales rep personal dashboards",
        "Custom executive views",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="BIKS Platform"
        subtitle="Business Intelligence & Knowledge System - Your complete analytics ecosystem"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80"
      />

      {/* Main Content */}
      <div id="page-content" className="bg-white">
        {/* Introduction Section */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                Our Platform
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                The Power of{" "}
                <span className="gradient-text">BIKS Platform</span>
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                BIKS (Business Intelligence & Knowledge System) is our flagship
                analytics platform designed to democratize data and empower
                every user with actionable insights. From comprehensive BI tools
                to personalized analytics experiences, BIKS adapts to your
                needs.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  label: "Active Users",
                  value: "10K+",
                  icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                },
                {
                  label: "Dashboards Created",
                  value: "50K+",
                  icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
                },
                {
                  label: "Data Sources",
                  value: "100+",
                  icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
                },
                {
                  label: "Uptime",
                  value: "99.9%",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-6 text-center border-2 border-brand-purple/10 hover:border-brand-purple/40 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={stat.icon}
                      />
                    </svg>
                  </div>
                  <p className="text-3xl font-display font-bold gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-secondary-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BIKS Products Sections */}
        {biksProducts.map((product, index) => (
          <section
            key={product.id}
            id={product.id}
            className={`py-16 md:py-24 scroll-mt-20 ${
              index % 2 === 0
                ? "bg-gradient-to-br from-white via-primary-50/30 to-white"
                : "bg-white"
            }`}
          >
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-brand-purple/10 to-brand-accent/10 text-brand-purple font-bold text-sm rounded-full border-2 border-brand-purple/20 shadow-md mb-6">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {product.icon}
                    </svg>
                    BIKS Product
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-2">
                    <span className="gradient-text">{product.title}</span>
                  </h3>
                  <p className="text-xl text-brand-purple font-semibold mb-6">
                    {product.subtitle}
                  </p>
                  <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-bold text-secondary-700 uppercase tracking-wider mb-4">
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-secondary-700 uppercase tracking-wider mb-4">
                        Use Cases
                      </p>
                      <ul className="space-y-2">
                        {product.useCases.map((useCase, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-secondary-700"
                          >
                            <svg
                              className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                        {product.icon}
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
                  Experience BIKS Platform
                </h2>
                <p className="text-lg md:text-xl text-brand-glow mb-8 max-w-2xl mx-auto">
                  See how BIKS can transform your analytics workflow. Schedule a
                  demo or start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/company/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <span>Request Demo</span>
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
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="/company/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300 border-2 border-white/30"
                  >
                    <span>Start Free Trial</span>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default BiksPage;
