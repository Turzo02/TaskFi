import { Link } from 'react-router';
import { ArrowRight, Star, Clock, Users, Coins, Briefcase, Zap } from 'lucide-react';

const sampleTasks = [
  {
    id: 1,
    title: 'Website UX Testing',
    description: 'Test a new fintech dashboard and provide detailed feedback on user flow.',
    reward: 2.50,
    timeEstimate: '15 min',
    availableCount: 12,
    totalCount: 50, // Added for progress bar logic
    buyerName: 'TechCorp Inc',
    buyerRating: 4.8,
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 2,
    title: 'Product Data Entry',
    description: 'Categorize and enter product specifications into our e-commerce spreadsheet.',
    reward: 1.50,
    timeEstimate: '10 min',
    availableCount: 25,
    totalCount: 100,
    buyerName: 'DataPro LLC',
    buyerRating: 4.9,
    category: 'Data',
    difficulty: 'Easy'
  },
  {
    id: 3,
    title: 'Market Research Survey',
    description: 'Complete a detailed survey about your online shopping habits.',
    reward: 3.00,
    timeEstimate: '20 min',
    availableCount: 8,
    totalCount: 20,
    buyerName: 'Research Co',
    buyerRating: 4.7,
    category: 'Survey',
    difficulty: 'Easy'
  },
];

const FeaturedTasksSection = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-brand/10 text-brand">
                <Briefcase className="w-5 h-5" />
              </span>
              <span className="text-sm font-bold text-brand uppercase tracking-wider">
                Opportunity Awaits
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-sec">Micro-Tasks</span>
            </h2>
            <p className="text-text-muted mt-3 text-lg font-medium">
              Hand-picked high paying tasks available right now.
            </p>
          </div>

          <Link to="/login">
            <button className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-bg-surface border border-border-base text-text-main font-bold hover:border-brand hover:text-brand transition-all shadow-sm">
              View All Tasks
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* 🍱 Task Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleTasks.map((task) => {
            // Calculate progress for visual bar
            const progress = ((task.totalCount - task.availableCount) / task.totalCount) * 100;
            
            return (
              <div 
                key={task.id} 
                className="clay-card p-6 flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Header: Category & Rating */}
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-bg-elevated text-text-sec border border-border-base group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                    {task.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-text-main">{task.buyerRating}</span>
                  </div>
                </div>

                {/* Title & Desc */}
                <div className="mb-6 grow">
                  <h3 className="text-xl font-bold text-text-main mb-2 line-clamp-1 group-hover:text-brand transition-colors">
                    {task.title}
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-2 leading-relaxed">
                    {task.description}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-bg-primary">
                    <Clock className="w-4 h-4 text-text-muted" />
                    <span className="text-sm font-semibold text-text-sec">{task.timeEstimate}</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-bg-primary">
                    <Zap className="w-4 h-4 text-text-muted" />
                    <span className="text-sm font-semibold text-text-sec">{task.difficulty}</span>
                  </div>
                </div>

                {/* Progress Bar (Urgency) */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-text-muted flex items-center gap-1">
                      <Users className="w-3 h-3" /> Spots Filled
                    </span>
                    <span className="text-brand">
                      {task.availableCount} left
                    </span>
                  </div>
                  <div className="h-2 w-full bg-bg-elevated rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%` }} 
                    />
                  </div>
                </div>

                {/* Footer: Price & Action */}
                <div className="pt-5 border-t border-border-base flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-xs text-text-muted font-medium">Reward</span>
                    <div className="flex items-center gap-1 text-lg font-black text-text-main">
                      <Coins className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
                      ${task.reward.toFixed(2)}
                    </div>
                  </div>
                  
                  <button className="px-5 py-2.5 rounded-xl bg-text-main text-bg-surface font-bold text-sm hover:bg-brand transition-colors shadow-lg shadow-text-main/10 group-hover:shadow-brand/20">
                    Apply Now
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedTasksSection;
