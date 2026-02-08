import { Link } from 'react-router';
import { Wallet, ArrowRight, Twitter, Linkedin, Github, Send, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-10 px-4 md:px-6 bg-bg-primary overflow-hidden border-t border-brand/5">
      

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* 🔥 FLOATING CTA CARD (Claymorphism Style) */}
        <div className="clay-card p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
          
          {/* Decorative Circle inside Card */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand/10 rounded-full blur-2xl" />

          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-3 tracking-tight">
              Ready to grow your wallet?
            </h2>
            <p className="text-lg text-text-muted font-medium">
              Join the ecosystem where ambition meets opportunity. Start earning coins today.
            </p>
          </div>
          
          <Link 
            to="/register" 
            className="clay-btn group flex items-center gap-2 text-lg shadow-xl"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 🗺️ FOOTER LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* 1. BRAND COLUMN (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-brand-sec flex items-center justify-center shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform duration-300">
                <Wallet className="w-6 h-6 text-text-inv" />
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-text-main">
                Task<span className="text-brand">Fi</span>
              </span>
            </Link>
            <p className="text-text-muted font-medium leading-relaxed max-w-sm">
              We are redesigning the micro-economy. Secure, transparent, and built for the future of work.
            </p>
            
            <div className="flex gap-3 pt-2">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-bg-surface border border-border-base flex items-center justify-center text-text-muted hover:text-white hover:bg-brand hover:border-brand transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. PLATFORM LINKS (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-text-main text-lg tracking-tight">Platform</h4>
            <ul className="space-y-3">
              {[
                { name: 'Browse Tasks', path: '/dashboard/worker/tasks' },
                { name: 'Post a Task', path: '/dashboard/buyer/add-task' },
                { name: 'Pricing', path: '/dashboard/buyer/purchase' },
                { name: 'Leaderboard', path: '/' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-text-muted hover:text-brand font-medium transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-border-base group-hover:bg-brand transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. COMPANY LINKS (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-text-main text-lg tracking-tight">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Privacy Policy', 'Terms'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-text-muted hover:text-brand font-medium transition-colors block hover:translate-x-1 duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. NEWSLETTER (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-bold text-text-main text-lg tracking-tight">Stay in the loop</h4>
            <p className="text-text-muted text-sm">
              Get the latest tasks and earning tips delivered to your inbox.
            </p>
            
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-bg-surface border border-border-base rounded-2xl pl-5 pr-14 py-4 text-text-main placeholder:text-text-muted/60 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all shadow-sm group-hover:shadow-md"
              />
              <button 
                type="button"
                className="absolute right-2 top-2 bottom-2 aspect-square bg-brand hover:bg-brand-sec text-text-inv rounded-xl transition-colors flex items-center justify-center shadow-lg"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* 🏁 BOTTOM BAR */}
        <div className="border-t border-border-base pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold text-text-muted flex items-center gap-1.5">
            &copy; {currentYear} TaskFi. Crafted with <Heart className="w-4 h-4 text-brand-sec fill-brand-sec animate-pulse-slow" />.
          </p>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-bg-surface border border-border-base shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand"></span>
            </span>
            <span className="text-xs font-bold text-text-main">All Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
