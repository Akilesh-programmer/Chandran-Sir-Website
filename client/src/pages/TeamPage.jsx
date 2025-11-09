import PageHero from "../components/common/PageHero";
import TeamCard from "../components/team/TeamCard";

const TeamPage = () => {
  const teamMembers = {
    founder: {
      name: "Dr. Sarah Mitchell",
      designation: "Founder & CEO",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
      bio: "With over 15 years of experience in data science and AI, Dr. Mitchell founded the company with a vision to democratize data-driven insights. She holds a PhD in Computer Science from MIT and has led numerous groundbreaking projects in machine learning.",
      expertise: ["Data Science", "AI Strategy", "Leadership"],
    },
    coFounders: [
      {
        name: "Michael Chen",
        designation: "Co-Founder & CTO",
        photo:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
        bio: "Michael brings 12+ years of experience in building scalable ML infrastructure. Previously led engineering teams at top tech companies, specializing in distributed systems and cloud architecture.",
        expertise: ["Machine Learning", "Cloud Architecture", "System Design"],
      },
      {
        name: "Emily Rodriguez",
        designation: "Co-Founder & Chief Data Officer",
        photo:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
        bio: "Emily is a renowned data strategist with expertise in turning complex data into actionable business insights. She has helped Fortune 500 companies optimize their data operations and analytics workflows.",
        expertise: ["Data Strategy", "Business Intelligence", "Analytics"],
      },
    ],
    mentor: {
      name: "Prof. James Anderson",
      designation: "Chief Mentor & Advisor",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { id: "members", number: "50+", label: "Team Members" },
                { id: "experience", number: "15+", label: "Years Experience" },
                { id: "projects", number: "500+", label: "Projects Delivered" },
                {
                  id: "satisfaction",
                  number: "98%",
                  label: "Client Satisfaction",
                },
              ].map((stat) => (
                <div
                  key={stat.id}
                  className="bg-gradient-to-br from-brand-purple/5 to-brand-accent/5 rounded-2xl p-6 text-center border border-brand-purple/10 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg"
                >
                  <p className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-secondary-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-primary-50/30 to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple font-semibold text-sm rounded-full border border-brand-purple/20 mb-4">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Our <span className="gradient-text">Founder</span>
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <TeamCard member={teamMembers.founder} isFounder={true} />
            </div>
          </div>
        </section>

        {/* Co-Founders Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Co-<span className="gradient-text">Founders</span>
              </h2>
              <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                The visionary leaders who bring diverse expertise and drive our
                company forward.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {teamMembers.coFounders.map((coFounder) => (
                <TeamCard key={coFounder.name} member={coFounder} />
              ))}
            </div>
          </div>
        </section>

        {/* Mentor Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-primary-50/30 to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Our <span className="gradient-text">Mentor</span>
              </h2>
              <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                Guided by wisdom and experience from industry leaders.
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
