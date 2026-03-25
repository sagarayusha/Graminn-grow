import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Leaf, ShieldAlert, Plane, MessageSquare } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      id: "irrigation",
      title: "Smart Irrigation System",
      icon: Droplets,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30",
      desc: "Stop wasting water. Our IoT sensors monitor soil moisture and temperature in real-time, automatically triggering irrigation only when the crop actually needs it, saving up to 40% water.",
      features: ["Automated ON/OFF switching", "Weather-forecast integration", "Moisture depth analysis"]
    },
    {
      id: "disease",
      title: "Crop Disease Detection using AI",
      icon: ShieldAlert,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/30",
      desc: "Catch diseases before they spread. Upload a photo from your smartphone, and our Computer Vision AI will instantly identify the disease and recommend exact treatment protocols.",
      features: ["95%+ Accuracy rate", "Instant treatment suggestions", "Pest identification"]
    },
    {
      id: "expert",
      title: "Expert Consultation",
      icon: MessageSquare,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30",
      desc: "Connect directly with certified agricultural experts. Get personalized advice on crop health, market trends, and pest management right from your dashboard.",
      features: ["Real-time Chat UI", "Certified Agronomists", "Photo sharing for analysis"]
    },
    {
      id: "soil",
      title: "Soil Health Monitoring",
      icon: Leaf,
      color: "text-neonGreen",
      bgColor: "bg-neonGreen/10",
      borderColor: "border-neonGreen/30",
      desc: "Know exactly what your soil lacks. Continuous monitoring of Nitrogen, Phosphorus, Potassium (NPK) levels alongside pH balance ensures you only apply the fertilizers you need.",
      features: ["Live NPK readings", "Custom fertilizer mix suggestions", "pH balance alerts"]
    },
    {
      id: "drone",
      title: "Drone-based Crop Monitoring",
      icon: Plane,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30",
      desc: "For large-scale farms, integrate drone imagery to get a bird's-eye view of crop health using NDVI (Normalized Difference Vegetation Index) scanning to spot stressed plants early.",
      features: ["NDVI visual mapping", "Acreage yield estimation", "Topographical analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-bgBlack bg-glow-gradient text-gray-200 font-sans pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Comprehensive <span className="text-neonGreen">Farming Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Tackle the hardest challenges in agriculture with our suite of targeted, technology-driven solutions designed specifically for modern farmers.
          </motion.p>
        </div>

        <div className="space-y-12">
          {solutions.map((sol, idx) => (
            <motion.div 
              key={sol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-panel p-8 md:p-10 border ${sol.borderColor} relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 ${sol.bgColor} rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700 pointer-events-none`}></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className={`p-4 rounded-2xl ${sol.bgColor} border ${sol.borderColor} shrink-0`}>
                  <sol.icon className={`w-12 h-12 ${sol.color}`} />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{sol.title}</h2>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{sol.desc}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {sol.features.map((feature, i) => (
                      <span key={i} className={`px-4 py-2 rounded-full text-sm bg-black/40 border ${sol.borderColor} ${sol.color}`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}