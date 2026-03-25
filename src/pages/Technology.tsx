import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Satellite, CloudRain, Database, ArrowRight } from 'lucide-react';

export default function Technology() {
  return (
    <div className="min-h-screen bg-bgBlack bg-glow-gradient text-gray-200 font-sans pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Powered by <span className="text-neonGreen">Advanced AI & IoT</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Graminn Grow utilizes a cutting-edge technology stack combining artificial intelligence, 
            IoT sensor networks, satellite imagery, and real-time weather data.
          </motion.p>
        </div>

        {/* Data Flow Diagram Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 md:p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-neonGreen/10 rounded-full blur-[80px] pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-white mb-10 text-center">System Architecture & Data Flow</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative z-10">
            {/* Step 1: Data Collection */}
            <div className="flex flex-col items-center w-full md:w-1/4">
              <div className="w-20 h-20 rounded-full bg-darkGreenAlt border-2 border-neonGreen flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <Satellite className="w-10 h-10 text-neonGreen" />
              </div>
              <h3 className="text-white font-semibold text-center mb-2">Data Collection</h3>
              <p className="text-xs text-gray-400 text-center">IoT Sensors, Weather APIs, Satellite NDVI, Drone Imagery</p>
            </div>

            <ArrowRight className="w-8 h-8 text-neonGreen/50 hidden md:block" />
            <ArrowRight className="w-8 h-8 text-neonGreen/50 rotate-90 md:hidden" />

            {/* Step 2: Processing */}
            <div className="flex flex-col items-center w-full md:w-1/4">
              <div className="w-20 h-20 rounded-full bg-darkGreenAlt border-2 border-blue-400 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Database className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold text-center mb-2">Cloud Processing</h3>
              <p className="text-xs text-gray-400 text-center">Data cleaning, aggregation in Supabase/Firebase, Time-Series mapping</p>
            </div>

            <ArrowRight className="w-8 h-8 text-neonGreen/50 hidden md:block" />
            <ArrowRight className="w-8 h-8 text-neonGreen/50 rotate-90 md:hidden" />

            {/* Step 3: AI Analysis */}
            <div className="flex flex-col items-center w-full md:w-1/4">
              <div className="w-20 h-20 rounded-full bg-darkGreenAlt border-2 border-purple-400 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Cpu className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold text-center mb-2">AI Analysis</h3>
              <p className="text-xs text-gray-400 text-center">TensorFlow/OpenCV models analyze diseases, predict yield, compute needs</p>
            </div>

            <ArrowRight className="w-8 h-8 text-neonGreen/50 hidden md:block" />
            <ArrowRight className="w-8 h-8 text-neonGreen/50 rotate-90 md:hidden" />

            {/* Step 4: Action */}
            <div className="flex flex-col items-center w-full md:w-1/4">
              <div className="w-20 h-20 rounded-full bg-neonGreen/20 border-2 border-neonGreen flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(34,197,94,0.5)]">
                <CloudRain className="w-10 h-10 text-neonGreen" />
              </div>
              <h3 className="text-white font-semibold text-center mb-2">Actionable Insights</h3>
              <p className="text-xs text-gray-400 text-center">Farmer Dashboard alerts, Smart Irrigation triggers, Market suggestions</p>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Hardware & IoT</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-neonGreen font-semibold">Soil Sensors (NPK, Moisture, Temp)</span>
                <span className="text-gray-400 text-sm">ESP32 microcontrollers push real-time soil data to our cloud infrastructure via MQTT protocols.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-neonGreen font-semibold">Automated Irrigation Valves</span>
                <span className="text-gray-400 text-sm">Smart relays connected to the system can automatically trigger water flow based on AI recommendations.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Software & AI</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-blue-400 font-semibold">Computer Vision (Disease Detection)</span>
                <span className="text-gray-400 text-sm">Custom TensorFlow and OpenCV models trained on thousands of crop images to identify blights, pests, and nutrient deficiencies.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-blue-400 font-semibold">Predictive Analytics</span>
                <span className="text-gray-400 text-sm">Machine learning algorithms fuse historical weather data, current soil health, and market trends to predict optimal harvest times.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}