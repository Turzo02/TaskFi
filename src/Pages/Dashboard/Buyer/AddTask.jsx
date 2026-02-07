import { useState } from 'react';
import { PlusCircle, DollarSign, Users, FileText, ArrowRight } from 'lucide-react';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Input from '../../../Components/UI/Input';
import Badge from '../../../Components/UI/Badge';

const AddTask = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    reward: '',
    workersNeeded: '',
    category: 'Testing',
    deadline: ''
  });

  const categories = ['Testing', 'Data Entry', 'Survey', 'Translation', 'Image Tagging', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Task posted successfully! (Demo Mode)');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Post New Task</h1>
        <p className="text-slate-600 dark:text-slate-400">Create a new task for workers to complete</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Task Title"
                placeholder="e.g., Website Usability Testing"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
              />

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  rows={4}
                  placeholder="Describe what workers need to do..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Reward per Task ($)"
                  type="number"
                  placeholder="5.00"
                  icon={DollarSign}
                  value={formData.reward}
                  onChange={(e) => setFormData({...formData, reward: e.target.value})}
                  required
                />
                <Input
                  label="Workers Needed"
                  type="number"
                  placeholder="10"
                  icon={Users}
                  value={formData.workersNeeded}
                  onChange={(e) => setFormData({...formData, workersNeeded: e.target.value})}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Category
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                <Input
                  label="Deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                <PlusCircle className="w-5 h-5 mr-2" />
                Post Task
              </Button>
            </form>
          </Card>
        </div>

        <div>
          <Card className="p-5 bg-indigo-50 dark:bg-indigo-900/20">
            <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-3">Cost Preview</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Reward per worker:</span>
                <span className="font-medium">${formData.reward || '0.00'}</span>
              </div>
              <div className="flex justify-between">
                <span>Workers needed:</span>
                <span className="font-medium">{formData.workersNeeded || 0}</span>
              </div>
              <div className="border-t border-indigo-200 dark:border-indigo-800 pt-2 flex justify-between font-bold">
                <span>Total Cost:</span>
                <span>${((parseFloat(formData.reward) || 0) * (parseInt(formData.workersNeeded) || 0)).toFixed(2)}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
