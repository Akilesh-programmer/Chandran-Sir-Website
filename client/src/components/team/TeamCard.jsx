import PropTypes from "prop-types";

const TeamCard = ({ member, isFounder = false }) => (
  <div
    className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group ${
      isFounder ? "lg:col-span-2" : ""
    }`}
  >
    <div
      className={`grid ${isFounder ? "lg:grid-cols-2" : "grid-cols-1"} gap-0`}
    >
      {/* Photo Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-purple/10 to-brand-accent/10">
        <div className="aspect-square relative">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`p-6 sm:p-8 ${
          isFounder ? "lg:p-10" : ""
        } flex flex-col justify-center`}
      >
        <div className="mb-4">
          <h3
            className={`font-display font-bold text-secondary-900 mb-2 ${
              isFounder
                ? "text-2xl sm:text-3xl lg:text-4xl"
                : "text-xl sm:text-2xl"
            }`}
          >
            {member.name}
          </h3>
          <p className="text-brand-purple font-semibold text-base sm:text-lg flex items-center gap-2">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-purple to-brand-accent" />
            {member.designation}
          </p>
        </div>

        <p className="text-secondary-600 leading-relaxed mb-6 text-sm sm:text-base">
          {member.bio}
        </p>

        {/* Expertise Tags */}
        <div>
          <p className="text-xs font-semibold text-secondary-500 uppercase tracking-wider mb-3">
            Expertise
          </p>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-gradient-to-r from-brand-purple/10 to-brand-accent/10 text-brand-purple text-xs font-medium rounded-full border border-brand-purple/20 hover:border-brand-purple/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex gap-3">
          <button
            className="w-10 h-10 bg-gradient-to-br from-brand-purple/10 to-brand-accent/10 rounded-lg flex items-center justify-center text-brand-purple hover:from-brand-purple hover:to-brand-accent hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
          <button
            className="w-10 h-10 bg-gradient-to-br from-brand-purple/10 to-brand-accent/10 rounded-lg flex items-center justify-center text-brand-purple hover:from-brand-purple hover:to-brand-accent hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

TeamCard.propTypes = {
  member: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    expertise: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isFounder: PropTypes.bool,
};

export default TeamCard;
