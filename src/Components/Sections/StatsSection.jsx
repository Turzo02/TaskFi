import { Wallet, Users, TrendingUp, ArrowUpRight } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Workers",
    growth: "+12% this month",
    delay: "0",
  },
  {
    icon: Wallet,
    value: "$2M+",
    label: "Paid to Workers",
    growth: "Instant Payouts",
    delay: "100",
  },
  {
    icon: TrendingUp,
    value: "100K+",
    label: "Tasks Completed",
    growth: "98% Satisfaction",
    delay: "200",
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-12 px-2 md:px-4 lg:px-6 z-20">
      <div className="container mx-auto">
        {/* 🟢 The "Clay" Container */}
        <div className="clay-card bg-bg-surface/80 backdrop-blur-xl border border-white/20 py-4 md:py-6 shadow-2xl relative overflow-hidden rounded-[2.5rem]">
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-50" />
          <div className="absolute -left-10 -bottom-20 w-64 h-64 bg-brand/5 blur-[80px] rounded-full pointer-events-none" />
          {/* Blob */}
          <div className="absolute top-[50%] left-[30%] w-125 h-125 bg-brand-sec/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-border-base relative z-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center text-center p-4 md:px-8 transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                {/* Icon Wrapper */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-brand/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-16 h-16 rounded-2xl bg-bg-elevated border border-border-base flex items-center justify-center text-brand group-hover:text-text-inv group-hover:bg-brand group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <stat.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Massive Value */}
                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-text-main to-text-muted mb-2 tracking-tight group-hover:from-brand group-hover:to-brand-sec transition-all duration-500">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-lg font-bold text-text-main mb-2">
                  {stat.label}
                </p>

                {/* Growth/Sub-label pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/5 text-brand text-xs font-bold uppercase tracking-wider border border-brand/10">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.growth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
