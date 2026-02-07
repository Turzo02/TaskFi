import { Outlet, useLocation, Link } from 'react-router';
import { Wallet } from 'lucide-react';
import Sidebar from '../Components/Shared/Sidebar';

const DashboardLayout = () => {
  const location = useLocation();
  
  // Determine role from URL path
  const getRole = () => {
    if (location.pathname.includes('/admin')) return 'admin';
    if (location.pathname.includes('/buyer')) return 'buyer';
    return 'worker';
  };

  const role = getRole();

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Content */}
      <main className="flex-1 ml-64 min-h-screen">
        {/* Header with Logo */}
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-8 py-4">
          <Link to="/" className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Wallet className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">TaskFi</span>
          </Link>
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
