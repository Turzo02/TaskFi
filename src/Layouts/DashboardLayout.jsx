import { Outlet, useLocation } from "react-router";
import { useContext, useState, useLayoutEffect } from "react";
import {
  Moon,
  Sun,
  Bell,
  Search,
  LayoutGrid,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Sidebar from "../Components/Shared/Sidebar";
import Logo from "../Components/Shared/Logo";
import { ThemeContext } from "../Context/ThemeContext";

const DashboardLayout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🔄 Auto-close mobile menu on route change
  useLayoutEffect(() => {
    queueMicrotask(() => {
      setIsMobileMenuOpen((prev) => (prev ? false : prev));
    });
  }, [location.pathname]);

  // Role Logic
  const getRole = () => {
    if (location.pathname.includes("/admin")) return "admin";
    if (location.pathname.includes("/buyer")) return "buyer";
    return "worker";
  };
  const role = getRole();

  const getPageTitle = () => {
    const path = location.pathname.split("/").pop();
    return path
      ? path.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
      : "Overview";
  };

  return (
    <div className="flex h-screen max-w-7xl mx-auto bg-bg-primary relative overflow-hidden font-sans selection:bg-brand selection:text-white">
      {/* 📱 MOBILE OVERLAY (Backdrop) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* 📱 MOBILE SIDEBAR DRAWER */}
      <div
        className={`fixed inset-y-0 left-0 w-72  bg-bg-surface/90 backdrop-blur-xl border-r border-border-base z-50 transform transition-transform duration-300 ease-out md:hidden flex flex-col shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-border-base">
          <Logo />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-text-muted hover:text-brand bg-bg-elevated rounded-xl"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 px-2">
            Menu
          </p>
          <Sidebar role={role} />
        </div>

        <div className="p-6 bg-bg-elevated/30">
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${role === "worker" ? "bg-emerald-500" : role === "buyer" ? "bg-blue-500" : "bg-purple-500"} animate-pulse`}
            />
            <div>
              <p className="text-xs text-text-muted font-bold uppercase">
                Signed in as
              </p>
              <p className="text-sm font-black text-text-main capitalize">
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🖥️ DESKTOP SIDEBAR DOCK (Hidden on Mobile) */}
      <aside className="hidden md:flex w-72 flex-col h-full relative z-20 ">
        <div className="h-full w-full bg-bg-surface/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-xl flex flex-col overflow-hidden relative">

          <div className="p-6 pb-2">
            <Logo />
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar px-2">
            <Sidebar role={role} />
          </div>

          <div className="p-6 mt-auto">
            <div className="p-4 rounded-xl bg-bg-elevated/50 border border-white/5">
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">
                Current Role
              </p>
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${role === "worker" ? "bg-emerald-500" : role === "buyer" ? "bg-blue-500" : "bg-purple-500"} animate-pulse`}
                />
                <span className="text-sm font-black text-text-main capitalize">
                  {role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* 👉 RIGHT: Main Workspace */}
      <main className="flex-1 flex flex-col h-full relative z-10 overflow-hidden">
        {/* 🧠 HUD HEADER */}
        <header className="h-16 md:h-24 px-4 md:px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-xl bg-bg-surface border border-border-base text-text-main shadow-sm active:scale-95 transition-transform"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Breadcrumbs (Hidden on super small screens) */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-bg-surface border border-white/10 shadow-sm text-text-muted">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="hidden md:flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                  <span className="opacity-60">Workspace</span>
                  <ChevronRight className="w-3 h-3 opacity-40" />
                  <span
                    className={
                      role === "worker"
                        ? "text-emerald-500"
                        : role === "buyer"
                          ? "text-blue-500"
                          : "text-purple-500"
                    }
                  >
                    {role}
                  </span>
                </div>
                <h1 className="text-xl md:text-2xl font-black text-text-main tracking-tight leading-none">
                  {getPageTitle()}
                </h1>
              </div>
            </div>
          </div>

          {/* Action Island */}
          <div className="flex items-center gap-2 md:gap-4">

            {/* Notifications */}
            <button className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-bg-surface border border-white/10 text-text-muted hover:text-brand hover:bg-bg-elevated transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-bg-surface" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-bg-surface border border-white/10 text-text-muted hover:text-brand hover:bg-bg-elevated transition-all"
            >
              {theme === "dark" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </header>

        {/* 🖥️ CONTENT VIEWPORT */}
        <div className="flex-1 overflow-hidden px-4 md:px-8 pb-4 md:pb-8">
          <div className="h-full w-full overflow-y-auto custom-scrollbar rounded-2xl md:rounded-[2.5rem] bg-bg-surface/40 border border-white/5 backdrop-blur-md shadow-inner relative">
            <div className="p-4 md:p-10 min-h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
