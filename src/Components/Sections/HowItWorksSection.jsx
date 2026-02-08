import { Users, Briefcase, ChevronRight, UserPlus, Search, CheckCircle, FileText, MousePointerClick, Download } from 'lucide-react';

const workerSteps = [
  { 
    step: 1, 
    title: 'Create Account', 
    description: 'Sign up for free and complete your profile.', 
    icon: UserPlus 
  },
  { 
    step: 2, 
    title: 'Browse Tasks', 
    description: 'Find tasks that match your skills.', 
    icon: Search 
  },
  { 
    step: 3, 
    title: 'Complete & Earn', 
    description: 'Submit work and get paid in coins instantly.', 
    icon: CheckCircle 
  },
];

const buyerSteps = [
  { 
    step: 1, 
    title: 'Post a Task', 
    description: 'Describe what you need and set a budget.', 
    icon: FileText 
  },
  { 
    step: 2, 
    title: 'Review Work', 
    description: 'Workers apply and complete your tasks.', 
    icon: MousePointerClick 
  },
  { 
    step: 3, 
    title: 'Get Results', 
    description: 'Approve work and download deliverables.', 
    icon: Download 
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider mb-4 border border-brand/20">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-main mb-6 tracking-tight">
            How Task<span className="text-brand">Fi</span> Works
          </h2>
          <p className="text-lg text-text-muted font-medium max-w-2xl mx-auto">
            Whether you are here to earn or hire, our process is streamlined for speed and security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* 👷 FOR WORKERS TRACK */}
          <div className="relative group">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent rounded-[2.5rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
            
            <div className="clay-card p-8 md:p-10 relative h-full border-l-4 border-l-brand">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-2xl bg-brand/10 text-brand">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-main">For Workers</h3>
                  <p className="text-text-muted font-medium">Turn time into money</p>
                </div>
              </div>

              <div className="space-y-8 relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border-base" />

                {workerSteps.map((item, idx) => (
                  <div key={idx} className="relative flex gap-6 group/step">
                    {/* Step Bubble */}
                    <div className="shrink-0 w-12 h-12 rounded-full bg-bg-surface border-4 border-bg-primary flex items-center justify-center relative z-10 shadow-sm group-hover/step:scale-110 group-hover/step:border-brand transition-all duration-300">
                      <item.icon className="w-5 h-5 text-text-muted group-hover/step:text-brand transition-colors" />
                    </div>
                    
                    {/* Content */}
                    <div className="pt-2">
                      <h4 className="text-lg font-bold text-text-main mb-1 group-hover/step:text-brand transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 💼 FOR BUYERS TRACK */}
          <div className="relative group">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-bl from-brand-sec/5 to-transparent rounded-[2.5rem] rotate-1 group-hover:rotate-0 transition-transform duration-500" />
            
            <div className="clay-card p-8 md:p-10 relative h-full border-l-4 border-l-brand-sec">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-2xl bg-brand-sec/10 text-brand-sec">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-main">For Buyers</h3>
                  <p className="text-text-muted font-medium">Get work done fast</p>
                </div>
              </div>

              <div className="space-y-8 relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border-base" />

                {buyerSteps.map((item, idx) => (
                  <div key={idx} className="relative flex gap-6 group/step">
                    {/* Step Bubble */}
                    <div className="shrink-0 w-12 h-12 rounded-full bg-bg-surface border-4 border-bg-primary flex items-center justify-center relative z-10 shadow-sm group-hover/step:scale-110 group-hover/step:border-brand-sec transition-all duration-300">
                      <item.icon className="w-5 h-5 text-text-muted group-hover/step:text-brand-sec transition-colors" />
                    </div>
                    
                    {/* Content */}
                    <div className="pt-2">
                      <h4 className="text-lg font-bold text-text-main mb-1 group-hover/step:text-brand-sec transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
