import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { 
  Wallet, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Coins, 
  Github, 
  LogOut, 
  LayoutDashboard 
} from "lucide-react";
import { useAuth } from "../../Context/AuthContext";
import { ThemeContext } from "../../Context/ThemeContext";

// ✨ Nav Link Component (Defined outside to prevent re-creation)
const NavItem = ({ to, children }) => (
  <li>
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
          isActive 
            ? "bg-brand/10 text-brand shadow-sm ring-1 ring-brand/20" 
            : "text-text-sec hover:text-text-main hover:bg-bg-elevated"
        }`
      }
    >
      {children}
    </NavLink>
  </li>
);

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <li>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-text-sec hover:text-text-main hover:bg-bg-elevated transition-all font-semibold text-sm"
        >
          <Github className="w-4 h-4" />
          <span className="hidden lg:inline">Developer</span>
        </a>
      </li>
      
      {isAuthenticated && (
        <NavItem to="/dashboard">Dashboard</NavItem>
      )}
    </>
  );

  return (
    <nav 
      className={`sticky top-0 w-full max-w-7xl mx-auto z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-bg-surface/90 backdrop-blur-xl border-b border-border-base shadow-sm py-3" 
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* 🟢 LOGO */}
          <Link to="/" className="flex items-center gap-3 group select-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-brand-sec flex items-center justify-center text-text-inv shadow-lg shadow-brand/25 transition-transform group-hover:scale-105 group-hover:rotate-3">
              <Wallet className="w-5 h-5" />
            </div>
            <span className="text-2xl font-black tracking-tight text-text-main">
              Task<span className="text-brand">Fi</span>
            </span>
          </Link>

          {/* 🖥️ DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-3">
            <ul className="flex items-center gap-1">
              {navLinks}
            </ul>

            <div className="h-8 w-px bg-border-base mx-2 opacity-50"></div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="w-10 h-10 flex items-center justify-center rounded-xl text-text-sec hover:text-brand hover:bg-brand/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* AUTH SECTION */}
            {isAuthenticated && user ? (
              <div className="flex items-center gap-4 pl-2">
                {/* Coin Badge */}
                <div className="hidden lg:flex items-center gap-2 bg-bg-surface px-4 py-2 rounded-full border border-border-base shadow-sm group hover:border-brand/30 transition-colors cursor-default">
                  <div className="p-1 rounded-full bg-yellow-400/10">
                    <Coins className="w-4 h-4 text-yellow-500" />
                  </div>
                  <span className="font-bold text-text-main text-sm tracking-wide">
                    0 <span className="text-text-muted font-medium text-xs">Coins</span>
                  </span>
                </div>

                {/* Profile Dropdown Trigger */}
                <div className="relative group cursor-pointer z-50">
                  <div className="relative">
                    <img 
                      src={user?.photoURL || "https://i.ibb.co/T0j000/anon.png"} 
                      alt="User" 
                      className="h-11 w-11 rounded-full object-cover border-2 border-bg-surface ring-2 ring-border-base group-hover:ring-brand transition-all"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-brand border-2 border-bg-surface rounded-full"></div>
                  </div>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-4 w-60 bg-bg-surface/95 backdrop-blur-xl border border-border-base rounded-2xl shadow-xl shadow-black/5 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right translate-y-2 group-hover:translate-y-0">
                    
                    <div className="px-4 py-4 border-b border-border-base mb-2 bg-bg-elevated/50 rounded-t-xl">
                      <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Signed in as</p>
                      <p className="text-sm font-extrabold text-text-main truncate">{user?.displayName}</p>
                      <p className="text-xs text-text-muted truncate">{user?.email}</p>
                    </div>
                    
                    <Link to="/dashboard" className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-text-sec hover:bg-bg-elevated hover:text-text-main transition-colors">
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>
                    
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50/50 dark:hover:bg-red-900/10 transition-colors mt-1"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 pl-2">
                <Link 
                  to="/login" 
                  className="px-5 py-2.5 rounded-xl text-text-main font-bold hover:bg-bg-elevated transition-colors text-sm"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="clay-btn text-sm shadow-xl shadow-brand/25 hover:shadow-brand/40"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* 📱 MOBILE MENU TOGGLE */}
          <div className="md:hidden flex items-center gap-2">
             <button onClick={toggleTheme} className="p-2 text-text-sec hover:text-brand hover:bg-bg-elevated rounded-xl transition-colors">
              {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-text-main hover:bg-bg-elevated rounded-xl transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE DROPDOWN */}
      <div 
        className={`md:hidden absolute w-full bg-bg-surface border-b border-border-base shadow-2xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {isAuthenticated && user && (
            <div className="flex items-center gap-4 p-4 bg-bg-elevated rounded-2xl border border-border-base">
               <img 
                  src={user?.photoURL} 
                  alt="User" 
                  className="h-12 w-12 rounded-full object-cover border-2 border-brand"
                />
                <div>
                  <p className="font-bold text-text-main text-lg">{user?.displayName}</p>
                  <p className="text-sm text-brand font-bold flex items-center gap-1.5">
                    <Coins className="w-4 h-4 text-yellow-500" /> 0 Coins
                  </p>
                </div>
            </div>
          )}

          <div className="space-y-1">
             <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-main font-semibold hover:bg-bg-elevated"
              >
                <Github className="w-5 h-5" /> Join as Developer
              </a>
              
              {isAuthenticated && (
                <Link 
                  to="/dashboard" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-main font-semibold hover:bg-bg-elevated"
                >
                  <LayoutDashboard className="w-5 h-5 text-brand" />
                  Dashboard
                </Link>
              )}
          </div>

          <div className="h-px bg-border-base w-full opacity-50"></div>

          {!isAuthenticated ? (
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3.5 rounded-xl border border-border-base text-text-main font-bold hover:bg-bg-elevated transition-colors">
                Login
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3.5 rounded-xl bg-brand text-text-inv font-bold shadow-lg hover:brightness-110 transition-all">
                Register
              </Link>
            </div>
          ) : (
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-red-500 font-bold hover:bg-red-50/50 dark:hover:bg-red-900/10 rounded-xl transition-colors"
            >
              <LogOut className="w-5 h-5" /> Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
