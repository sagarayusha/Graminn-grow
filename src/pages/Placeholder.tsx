import React from 'react';

export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-bgBlack bg-glow-gradient flex items-center justify-center pt-20">
      <div className="text-center glass-panel p-12">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-gray-400">This page is under construction for the hackathon demo.</p>
      </div>
    </div>
  );
}