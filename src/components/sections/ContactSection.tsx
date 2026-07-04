import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MagneticButton } from "../MagneticButton";

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:shahidtamboli512@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-sm font-display font-bold tracking-widest text-primary uppercase mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white max-w-3xl mx-auto leading-tight">
              Let's build something <span className="text-gradient">intelligent</span> together.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Contact Details */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div className="space-y-8 mb-12 lg:mb-0">
                <a href="mailto:shahidtamboli512@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Email</p>
                    <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">shahidtamboli512@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+919359841640" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-accent1 group-hover:bg-accent1/20 transition-colors shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Call</p>
                    <p className="text-lg font-medium text-white group-hover:text-accent1 transition-colors">+91 93598 41640</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-accent2 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Location</p>
                    <p className="text-lg font-medium text-white">Sangli, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: FaGithub, href: "https://github.com/shahidtamboli-2505" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shahid-tamboli-456403311/" },
                  { icon: Globe, href: "https://leetcode.com/u/shahidtamboli19/" }, // Used Globe for LeetCode
                  { icon: FaInstagram, href: "https://www.instagram.com/sb._.champ" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all magnetic-hover"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Email Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-muted">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background-light border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background-light border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-background-light border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="mt-4">
                  <MagneticButton type="submit" variant="primary" className="w-full md:w-auto min-w-[200px]">
                    Send Message <Send size={18} />
                  </MagneticButton>
                </div>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
