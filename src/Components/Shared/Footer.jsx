import React from "react";
import { Link } from "react-router";
import {
  ArrowUpRight,
  Wallet,
  Twitter,
  Linkedin,
  Github,
  Send,
  ShieldCheck,
  Heart,
  Globe,
} from "lucide-react";
import Logo from "../../Components/Shared/Logo";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-primary pt-32 pb-6 overflow-hidden">
      {/* 🟢 1. MASSIVE BACKGROUND WATERMARK (The Trend) */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full select-none pointer-events-none z-0">
        <h1 className="text-[18vw] leading-none font-black text-center text-text-main opacity-[0.03] tracking-tighter">
          TASKFI
        </h1>
      </div>

      {/* 🟢 2. AMBIENT GLOW FX */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-brand/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-brand-sec/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 🍱 3. BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
          {/* BLOCK A: Brand & Mission (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="mb-10">
              <Logo></Logo>
              <p className="text-xl text-text-muted font-medium max-w-md leading-relaxed">
                The decentralized layer for the global gig economy. We connect
                ambition with opportunity through secure, instant
                micro-transactions.
              </p>
            </div>

            {/* Magnetic Social Buttons */}
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-14 h-14 rounded-full bg-bg-surface border border-border-base flex items-center justify-center text-text-muted hover:text-white hover:bg-brand hover:border-brand transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group"
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* BLOCK B: Navigation Columns (Span 3) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-4 content-start">
            <div>
              <h4 className="font-bold text-text-main mb-6 flex items-center gap-2">
                Platform
              </h4>
              <ul className="space-y-4">
                {["Browse Tasks", "Post a Task", "Pricing", "Leaderboard"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to="#"
                        className="group flex items-center gap-2 text-text-muted hover:text-brand font-medium transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-border-base group-hover:bg-brand transition-all duration-300 group-hover:w-3" />
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-text-main mb-6">Company</h4>
              <ul className="space-y-4">
                {["About", "Careers", "Press", "Legal"].map((item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="group flex items-center gap-2 text-text-muted hover:text-brand font-medium transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-border-base group-hover:bg-brand transition-all duration-300 group-hover:w-3" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BLOCK C: Newsletter Card (Span 4) */}
          <div className="lg:col-span-4">
            <div className="clay-card p-8 h-full relative overflow-hidden group">
              {/* Card Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl group-hover:bg-brand/20 transition-colors duration-500" />

              <h3 className="text-2xl font-bold text-text-main mb-2 relative z-10">
                Stay in the loop
              </h3>
              <p className="text-text-muted mb-8 relative z-10">
                Join 50,000+ earners receiving weekly tips.
              </p>

              <form className="relative z-10 space-y-4">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-bg-primary border border-border-base text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all"
                />
                <button className="w-full clay-btn py-4 flex items-center justify-center gap-2 shadow-lg group-hover:shadow-brand/25">
                  Subscribe Now
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-6 flex items-center gap-3 text-xs font-bold text-text-muted uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-brand" />
                No spam, unsubscribe anytime.
              </div>
            </div>
          </div>
        </div>

        {/* 🟢 4. BOTTOM BAR (Floating Glass Strip) */}
        <div className="relative z-20 mx-auto max-w-5xl">
          <div className="rounded-full bg-bg-surface/80 backdrop-blur-xl border border-border-base shadow-lg py-4 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-text-muted">
              <span>&copy; {currentYear} TaskFi Inc.</span>
              <span className="hidden md:inline text-border-base">|</span>
              <span className="flex items-center gap-1">
                Made with{" "}
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-bold text-text-main hover:text-brand transition-colors group"
              >
                <Globe className="w-4 h-4 text-text-muted group-hover:text-brand transition-colors" />
                Global (EN)
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-bold text-text-main hover:text-brand transition-colors group"
              >
                Status
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
