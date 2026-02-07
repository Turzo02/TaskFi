import { Link } from 'react-router';
import { Wallet, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TaskFi</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              The premier micro-task and earning platform. Connect workers with buyers and earn rewards.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
              <li><Link to="/dashboard/worker" className="hover:text-white transition-colors">Worker Dashboard</Link></li>
              <li><Link to="/dashboard/buyer" className="hover:text-white transition-colors">Buyer Dashboard</Link></li>
            </ul>
          </div>

          {/* Dashboard Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Dashboards</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dashboard/worker/tasks" className="hover:text-white transition-colors">Browse Tasks</Link></li>
              <li><Link to="/dashboard/buyer/add-task" className="hover:text-white transition-colors">Post a Task</Link></li>
              <li><Link to="/dashboard/buyer/purchase" className="hover:text-white transition-colors">Purchase Coins</Link></li>
              <li><Link to="/dashboard/worker/withdrawals" className="hover:text-white transition-colors">Withdrawals</Link></li>
              <li><Link to="/dashboard/admin" className="hover:text-white transition-colors">Admin Panel</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>support@taskfi.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>123 Task Street, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} TaskFi. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/help" className="hover:text-white transition-colors">Help Center</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
