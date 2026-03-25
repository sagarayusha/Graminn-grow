import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CloudRain, TrendingUp, Users, Sprout, Bell, MessageSquare, ShoppingCart, Network, Lightbulb, Activity, Globe } from 'lucide-react';

export default function Home() {
  const features = [
    { icon: CloudRain, title: "Weather & Advisory", desc: "Precise weather predictions and personalized crop recommendations powered by AI." },
    { icon: TrendingUp, title: "Market Prices", desc: "Instant access to live market rates, price trends, and demand forecasts." },
    { icon: Users, title: "Expert Community", desc: "Join a thriving community of progressive farmers and experts." },
    { icon: Sprout, title: "Optimal Seed Selection", desc: "Seed selection based on your soil information and location." },
    { icon: Bell, title: "Actionable Notifications", desc: "Critical updates for farming automation and saving costs (subsidies, irrigation, etc)." },
    { icon: MessageSquare, title: "Expert Consultations", desc: "Consultations with certified agri-experts to solve your problems in a single click." },
    { icon: ShoppingCart, title: "Order Farm Needs", desc: "Order from a vast collection of credible agriculture products delivered to you." },
    { icon: Network, title: "Local Farming Groups", desc: "Group farming secured on blockchain for security, transparency, and trust." },
  ];

  return (
    <div className="min-h-screen bg-bgBlack bg-glow-gradient text-gray-200 font-sans pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neonGreen/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          AI-Powered Smart Farming <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-emerald-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
            for the Future.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
        >
          Graminn Grow combines farming wisdom with modern technology. 
          Leverage AI and IoT to increase crop yield and save water.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link to="/login" className="bg-neonGreen hover:bg-green-500 text-black font-bold px-8 py-4 rounded-full transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]">
            Get Started
          </Link>
          <Link to="/technology" className="glass-panel px-8 py-4 rounded-full text-white font-medium hover:bg-white/5 transition-colors border border-white/10">
            Explore Technology
          </Link>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Discover the powerful tools Graminn Grow offers for modern farming.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 hover:-translate-y-2 transition-transform duration-300 group border-white/5 hover:border-neonGreen/30"
            >
              <div className="w-12 h-12 rounded-lg bg-neonGreen/10 flex items-center justify-center mb-4 group-hover:bg-neonGreen/20 transition-colors shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                <feat.icon className="text-neonGreen w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neonGreen transition-colors">{feat.title}</h3>
              <p className="text-sm text-gray-400">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Smart Decisions Section */}
      <section className="bg-black/50 py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Smart Decisions for Better Farming</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Graminn Grow combines farming wisdom with modern tech to provide AI recommendations based on your soil and location.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Access weather forecasts, market prices, and expert advice instantly. Join thousands of farmers improving their yields.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Lightbulb, text: "Personalized AI crop recommendations" },
                  { icon: Activity, text: "Real-time market price trends" },
                  { icon: Globe, text: "Government scheme updates and alerts" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-neonGreen/20 p-2 rounded-full">
                      <item.icon className="w-5 h-5 text-neonGreen" />
                    </div>
                    <span className="text-gray-200">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-neonGreen/20 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="glass-panel p-8 relative z-10 border-neonGreen/30 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-white font-semibold">Smart Farming Insights</h4>
                    <p className="text-sm text-gray-400">Data-driven decisions</p>
                  </div>
                  <Activity className="text-neonGreen w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">Productivity Increase</span>
                      <span className="text-neonGreen text-sm font-bold">+34%</span>
                    </div>
                    <div className="w-full bg-darkGreen rounded-full h-2">
                      <div className="bg-neonGreen h-2 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">Water Usage Reduced</span>
                      <span className="text-blue-400 text-sm font-bold">-42%</span>
                    </div>
                    <div className="w-full bg-darkGreen rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full w-[60%]"></div>
                    </div>
                  </div>
                  <div className="bg-darkGreenAlt/30 p-4 rounded-lg border border-neonGreen/20">
                    <p className="text-sm text-gray-200 italic">"Graminn Grow's integrated weather and seed selection features completely transformed my harvest."</p>
                    <p className="text-xs text-neonGreen mt-2">- Verified Farmer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-7xl mx-auto px-6 py-20 mb-10 glass-panel relative overflow-hidden rounded-3xl mx-4 md:mx-auto">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="relative z-10 md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Opportunity: Transforming a Foundational Industry</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The global agriculture sector, while essential, remains significantly underserved by modern technology, leading to inefficiencies, waste, and limited profitability for stakeholders.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Graminn Grow addresses this gap by leveraging AI and data analytics to create a transparent, efficient ecosystem, empowering farmers and businesses with the tools they need.
          </p>
        </div>
      </section>
    </div>
  );
}