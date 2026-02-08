import { useParams, Link } from 'react-router';
import { 
  Clock, 
  DollarSign, 
  Star, 
  Users, 
  FileText, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  Calendar, 
  ExternalLink, 
  Upload, 
  Zap,
  CornerDownRight
} from 'lucide-react';

const TaskDetails = () => {
  const { id } = useParams();

  // Mock Data (Preserved)
  const task = {
    id: id || 1,
    title: 'Website Usability Testing',
    description: 'Navigate through our new e-commerce platform, complete a purchase flow, and document UX friction points.',
    reward: 5.00,
    timeEstimate: '30m',
    category: 'Testing',
    difficulty: 'Medium',
    buyer: {
      name: 'TechCorp Inc',
      rating: 4.9,
      totalTasks: 156,
      memberSince: '2023',
      verified: true
    },
    requirements: [
      'Desktop or laptop computer',
      'Chrome/Firefox/Safari',
      'Screen recording software',
      'Fluent English writing'
    ],
    workersNeeded: 5,
    workersApplied: 2,
    deadline: 'Feb 15',
    instructions: `1. Visit the website at demo-link.com
    2. Create an account and complete the onboarding
    3. Browse products and add 2-3 items to cart
    4. Complete the checkout process (use test payment)
    5. Submit a written report of any bugs or UX issues found`
  };

  return (
    <div className="relative min-h-screen animate-in fade-in zoom-in duration-500 pb-20">
      
      {/* 🔙 Navigation */}
      <div className="mb-8">
        <Link to="/dashboard/worker/tasks" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-surface border border-border-base text-text-muted hover:text-text-main hover:border-brand/50 transition-all group shadow-sm">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold">Back to Market</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* 📄 LEFT COLUMN: The Project File (Span 8) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Hero Header Block */}
          <div className="clay-card relative overflow-hidden bg-bg-surface border-0 p-0 rounded-[2.5rem]">
            {/* Artistic Header Background */}
            <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-emerald-900 dark:to-emerald-950 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand/20 rounded-full blur-[100px]" />
              <div className="absolute -left-20 top-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10 pt-32 px-8 md:px-10 pb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg-surface/10 backdrop-blur-md border border-white/10 rounded-lg text-white/90 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">
                <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                {task.category}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-sm tracking-tight leading-tight">
                {task.title}
              </h1>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Time', val: task.timeEstimate, icon: Clock },
                  { label: 'Difficulty', val: task.difficulty, icon: Star },
                  { label: 'Deadline', val: task.deadline, icon: Calendar },
                  { label: 'Openings', val: `${task.workersNeeded - task.workersApplied} Left`, icon: Users },
                ].map((stat, i) => (
                  <div key={i} className="bg-bg-surface p-4 rounded-2xl border border-border-base shadow-sm flex flex-col justify-center items-start group hover:border-brand/30 transition-colors">
                    <stat.icon className="w-5 h-5 text-text-muted mb-2 group-hover:text-brand transition-colors" />
                    <p className="text-xs font-bold text-text-muted uppercase">{stat.label}</p>
                    <p className="text-sm font-black text-text-main">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description & Req Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="clay-card p-8 bg-bg-surface">
              <h3 className="font-bold text-text-main text-lg mb-4 flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500"><FileText className="w-4 h-4" /></div>
                Brief
              </h3>
              <p className="text-text-sec text-sm leading-relaxed font-medium">
                {task.description}
              </p>
            </div>

            <div className="clay-card p-8 bg-bg-surface">
              <h3 className="font-bold text-text-main text-lg mb-4 flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-red-500/10 text-red-500"><ShieldCheck className="w-4 h-4" /></div>
                Requirements
              </h3>
              <ul className="space-y-3">
                {task.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-sec font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions (Terminal Style) */}
          <div className="clay-card bg-[#1e1e1e] border-none text-gray-300 p-8 rounded-[2rem] overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <CornerDownRight className="w-5 h-5 text-brand" />
              Execution Steps
            </h3>
            <div className="font-mono text-sm space-y-4 leading-relaxed opacity-90">
              {task.instructions.split('\n').map((line, i) => (
                <p key={i} className="flex gap-4">
                  <span className="text-gray-600 select-none">{(i + 1).toString().padStart(2, '0')}</span>
                  <span>{line.replace(/^\d+\.\s*/, '')}</span>
                </p>
              ))}
            </div>
          </div>

        </div>

        {/* 💰 RIGHT COLUMN: The Sticky Action Rail (Span 4) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
          
          {/* THE REWARD CARD (Center of Focus) */}
          <div className="relative clay-card p-8 bg-gradient-to-b from-emerald-500 to-emerald-700 text-white border-0 shadow-2xl shadow-emerald-500/30 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10 text-center">
              <p className="text-emerald-100 font-bold uppercase tracking-widest text-xs mb-2">Total Reward</p>
              <div className="text-7xl font-black tracking-tighter flex items-center justify-center gap-1 mb-2">
                <span className="text-4xl opacity-50">$</span>
                {Math.floor(task.reward)}
                <span className="text-4xl opacity-50">.{(task.reward % 1).toFixed(2).split('.')[1]}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold shadow-sm">
                <DollarSign className="w-3 h-3" /> Guaranteed Payout
              </div>
            </div>
          </div>

          {/* Submission Form */}
          <div className="clay-card p-6 bg-bg-surface border border-brand/20 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand" />
            <h3 className="font-bold text-text-main mb-4">Submit Work</h3>
            
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Paste proof URL here..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-bg-elevated border border-transparent text-text-main font-medium focus:bg-bg-surface focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all outline-none"
                />
                <ExternalLink className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              </div>

              <div className="border-2 border-dashed border-border-base rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-bg-elevated/50 hover:border-brand/50 transition-all cursor-pointer group/upload">
                <div className="w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center mb-2 group-hover/upload:scale-110 transition-transform">
                  <Upload className="w-5 h-5 text-text-muted group-hover/upload:text-brand" />
                </div>
                <p className="text-xs font-bold text-text-muted">Upload Screenshot</p>
              </div>

              <button className="w-full py-3.5 rounded-xl bg-text-main text-bg-surface font-black text-lg hover:bg-brand transition-all shadow-xl flex items-center justify-center gap-2 group/btn">
                Complete Task
                <ArrowLeft className="w-5 h-5 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Buyer Trust Profile */}
          <div className="clay-card p-6 bg-bg-surface flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-black shadow-md">
              {task.buyer.name[0]}
            </div>
            <div>
              <h4 className="font-bold text-text-main">{task.buyer.name}</h4>
              <div className="flex items-center gap-2 text-xs font-medium text-text-muted mt-1">
                <span className="flex items-center gap-1 text-yellow-500"><Star className="w-3 h-3 fill-current" /> {task.buyer.rating}</span>
                <span>•</span>
                <span>{task.buyer.totalTasks} Tasks</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TaskDetails;
