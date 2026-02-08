import React from "react";
import { Link } from "react-router";
import { Wallet } from "lucide-react";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="inline-flex items-center gap-3 group">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-brand-sec flex items-center justify-center text-white shadow-lg shadow-brand/20 group-hover:rotate-12 transition-transform duration-500">
          <Wallet className="w-6 h-6" />
        </div>
        <span className="text-3xl font-black tracking-tight text-text-main">
          Task<span className="text-brand italic">Fi</span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
