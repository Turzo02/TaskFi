import { useState } from "react";
import { Search, Filter, Clock, Star, Users, Briefcase, Zap, ArrowUpRight, LayoutGrid, List } from "lucide-react";

const TaskList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // grid | list

  const categories = ["all", "Testing", "Data Entry", "Survey", "Translation", "Image Tagging"];

  const mockTasks = [
    {
      id: 1,
      title: "Website Usability Testing",
      description: "Test our new website and provide detailed feedback on user experience.",
      reward: 5.0,
      time: "30 min",
      category: "Testing",
      difficulty: "Medium",
      buyer: "TechCorp",
      rating: 4.9,
      workersNeeded: 5,
      workersApplied: 2,
    },
    {
      id: 2,
      title: "Product Data Entry",
      description: "Enter 50 product details into our database system accurately.",
      reward: 3.5,
      time: "20 min",
      category: "Data Entry",
      difficulty: "Easy",
      buyer: "ShopMall",
      rating: 4.7,
      workersNeeded: 10,
      workersApplied: 7,
    },
    {
      id: 3,
      title: "Customer Survey",
      description: "Complete a 10-question survey about shopping habits.",
      reward: 2.0,
      time: "10 min",
      category: "Survey",
      difficulty: "Easy",
      buyer: "Research Inc",
      rating: 4.8,
      workersNeeded: 100,
      workersApplied: 45,
    },
    {
      id: 4,
      title: "English to Spanish Translation",
      description: "Translate a 500-word document from English to Spanish.",
      reward: 8.0,
      time: "45 min",
      category: "Translation",
      difficulty: "Hard",
      buyer: "Global Biz",
      rating: 4.9,
      workersNeeded: 3,
      workersApplied: 1,
    },
    {
      id: 5,
      title: "Image Categorization",
      description: "Tag 100 images with appropriate labels for AI training.",
      reward: 4.0,
      time: "25 min",
      category: "Image Tagging",
      difficulty: "Medium",
      buyer: "AI Labs",
      rating: 4.6,
      workersNeeded: 8,
      workersApplied: 5,
    },
    {
      id: 6,
      title: "App Feature Testing",
      description: "Test new app features on iOS and report bugs.",
      reward: 6.0,
      time: "40 min",
      category: "Testing",
      difficulty: "Medium",
      buyer: "AppDev Co",
      rating: 4.8,
      workersNeeded: 6,
      workersApplied: 3,
    },
  ];

  const filteredTasks = mockTasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || task.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500">
      
      {/* 🟢 Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">Task Market</h1>
          <p className="text-text-muted font-medium mt-1">Browse and apply for high-paying micro-tasks.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-3 p-1.5 bg-bg-surface border border-border-base rounded-2xl shadow-sm w-full lg:w-auto">
          <div className="relative flex-1 lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-transparent text-sm font-bold text-text-main placeholder:text-text-muted focus:outline-none"
            />
          </div>
          
          <div className="h-6 w-px bg-border-base" />
          
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2.5 bg-transparent text-sm font-bold text-text-main focus:outline-none cursor-pointer hover:text-brand transition-colors"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-text-muted pointer-events-none" />
          </div>

          <div className="hidden md:flex gap-1 bg-bg-elevated p-1 rounded-xl">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-bg-surface shadow-sm text-brand' : 'text-text-muted hover:text-text-main'}`}>
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-bg-surface shadow-sm text-brand' : 'text-text-muted hover:text-text-main'}`}>
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 🍱 Task Grid */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {filteredTasks.map((task) => {
          const progress = (task.workersApplied / task.workersNeeded) * 100;
          
          return (
            <div 
              key={task.id} 
              className={`clay-card group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col ${viewMode === 'list' ? 'md:flex-row md:items-center p-6 gap-6' : 'p-6 h-full'}`}
            >
              {/* Header (Grid Mode) */}
              <div className={`${viewMode === 'list' ? 'md:w-1/4' : 'mb-4'} flex justify-between items-start`}>
                <span className="px-2.5 py-1 rounded-lg bg-bg-elevated border border-border-base text-[10px] font-bold uppercase tracking-wider text-text-sec">
                  {task.category}
                </span>
                {viewMode === 'grid' && (
                  <div className="flex items-center gap-1 bg-yellow-400/10 px-2 py-1 rounded-lg border border-yellow-400/20">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-text-main">{task.rating}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`${viewMode === 'list' ? 'md:w-2/4' : 'mb-6 flex-1'}`}>
                <h3 className="text-lg font-black text-text-main mb-2 group-hover:text-brand transition-colors line-clamp-1">
                  {task.title}
                </h3>
                <p className="text-sm text-text-muted font-medium line-clamp-2 leading-relaxed">
                  {task.description}
                </p>
                
                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-sec">
                    <Clock className="w-3.5 h-3.5 text-text-muted" />
                    {task.time}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-sec">
                    <Zap className="w-3.5 h-3.5 text-text-muted" />
                    {task.difficulty}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-text-sec">
                    <Briefcase className="w-3.5 h-3.5 text-text-muted" />
                    {task.buyer}
                  </div>
                </div>
              </div>

              {/* Footer / Right Side */}
              <div className={`${viewMode === 'list' ? 'md:w-1/4 flex flex-col items-end gap-2' : 'pt-5 border-t border-border-base mt-auto'}`}>
                
                {/* Progress Bar (Grid Only) */}
                {viewMode === 'grid' && (
                  <div className="mb-5">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      <span className="text-text-muted">Spots Filled</span>
                      <span className="text-brand">{task.workersApplied}/{task.workersNeeded}</span>
                    </div>
                    <div className="h-1.5 w-full bg-bg-elevated rounded-full overflow-hidden">
                      <div className="h-full bg-brand rounded-full" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between w-full">
                  <div>
                    <span className="text-[10px] font-bold text-text-muted uppercase block">Reward</span>
                    <span className="text-xl font-black text-text-main">${task.reward.toFixed(2)}</span>
                  </div>
                  <button className="px-5 py-2.5 rounded-xl bg-text-main text-bg-surface font-bold text-sm hover:bg-brand transition-colors shadow-lg shadow-text-main/10 flex items-center gap-2 group/btn">
                    Apply
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredTasks.length === 0 && (
        <div className="clay-card p-12 text-center border-dashed border-2 border-border-base bg-transparent shadow-none">
          <div className="w-16 h-16 bg-bg-elevated rounded-full flex items-center justify-center mx-auto mb-4 text-text-muted">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-text-main">No tasks found</h3>
          <p className="text-text-muted">Try adjusting your filters or search term.</p>
        </div>
      )}

    </div>
  );
};

export default TaskList;
