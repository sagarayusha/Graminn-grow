import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  if (isDashboard) return null; // Dashboard has its own header

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Technology', path: '/technology' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/5 px-6 py-4 rounded-none rounded-b-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <Leaf className="w-8 h-8 text-neonGreen drop-shadow-[0_0_8px_rgba(34,197,94,1)]" />
          <span className="text-xl md:text-2xl font-bold text-white tracking-wider">
            GRAMINN<span className="text-neonGreen">GROW</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path ? 'text-neonGreen drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link to="/dashboard" className="bg-darkGreenAlt hover:bg-darkGreen border border-neonGreen/50 text-white px-4 py-2 rounded-lg text-sm transition-all shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
            Dashboard Preview
          </Link>
        </div>
      </div>
    </nav>
  );
}