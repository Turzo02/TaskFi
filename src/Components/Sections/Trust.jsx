import React from 'react';
import { ShieldCheck, Lock, Globe, Server, Check } from 'lucide-react';

const brands = [
  { name: "Stripe", color: "hover:text-[#635BFF]" },   
  { name: "Coinbase", color: "hover:text-[#0052FF]" }, 
  { name: "PayPal", color: "hover:text-[#009CDE]" },   
  { name: "Slack", color: "hover:text-[#E01E5A]" },    
  { name: "Discord", color: "hover:text-[#5865F2]" },  
  { name: "Notion", color: "hover:text-[#2383E2]" },   
  { name: "Figma", color: "hover:text-[#F24E1E]" },    
  { name: "Shopify", color: "hover:text-[#96BF48]" },  
];
const TrustSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-primary border-y border-border-base">
      
      {/* 🟢 1. FINISHING: Background Texture & Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Noise Texture for 'Tactile' feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* ✨ Header: Clean & Sharp */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-surface border border-border-base shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand relative">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
            </span>
            <span className="text-xs font-bold text-text-muted uppercase tracking-widest">
              Trusted Ecosystem
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black text-text-main tracking-tight">
            Powering the <span className="relative inline-block text-brand decoration-4 underline decoration-brand/20 underline-offset-4">Next Gen</span> workforce.
          </h3>
        </div>

        {/* 🌀 2. FINISHING: The "Infinity Rail" */}
        <div className="relative w-full  mx-auto">
          
          {/* Glass Container */}
          <div className="absolute inset-0 bg-bg-surface/50 backdrop-blur-sm rounded-3xl border border-border-base shadow-sm" />
          
          {/* Optical Fade Masks (Seamless) */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-bg-primary via-bg-primary/90 to-transparent z-20 rounded-l-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-bg-primary via-bg-primary/90 to-transparent z-20 rounded-r-3xl pointer-events-none" />

          <div className="relative z-10 py-10 overflow-hidden rounded-3xl">
            <div className="flex w-max animate-scroll gap-16 md:gap-24 items-center">
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div 
                  key={index} 
                  className={`group flex items-center justify-center transition-all duration-300 cursor-default`}
                >
                  <span className={`text-2xl md:text-3xl font-black tracking-tighter text-text-muted/40 transition-colors duration-300 ${brand.color} group-hover:scale-105 transform`}>
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🛡️ 3. FINISHING: Trust Metrics (The Bottom Bar) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: ShieldCheck, label: "SOC2 Certified" },
            { icon: Lock, label: "End-to-End Encrypted" },
            { icon: Globe, label: "150+ Countries" },
            { icon: Server, label: "99.99% Uptime" }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-bg-elevated/50 border border-transparent hover:border-brand/20 hover:bg-bg-surface transition-all duration-300 group"
            >
              <item.icon className="w-6 h-6 text-text-muted mb-2 group-hover:text-brand transition-colors" strokeWidth={1.5} />
              <span className="text-xs font-bold text-text-main uppercase tracking-wide flex items-center gap-1">
                {item.label}
                <Check className="w-3 h-3 text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustSection;
