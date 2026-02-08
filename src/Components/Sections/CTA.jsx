import React from "react";
import { Link } from "react-router";
import { ShieldCheck, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <div>
      {/* 🔥 FLOATING CTA CARD (Center of Attraction) */}
      <div className="clay-card p-10 md:p-14 mb-24 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
        {/* Dynamic Background Gradient inside Card */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-surface via-transparent to-bg-surface opacity-50" />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand/10 rounded-full blur-3xl group-hover:bg-brand/20 transition-colors duration-700" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider border border-brand/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secure & Instant
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tight leading-tight">
              Ready to maximize <br /> your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-sec">
                digital worth?
              </span>
            </h2>
            <p className="text-xl text-text-muted font-medium">
              Join 50,000+ earners building their future on TaskFi.
            </p>
          </div>

          <Link to="/register">
            <button className="clay-btn group flex items-center gap-3 text-lg px-8 py-4 shadow-2xl shadow-brand/20 hover:shadow-brand/40">
              Start Earning Now
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
