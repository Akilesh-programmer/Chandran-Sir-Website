import { Link } from "react-router-dom";
import { footerData, socialMediaLinks } from "../../constants/footer";

const SocialIcon = ({ icon }) => {
  const iconPaths = {
    facebook: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    twitter: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  };

  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[icon]}
    </svg>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-100">
      <div className="container-custom">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 group mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-accent rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <span className="text-white font-bold text-xl">DS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-display font-bold text-white leading-tight">
                    Data Science
                  </span>
                  <span className="text-sm font-display font-semibold text-brand-accent leading-tight">
                    & ML Solutions
                  </span>
                </div>
              </Link>
              <p className="text-secondary-300 text-sm leading-relaxed mb-6 max-w-xs">
                Transforming data into actionable insights with cutting-edge
                analytics and machine learning solutions.
              </p>
              <div className="flex items-center gap-3">
                {socialMediaLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary-800 hover:bg-brand-purple flex items-center justify-center text-secondary-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
                {footerData.company.title}
              </h3>
              <ul className="space-y-3">
                {footerData.company.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-brand-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
                {footerData.industries.title}
              </h3>
              <ul className="space-y-3">
                {footerData.industries.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-brand-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4 mt-6">
                {footerData.product.title}
              </h3>
              <ul className="space-y-3">
                {footerData.product.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-brand-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
                {footerData.services.title}
              </h3>
              <ul className="space-y-3">
                {footerData.services.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-brand-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
                {footerData.solutions.title}
              </h3>
              <ul className="space-y-3">
                {footerData.solutions.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-brand-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Data Science & ML Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-secondary-400 hover:text-brand-accent transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-secondary-400 hover:text-brand-accent transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
