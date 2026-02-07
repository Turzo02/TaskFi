import { NavLink } from 'react-router';

const Sidebar = ({ role = 'worker' }) => {
  const workerLinks = [
    { label: 'Dashboard', href: '/dashboard/worker' },
    { label: 'Available Tasks', href: '/dashboard/worker/tasks' },
    { label: 'My Submissions', href: '/dashboard/worker/submissions' },
    { label: 'Withdrawals', href: '/dashboard/worker/withdrawals' },
  ];

  const buyerLinks = [
    { label: 'Dashboard', href: '/dashboard/buyer' },
    { label: 'My Tasks', href: '/dashboard/buyer/tasks' },
    { label: 'Add Task', href: '/dashboard/buyer/add-task' },
    { label: 'Purchase Coins', href: '/dashboard/buyer/purchase' },
    { label: 'Payments', href: '/dashboard/buyer/payments' },
  ];

  const adminLinks = [
    { label: 'Dashboard', href: '/dashboard/admin' },
    { label: 'Manage Users', href: '/dashboard/admin/users' },
    { label: 'Manage Tasks', href: '/dashboard/admin/tasks' },
  ];

  const links = role === 'admin' ? adminLinks : role === 'buyer' ? buyerLinks : workerLinks;

  const roleColors = {
    worker: 'border-l-green-500 bg-green-900/20',
    buyer: 'border-l-blue-500 bg-blue-900/20',
    admin: 'border-l-purple-500 bg-purple-900/20'
  };

  return (
    <aside className={`fixed left-0 top-0 h-full w-64 bg-slate-800 text-white border-r-4 ${roleColors[role]} overflow-y-auto`}>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-1 capitalize">{role}</h2>
        <p className="text-slate-400 text-sm">Dashboard</p>
      </div>

      <nav className="px-4 pb-6">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href.endsWith(role)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded transition-colors ${
                    isActive
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
