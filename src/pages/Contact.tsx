import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-bgBlack bg-glow-gradient text-gray-200 font-sans pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Get in <span className="text-neonGreen">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Whether you're a farmer looking to upgrade your farm, a researcher, or a potential partner, we'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass-panel p-6 flex items-center gap-4 hover:border-neonGreen/30 transition-colors">
              <div className="w-12 h-12 bg-neonGreen/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-neonGreen" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Email Us</h3>
                <p className="text-gray-400 text-sm">hello@graminngrow.com</p>
              </div>
            </div>
            
            <div className="glass-panel p-6 flex items-center gap-4 hover:border-neonGreen/30 transition-colors">
              <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Call Us</h3>
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4 hover:border-neonGreen/30 transition-colors">
              <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Visit Us</h3>
                <p className="text-gray-400 text-sm">AgriTech Hub, Bangalore, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass-panel p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-neonGreen/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitted ? (
              <div className="h-64 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-neonGreen/20 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-neonGreen" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-neonGreen/50 focus:ring-1 focus:ring-neonGreen/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-neonGreen/50 focus:ring-1 focus:ring-neonGreen/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">I am a...</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-neonGreen/50 focus:ring-1 focus:ring-neonGreen/50 transition-all appearance-none">
                    <option value="farmer">Farmer</option>
                    <option value="researcher">Researcher</option>
                    <option value="investor">Investor / Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-neonGreen/50 focus:ring-1 focus:ring-neonGreen/50 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="bg-neonGreen hover:bg-green-500 text-black font-bold px-8 py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}