import { NavLink } from 'react-router';
import { 
  LayoutDashboard, 
  ListTodo, 
  FileCheck, 
  Wallet, 
  PlusCircle, 
  CreditCard, 
  Users, 
  Settings 
} from 'lucide-react';

const Sidebar = ({ role = 'worker' }) => {

  const navConfigs = {
    worker: {
      theme: 'text-emerald-500 bg-emerald-500/10 border-emerald-500',
      hover: 'hover:bg-emerald-500/5 hover:text-emerald-500',
      links: [
        { label: 'Overview', href: '/dashboard/worker', icon: LayoutDashboard },
        { label: 'Task Market', href: '/dashboard/worker/tasks', icon: ListTodo },
        { label: 'Submissions', href: '/dashboard/worker/submissions', icon: FileCheck },
        { label: 'Withdrawals', href: '/dashboard/worker/withdrawals', icon: Wallet },
      ]
    },
    buyer: {
      theme: 'text-blue-500 bg-blue-500/10 border-blue-500',
      hover: 'hover:bg-blue-500/5 hover:text-blue-500',
      links: [
        { label: 'Overview', href: '/dashboard/buyer', icon: LayoutDashboard },
        { label: 'My Tasks', href: '/dashboard/buyer/tasks', icon: ListTodo },
        { label: 'Create Task', href: '/dashboard/buyer/add-task', icon: PlusCircle },
        { label: 'Buy Coins', href: '/dashboard/buyer/purchase', icon: CreditCard },
        { label: 'History', href: '/dashboard/buyer/payments', icon: FileCheck },
      ]
    },
    admin: {
      theme: 'text-violet-500 bg-violet-500/10 border-violet-500',
      hover: 'hover:bg-violet-500/5 hover:text-violet-500',
      links: [
        { label: 'Overview', href: '/dashboard/admin', icon: LayoutDashboard },
        { label: 'Users', href: '/dashboard/admin/users', icon: Users },
        { label: 'All Tasks', href: '/dashboard/admin/tasks', icon: ListTodo },
        { label: 'Settings', href: '/dashboard/admin/settings', icon: Settings },
      ]
    }
  };

  const currentConfig = navConfigs[role] || navConfigs.worker;

  return (
    <nav className="space-y-1">
      {currentConfig.links.map((link) => {
        const Icon = link.icon;
        
        return (
          <NavLink
            key={link.href}
            to={link.href}
            end={link.href === `/dashboard/${role}`}
            className={({ isActive }) =>
              `group relative flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ease-out
              ${isActive 
                ? `${currentConfig.theme} shadow-sm` 
                : `text-text-muted ${currentConfig.hover}`
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* Active Indicator Bar */}
                {isActive && (
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-current opacity-50`} />
                )}

                {/* Icon with scale animation */}
                <Icon 
                  className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                
                <span className="tracking-wide">{link.label}</span>

                {/* Hover Arrow (Subtle) */}
                {!isActive && (
                  <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Sidebar;
