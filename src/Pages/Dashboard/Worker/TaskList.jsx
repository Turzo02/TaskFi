import { useState } from 'react';
import { Search, Filter, Clock, DollarSign, Star, Users } from 'lucide-react';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Input from '../../../Components/UI/Input';
import Badge from '../../../Components/UI/Badge';

const TaskList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Testing', 'Data Entry', 'Survey', 'Translation', 'Image Tagging'];

  const mockTasks = [
    { id: 1, title: 'Website Usability Testing', description: 'Test our new website and provide detailed feedback on user experience.', reward: 5.00, time: '30 min', category: 'Testing', buyer: 'TechCorp', rating: 4.9, workersNeeded: 5, workersApplied: 2 },
    { id: 2, title: 'Product Data Entry', description: 'Enter 50 product details into our database system.', reward: 3.50, time: '20 min', category: 'Data Entry', buyer: 'ShopMall', rating: 4.7, workersNeeded: 10, workersApplied: 7 },
    { id: 3, title: 'Customer Survey', description: 'Complete a 10-question survey about shopping habits.', reward: 2.00, time: '10 min', category: 'Survey', buyer: 'Research Inc', rating: 4.8, workersNeeded: 100, workersApplied: 45 },
    { id: 4, title: 'English to Spanish Translation', description: 'Translate a 500-word document from English to Spanish.', reward: 8.00, time: '45 min', category: 'Translation', buyer: 'Global Biz', rating: 4.9, workersNeeded: 3, workersApplied: 1 },
    { id: 5, title: 'Image Categorization', description: 'Tag 100 images with appropriate labels.', reward: 4.00, time: '25 min', category: 'Image Tagging', buyer: 'AI Labs', rating: 4.6, workersNeeded: 8, workersApplied: 5 },
    { id: 6, title: 'App Feature Testing', description: 'Test new app features and report bugs.', reward: 6.00, time: '40 min', category: 'Testing', buyer: 'AppDev Co', rating: 4.8, workersNeeded: 6, workersApplied: 3 },
  ];

  const filteredTasks = mockTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || task.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Available Tasks</h1>
        <p className="text-slate-600 dark:text-slate-400">Browse and apply for tasks to start earning</p>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search tasks..."
              icon={Search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Task Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredTasks.map((task) => (
          <Card key={task.id} className="p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <Badge variant="info" size="sm">{task.category}</Badge>
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm ml-1">{task.rating}</span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {task.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              {task.description}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {task.time}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {task.workersApplied}/{task.workersNeeded} workers
              </span>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
              <div>
                <span className="text-sm text-slate-500">by {task.buyer}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-lg">${task.reward.toFixed(2)}</span>
                <Button variant="primary" size="sm">Apply</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <Card className="p-8 text-center">
          <p className="text-slate-500">No tasks found matching your criteria.</p>
        </Card>
      )}
    </div>
  );
};

export default TaskList;
