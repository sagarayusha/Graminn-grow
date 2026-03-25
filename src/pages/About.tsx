import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Globe, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-bgBlack bg-glow-gradient text-gray-200 font-sans pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About <span className="text-neonGreen">Graminn Grow</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-24 h-1 bg-neonGreen mx-auto rounded-full mb-8 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          ></motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 md:p-12 mb-12 relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-neonGreen/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="text-neonGreen w-6 h-6" /> Our Mission
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At Graminn Grow, our mission is to empower farmers across India by providing accessible, affordable, and highly advanced agricultural technology. 
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            By translating complex data into simple insights, we aim to increase crop yields, reduce resource waste, and improve farming livelihoods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 text-center group hover:border-neonGreen/30 transition-colors"
          >
            <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3">Sustainability First</h3>
            <p className="text-gray-400 text-sm">Reducing water usage and optimizing fertilizer application to protect our soil.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 text-center group hover:border-neonGreen/30 transition-colors"
          >
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3">Community Driven</h3>
            <p className="text-gray-400 text-sm">Building local farming groups where knowledge and resources are shared collectively.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}