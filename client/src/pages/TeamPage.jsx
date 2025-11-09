import PageHero from "../components/common/PageHero";
import TeamCard from "../components/team/TeamCard";

const TeamPage = () => {
  const teamMembers = {
    founder: {
      name: "Dr. Sarah Mitchell",
      designation: "Founder & CEO",
      bio: "With over 15 years of experience in data science and AI, Dr. Mitchell founded the company with a vision to democratize data-driven insights. She holds a PhD in Computer Science from MIT and has led numerous groundbreaking projects in machine learning.",
      expertise: ["Data Science", "AI Strategy", "Leadership"],
    },
    coFounders: [
      {
        name: "Michael Chen",
        designation: "Co-Founder & CTO",
        bio: "Michael brings 12+ years of experience in building scalable ML infrastructure. Previously led engineering teams at top tech companies, specializing in distributed systems and cloud architecture.",
        expertise: ["Machine Learning", "Cloud Architecture", "System Design"],
      },
      {
        name: "Emily Rodriguez",
        designation: "Co-Founder & Chief Data Officer",
        bio: "Emily is a renowned data strategist with expertise in turning complex data into actionable business insights. She has helped Fortune 500 companies optimize their data operations and analytics workflows.",
        expertise: ["Data Strategy", "Business Intelligence", "Analytics"],
      },
    ],
    mentor: {
      name: "Prof. James Anderson",
      designation: "Chief Mentor & Advisor",
      bio: "Professor Anderson is a distinguished academic and industry expert with 25+ years of experience in artificial intelligence research. He advises on strategic direction and innovation, bringing deep technical expertise and industry connections.",
      expertise: ["AI Research", "Strategic Planning", "Innovation"],
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Meet Our Team"
        subtitle="Passionate experts driving innovation in data science and AI"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
      />

      {/* Main Content */}
      <div id="page-content" className="bg-white">
        {/* About Our Team Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                About Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                A Team of <span className="gradient-text">Visionaries</span>
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Our leadership team combines decades of experience in data
                science, machine learning, and business strategy. Together, they
                guide our mission to deliver transformative solutions that
                empower organizations worldwide.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
              {[
                {
                  id: "members",
                  number: "50+",
                  label: "Team Members",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                },
                {
                  id: "experience",
                  number: "15+",
                  label: "Years Experience",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  id: "projects",
                  number: "500+",
                  label: "Projects Delivered",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
                {
                  id: "satisfaction",
                  number: "98%",
                  label: "Client Satisfaction",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                },
              ].map((stat, index) => (
                <div
                  key={stat.id}
                  className="relative bg-gradient-to-br from-white via-primary-50/30 to-white rounded-2xl p-6 sm:p-8 text-center border-2 border-brand-purple/10 hover:border-brand-purple/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-purple/10 to-brand-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                  {/* Icon */}
                  <div className="relative z-10 mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6"
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
                  </div>

                  {/* Number */}
                  <p className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </p>

                  {/* Label */}
                  <p className="relative z-10 text-xs sm:text-sm text-secondary-700 font-semibold leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-purple/10 to-brand-accent/10 text-brand-purple font-bold text-sm rounded-full border-2 border-brand-purple/20 mb-6 shadow-md">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clipRule="evenodd"
                  />
                </svg>
                Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Our <span className="gradient-text">Founder</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-purple via-brand-medium to-brand-accent rounded-full mx-auto" />
            </div>

            <div className="max-w-4xl mx-auto">
              <TeamCard member={teamMembers.founder} isFounder={true} />
            </div>
          </div>
        </section>

        {/* Co-Founders Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Co-<span className="gradient-text">Founders</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-purple via-brand-medium to-brand-accent rounded-full mx-auto mb-6" />
              <p className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                The visionary leaders who bring diverse expertise and drive our
                company forward with passion and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {teamMembers.coFounders.map((coFounder) => (
                <TeamCard key={coFounder.name} member={coFounder} />
              ))}
            </div>
          </div>
        </section>

        {/* Mentor Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-purple/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-brand-accent/5 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-purple/10 to-brand-accent/10 text-brand-purple font-bold text-sm rounded-full border-2 border-brand-purple/20 mb-6 shadow-md">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Advisor
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Our <span className="gradient-text">Mentor</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-purple via-brand-medium to-brand-accent rounded-full mx-auto mb-6" />
              <p className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Guided by wisdom and experience from distinguished industry
                leaders.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <TeamCard member={teamMembers.mentor} />
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
                  Join Our Team
                </h2>
                <p className="text-lg md:text-xl text-brand-glow mb-8 max-w-2xl mx-auto">
                  Be part of a team that's shaping the future of data science
                  and AI.
                </p>
                <a
                  href="/company/careers"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>View Open Positions</span>
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

export default TeamPage;
