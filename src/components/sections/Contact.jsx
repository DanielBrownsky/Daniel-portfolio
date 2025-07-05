import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ReviewOnScroll } from "../ReviewOnScroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const emailJsConfig = {
    serviceId: import.meta.env.VITE_SERVICE_ID,
    templateId: import.meta.env.VITE_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_PUBLIC_KEY,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      emailJsConfig.serviceId,
      emailJsConfig.templateId,
      e.target,
      emailJsConfig.publicKey
    )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-black">
      <ReviewOnScroll>
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get in Touch
        </h2>
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl mx-auto gap-12">
          {/* Left: Social Info */}
          <div className="md:w-1/2 w-full text-white space-y-6">
            <h3 className="text-2xl font-bold">Every idea deserves to shine.</h3>
            <p className="text-gray-300">
              
              If it’s in your heart, let’s shape it into something real — with purpose, passion, and clean code.


            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              <a
                href="mailto:ayekudaniel@gmail.com"
                className="bg-white/5 border border-white/10 rounded p-4 flex flex-col items-start gap-1 hover:border-blue-500 transition overflow-hidden"
                
              >
                <div className="flex items-center gap-2 text-white">
                  <FaEnvelope /> <span className="text-sm font-medium">Email</span>
                </div>
                <span className="text-xs text-gray-300 break-words w-full">ayekudaniel@gmail.com</span>
              </a>
              <a
                href="https://github.com/DanielBrownsky"
                className="bg-white/5 border border-white/10 rounded p-4 flex flex-col items-start gap-1 hover:border-blue-500 transition overflow-hidden"
                target="_blank" rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2 text-white">
                  <FaGithub /> <span className="text-sm font-medium">GitHub</span>
                </div>
                <span className="text-xs text-gray-300 break-words w-full">github.com/DanielBrownsky</span>
              </a>
              
              <a
                href="https://twitter.com/@AyekuDaniel"
                className="bg-white/5 border border-white/10 rounded p-4 flex flex-col items-start gap-1 hover:border-blue-500 transition overflow-hidden"
                target="_blank" rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2 text-white">
                  <FaTwitter /> <span className="text-sm font-medium">Twitter</span>
                </div>
                <span className="text-xs text-gray-300 break-words w-full">twitter.com/@AyekuDaniel</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:w-1/2 w-full md:mt-14">
            <form className="space-y-6 " onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                placeholder="Email..."
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
              <textarea
                rows={5}
                id="message"
                name="message"
                required
                value={formData.message}
                placeholder="Your Message..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};
