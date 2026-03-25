import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Droplets, ThermometerSun, AlertTriangle, CloudRain, TrendingUp, Cpu, MessageSquare, X, Send } from 'lucide-react';
import Plant3D from '../Plant3D';

function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bgBlack bg-glow-gradient text-gray-200 font-sans p-4 md:p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-10 glass-panel px-6 py-4">
        <div className="flex items-center gap-3">
          <Leaf className="w-8 h-8 text-neonGreen drop-shadow-[0_0_8px_rgba(34,197,94,1)]" />
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
            GRAMINN<span className="text-neonGreen">GROW</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-neonGreen animate-pulse"></span>
            System Online
          </div>
          <button 
            onClick={() => setIsChatOpen(true)}
            className="glass-panel px-4 py-2 hover:bg-neonGreen/10 transition-colors border-neonGreen/40 flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-neonGreen" />
            <span className="hidden sm:inline">Ask Expert</span>
          </button>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Left Column: AI Disease Detection & Recommendations */}
        <div className="space-y-6 lg:space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neonGreen/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-neonGreen/20 transition-all"></div>
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-neonGreen w-6 h-6" />
              <h2 className="text-xl font-semibold text-white">AI Disease Detection</h2>
            </div>
            <div className="border-2 border-dashed border-darkGreenAlt hover:border-neonGreen/50 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors cursor-pointer bg-black/20">
              <Leaf className="w-12 h-12 text-gray-500 mb-3" />
              <p className="text-gray-400 text-sm mb-2">Upload crop image for analysis</p>
              <button className="bg-darkGreenAlt hover:bg-darkGreen border border-neonGreen/50 text-white px-4 py-2 rounded-lg text-sm transition-all shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                Select Image
              </button>
            </div>
            
            <div className="mt-4">
              <Plant3D />
            </div>

            {/* Mock Result */}
            <div className="mt-4 bg-black/40 p-4 rounded-lg border border-red-500/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-400 font-medium flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Leaf Blight
                </span>
                <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">94% Match</span>
              </div>
              <p className="text-xs text-gray-400">Treatment: Apply Copper Fungicide immediately. Reduce watering.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="text-neonGreen w-5 h-5" /> Market Insights
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-black/30 p-3 rounded-lg border border-white/5">
                <div>
                  <p className="text-white font-medium">Wheat</p>
                  <p className="text-xs text-gray-400">₹2,200 / Quintal</p>
                </div>
                <div className="text-neonGreen flex items-center text-sm">
                  +4.2% <TrendingUp className="w-3 h-3 ml-1" />
                </div>
              </div>
              <div className="flex justify-between items-center bg-black/30 p-3 rounded-lg border border-white/5">
                <div>
                  <p className="text-white font-medium">Rice</p>
                  <p className="text-xs text-gray-400">₹3,100 / Quintal</p>
                </div>
                <div className="text-neonGreen flex items-center text-sm">
                  +1.5% <TrendingUp className="w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Column: Smart Irrigation & Soil Data */}
        <div className="space-y-6 lg:space-y-8 lg:col-span-2">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Soil Moisture', value: '42%', icon: Droplets, color: 'text-blue-400' },
              { label: 'Temperature', value: '28°C', icon: ThermometerSun, color: 'text-yellow-400' },
              { label: 'Nitrogen (N)', value: '65', icon: Leaf, color: 'text-neonGreen' },
              { label: 'Weather', value: 'Clear', icon: CloudRain, color: 'text-blue-300' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="glass-panel p-4 flex flex-col items-center justify-center text-center group hover:border-neonGreen/40 transition-colors"
              >
                <stat.icon className={`w-8 h-8 mb-2 ${stat.color} group-hover:scale-110 transition-transform`} />
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-xl font-bold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-6 relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neonGreen/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Smart Irrigation</h2>
                <p className="text-sm text-gray-400">Automated moisture control system</p>
              </div>
              <button className="flex items-center gap-2 bg-neonGreen/20 text-neonGreen border border-neonGreen/50 px-4 py-2 rounded-full font-semibold shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:bg-neonGreen/30 transition-all">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonGreen opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-neonGreen"></span>
                </span>
                SYSTEM ACTIVE
              </button>
            </div>
            
            <div className="bg-black/40 rounded-xl p-6 border border-white/5 flex flex-col md:flex-row items-center gap-8">
              {/* Fake 3D Visualization Area */}
              <div className="w-full md:w-1/2 aspect-square max-h-64 rounded-full border-4 border-darkGreen relative flex items-center justify-center shadow-[inset_0_0_50px_rgba(34,197,94,0.1)]">
                <div className="absolute inset-2 border-2 border-dashed border-neonGreen/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-8 border border-blue-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                <div className="text-center z-10">
                  <div className="text-4xl font-bold text-white mb-2">42<span className="text-neonGreen">%</span></div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Moisture Level</div>
                </div>
                {/* Water level indicator */}
                <div className="absolute bottom-0 w-full h-[42%] bg-blue-500/10 rounded-b-full overflow-hidden border-t border-blue-400/30">
                  <div className="w-[200%] h-full bg-gradient-to-t from-blue-600/20 to-transparent -ml-[50%] animate-[pulse_4s_ease-in-out_infinite]"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Next Scheduled Watering</span>
                    <span className="text-neonGreen">In 2h 15m</span>
                  </div>
                  <div className="w-full bg-darkGreen rounded-full h-2">
                    <div className="bg-neonGreen h-2 rounded-full w-[70%] shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">AI Recommendations</h3>
                  <div className="bg-darkGreenAlt/50 p-3 rounded-lg border-l-4 border-neonGreen text-sm">
                    Based on current NPK levels, apply <strong>Urea</strong> tomorrow morning.
                  </div>
                  <div className="bg-darkGreenAlt/50 p-3 rounded-lg border-l-4 border-blue-400 text-sm">
                    Rain predicted in 48 hours. Irrigation schedule adjusted to save water.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Alerts */}
            <div className="glass-panel p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="text-yellow-400 w-5 h-5" /> Alerts & Notifications
              </h2>
              <div className="space-y-3">
                <div className="bg-red-500/10 border-l-4 border-red-500 p-3 rounded-r-lg flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-medium text-white">High Temperature Warning</h4>
                    <p className="text-xs text-gray-400">Soil moisture evaporating quickly. Increase watering frequency.</p>
                  </div>
                </div>
                <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-3 rounded-r-lg flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Fertilizer Due</h4>
                    <p className="text-xs text-gray-400">Scheduled NPK boost is due in 2 days.</p>
                  </div>
                </div>
                <div className="bg-neonGreen/10 border-l-4 border-neonGreen p-3 rounded-r-lg flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-neonGreen flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-medium text-white">System Optimal</h4>
                    <p className="text-xs text-gray-400">All sensors reporting normal values.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather / Yield Prediction */}
            <div className="glass-panel p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <CloudRain className="text-blue-400 w-5 h-5" /> AI Yield Prediction
              </h2>
              <div className="flex flex-col items-center justify-center h-full pb-8">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-blue-400 drop-shadow-lg">
                  850
                </div>
                <p className="text-sm text-gray-400 mt-2">Estimated Yield (kg/Acre)</p>
                
                <div className="w-full mt-6 bg-black/40 rounded-lg p-3 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Confidence</span>
                  <div className="flex-1 mx-3 h-1.5 bg-darkGreen rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 w-[92%]"></div>
                  </div>
                  <span className="text-xs font-medium text-blue-400">92%</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Expert Consultation Chat UI */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-80 md:w-96 glass-panel flex flex-col z-50 overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.2)]"
            style={{ height: '500px' }}
          >
            {/* Chat Header */}
            <div className="bg-darkGreenAlt/80 border-b border-neonGreen/30 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center border border-neonGreen/50">
                    <span className="text-xl">👨‍🔬</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-neonGreen rounded-full border-2 border-darkGreenAlt"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Dr. Sharma</h3>
                  <p className="text-xs text-neonGreen">Agri-Expert Online</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/40">
              <div className="flex justify-start">
                <div className="bg-darkGreen/60 border border-white/10 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                  <p className="text-sm text-gray-200">Namaste! I see your soil moisture is at 42%. How can I help you today?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-neonGreen/20 border border-neonGreen/30 rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                  <p className="text-sm text-white">The AI detected Leaf Blight on my wheat. Should I water it less?</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-darkGreen/60 border border-white/10 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                  <p className="text-sm text-gray-200">Yes, reduce watering immediately. Fungi thrive in moisture. Apply the recommended Copper Fungicide before the rain expected in 48h.</p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-black/60 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-neonGreen/50"
              />
              <button className="w-10 h-10 bg-neonGreen rounded-full flex items-center justify-center hover:bg-green-500 transition-colors shrink-0">
                <Send className="w-4 h-4 text-black ml-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Dashboard;