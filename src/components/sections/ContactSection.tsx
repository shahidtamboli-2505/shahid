import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MagneticButton } from "../MagneticButton";
import { Reveal, SectionHeading } from "../Reveal";

const socials = [
  { icon: FaGithub, href: "https://github.com/shahidtamboli-2505", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shahid-tamboli-456403311/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/shahidtamboli19/", label: "LeetCode" },
  { icon: FaInstagram, href: "https://www.instagram.com/sb._.champ", label: "Instagram" },
];

const inputCls = "w-full bg-background/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:shahidtamboli512@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Contact"
            title={<>Let's build something <span className="text-gradient">intelligent.</span></>}
            sub="Open to AI/ML internships, full-time roles and freelance projects. Usually reply within a day."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Reveal className="lg:col-span-5 flex flex-col gap-4">
              {[
                { icon: Mail, label: "Email", value: "shahidtamboli512@gmail.com", href: "mailto:shahidtamboli512@gmail.com", color: "text-primary" },
                { icon: Phone, label: "Phone", value: "+91 93598 41640", href: "tel:+919359841640", color: "text-accent1" },
                { icon: MapPin, label: "Location", value: "Sangli, Maharashtra, India", color: "text-accent2" },
              ].map((c) => {
                const inner = (
                  <>
                    <div className={`w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center ${c.color} shrink-0`}>
                      <c.icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-text-muted">{c.label}</p>
                      <p className="text-white font-medium truncate">{c.value}</p>
                    </div>
                    {c.href && <ArrowUpRight size={16} className="ml-auto text-text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />}
                  </>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="glass-card p-5 flex items-center gap-4 group hover:border-primary/30 magnetic-hover">{inner}</a>
                ) : (
                  <div key={c.label} className="glass-card p-5 flex items-center gap-4">{inner}</div>
                );
              })}

              <div className="flex gap-3 mt-2">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all magnetic-hover">
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={1} className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="glass-card p-7 md:p-10 flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-xs text-text-muted">Name</label>
                    <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputCls} placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-xs text-text-muted">Email</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputCls} placeholder="you@company.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-xs text-text-muted">Message</label>
                  <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className={`${inputCls} resize-none`} placeholder="Tell me about your project or role..." />
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4 mt-2">
                  <p className="text-xs text-text-muted">Opens your email client with the message pre-filled.</p>
                  <MagneticButton type="submit" variant="primary">
                    Send message <Send size={16} />
                  </MagneticButton>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
