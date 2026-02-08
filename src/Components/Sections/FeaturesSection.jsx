import { Shield, CheckCircle, TrendingUp, Zap, Lock, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Zap, // Swapped CheckCircle for Zap (more energetic)
    title: 'Instant Tasking',
    description: 'Jump straight into micro-tasks without long approval processes. Finish work, get paid.',
    delay: '0'
  },
  {
    icon: Lock, // Swapped Shield for Lock (implies security)
    title: 'Bank-Grade Security',
    description: 'Your earnings are protected by escrow. We ensure every coin you earn hits your wallet.',
    delay: '100'
  },
  {
    icon: BarChart3, // Swapped TrendingUp for BarChart3
    title: 'Career Growth',
    description: 'Level up your badge, unlock premium high-paying tasks, and build your reputation.',
    delay: '200'
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-6 overflow-hidden">
      


      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider mb-4 border border-brand/20">
            Why Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-main mb-6 tracking-tight">
            Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-sec">Modern Worker</span>
          </h2>
          <p className="text-lg text-text-muted font-medium">
            We stripped away the friction. No interviews, no contracts, just opportunities.
          </p>
        </div>

        {/* 🍱 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="clay-card p-8 text-center group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Decorative Background Icon (Faded) */}
              <feature.icon className="absolute -right-4 -bottom-4 w-32 h-32 text-brand opacity-[0.03] group-hover:scale-110 transition-transform duration-500 rotate-12" />

              {/* Icon Container - Fills on Hover */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-bg-elevated border border-border-base flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-text-inv group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-brand/40 group-hover:shadow-lg">
                <feature.icon className="w-8 h-8" strokeWidth={2} />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-brand transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
