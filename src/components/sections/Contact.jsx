import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ReviewOnScroll } from "../ReviewOnScroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const emailJsConfig = {
    serviceId: import.meta.env.VITE_SERVICE_ID,
    templateId: import.meta.env.VITE_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_PUBLIC_KEY,
  };

  useEffect(() => {
    emailjs.init(emailJsConfig.publicKey);
  }, [emailJsConfig.publicKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      emailJsConfig.serviceId,
      emailJsConfig.templateId,
      e.target
    )
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch(() => {
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-black">
      <ReviewOnScroll>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Contact
        </h2>

        <p className="text-gray-300 text-center mb-16 max-w-2xl text-lg">
          I'm open to new opportunities, interesting projects, and collaborations. If you'd like to talk about my work or a role, feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-20">

          {/* Left: Form */}
          <div className="md:w-[550px] w-full">
            <form className="space-y-7" onSubmit={handleSubmit}>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  placeholder="Your name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white text-base focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  placeholder="your@email.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white text-base focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  rows={6}
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  placeholder="Your message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white text-base focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-colors resize-none"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-4 rounded-lg text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-4 rounded-lg text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-4 px-8 rounded-lg font-medium transition-colors hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-base"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>

          {/* Right: Contact/Social Links */}
          <div className="md:w-1/2 w-full text-white flex flex-col justify-center">
            <div className="border-t border-white/10 pt-8 mb-8">
              <h3 className="text-2xl font-semibold mb-8">Connect</h3>

              <div className="space-y-5">

                {/* Email */}
                <a
                  href="mailto:ayekudaniel@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <div className="text-base font-medium">Email</div>
                    <div className="text-sm text-gray-400">ayekudaniel@gmail.com</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/DanielBrownsky"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <FaGithub className="text-lg" />
                  </div>
                  <div>
                    <div className="text-base font-medium">GitHub</div>
                    <div className="text-sm text-gray-400">github.com/DanielBrownsky</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/daniel-ayeku-b5a65840a"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <FaLinkedin className="text-lg" />
                  </div>
                  <div>
                    <div className="text-base font-medium">LinkedIn</div>
                    <div className="text-sm text-gray-400">linkedin.com/in/daniel-ayeku-b5a65840a</div>
                  </div>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/@AyekuDaniel"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <FaTwitter className="text-lg" />
                  </div>
                  <div>
                    <div className="text-base font-medium">Twitter</div>
                    <div className="text-sm text-gray-400">@AyekuDaniel</div>
                  </div>
                </a>

              </div>
            </div>
          </div>

        </div>
      </ReviewOnScroll>
    </section>
  );
};
