import { Link } from 'react-router';
import { ArrowRight, Sparkles, Coins, CheckCircle, ShieldCheck, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-primary">
      
      {/* 🌌 BACKGROUND ATMOSPHERE (The "Aurora" Effect) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Green Blob */}
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-brand-sec/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        {/* Bottom Left Mint Blob */}
        <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-brand-sec/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        
        {/* 🏷️ TRUST BADGE (Floating Pill) */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-surface/50 border border-brand/20 backdrop-blur-md shadow-sm mb-8 animate-float" style={{ animationDuration: '4s' }}>
          <span className="flex h-2 w-2 rounded-full bg-brand relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
          </span>
          <span className="text-xs font-bold text-text-sec tracking-wide uppercase">
            Live: <span className="text-brand">1,240</span> Active Tasks
          </span>
        </div>

        {/* 👑 MAIN HEADLINE */}
        <h1 className="max-w-5xl mx-auto text-5xl md:text-7xl font-black tracking-tight text-text-main leading-[1.1] mb-8">
          Turn your spare time into <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-sec">
              Real Rewards.
            </span>
            {/* Underline Decoration */}
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-muted font-medium mb-12 leading-relaxed">
          The decentralized marketplace for micro-tasks. 
          Complete simple gigs to earn crypto-coins, or hire a global workforce in seconds.
        </p>

        {/* 🔘 CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link to="/login">
            <button className="clay-btn text-lg px-8 py-4 flex items-center gap-3 group shadow-xl shadow-brand/20 hover:shadow-brand/40">
              <Sparkles className="w-5 h-5 fill-white/20" />
              Start Earning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          
          <Link to="/login">
            <button className="px-8 py-4 rounded-2xl bg-bg-surface text-text-main font-bold border border-border-base hover:border-brand hover:text-brand transition-all shadow-sm hover:shadow-lg flex items-center gap-2 group">
              <PlayCircle className="w-5 h-5 text-text-muted group-hover:text-brand transition-colors" />
              Post a Task
            </button>
          </Link>
        </div>

        {/* 🛰️ FLOATING DECORATIONS (The "Wow" Factor) */}
        
        {/* Left: Coins */}
        <div className="hidden lg:flex absolute top-1/3 left-10 flex-col items-center gap-2 p-4 rounded-3xl bg-bg-surface/80 backdrop-blur-xl border border-white/20 shadow-2xl animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-500">
            <Coins className="w-6 h-6 fill-yellow-500/20" />
          </div>
          <span className="text-sm font-bold text-text-main">$124.50</span>
          <span className="text-xs text-text-muted">Earned today</span>
        </div>

        {/* Right: Security */}
        <div className="hidden lg:flex absolute top-1/4 right-10 flex-col items-center gap-2 p-4 rounded-3xl bg-bg-surface/80 backdrop-blur-xl border border-white/20 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-sm font-bold text-text-main">Verified</span>
          <span className="text-xs text-text-muted">Secure Payments</span>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
