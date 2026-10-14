import { ReviewOnScroll } from "../ReviewOnScroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import { socialLinks } from "../../data/socialLinks";
import { site } from "../../data/site";

export const Contact = () => {
  const getIcon = (label) => {
    switch (label) {
      case "Email": return <FaEnvelope className="text-lg" />;
      case "GitHub": return <FaGithub className="text-lg" />;
      case "LinkedIn": return <FaLinkedin className="text-lg" />;
      case "Twitter": return <FaTwitter className="text-lg" />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20 px-4" style={{ backgroundColor: 'var(--color-bg)' }}>
      <ReviewOnScroll>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Contact
        </h2>

        <p className="text-center mb-16 max-w-2xl text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          I'm open to new opportunities, interesting projects, and collaborations. If you'd like to talk about my work or a role, feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-20">

          {/* Left: Contact via Email */}
          <div className="md:w-[550px] w-full">
            <div className="rounded-xl p-8" style={{ border: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-surface)' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Get in Touch
              </h3>

              <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                The best way to reach me is directly via email. I typically respond within 24-48 hours.
              </p>

              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 bg-blue-500 text-white py-4 px-8 rounded-lg font-medium transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-base"
              >
                <FaEnvelope className="text-xl" />
                {site.email}
              </a>
            </div>
          </div>

          {/* Right: Contact/Social Links */}
          <div className="md:w-1/2 w-full flex flex-col justify-center" style={{ color: 'var(--color-text-primary)' }}>
            <div className="pt-8 mb-8" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
              <h3 className="text-2xl font-semibold mb-8">Connect</h3>

              <div className="space-y-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-4 transition-colors group"
                    style={{ color: 'var(--color-text-secondary)' }}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}>
                      {getIcon(link.label)}
                    </div>
                    <div>
                      <div className="text-base font-medium">{link.label}</div>
                      <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{link.display}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </ReviewOnScroll>
    </section>
  );
};
