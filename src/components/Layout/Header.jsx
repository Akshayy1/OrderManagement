import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Bell, User, Menu } from 'lucide-react';
import NotificationDropdown from './NotificationDropdown';

export default function Header({
  theme,
  toggleTheme,
  notificationsOpen,
  setNotificationsOpen,
  notifications,
  unreadCount,
  onOpenNotifications,
  toggleSidebar,
  title
}) {
  return (
    <header className="flex items-center justify-between h-20 px-4 md:px-8 bg-transparent z-40 transition-all duration-300">
      <div className="flex items-center gap-4 lg:gap-0">
        <button
          onClick={toggleSidebar}
          className="p-2.5 text-textMuted hover:text-textMain hover:bg-white/10 rounded-xl transition-all duration-300 lg:hidden"
          title="Toggle Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <motion.h1 
          key={title}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-black text-textMain tracking-tight lg:hidden ml-2"
        >
          {title}
        </motion.h1>
      </div>

      <div className="flex items-center gap-4 p-2 bg-card/40 backdrop-blur-xl rounded-2xl shadow-sm border border-white/10 dark:border-white/5 ml-auto">
        <button
          onClick={toggleTheme}
          className="p-2.5 text-textMuted hover:text-textMain hover:bg-white/10 rounded-xl transition-all duration-300"
          title="Toggle Theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.div>
          </AnimatePresence>
        </button>

        <div className="relative">
          <button
            onClick={onOpenNotifications}
            className="relative p-2.5 text-textMuted hover:text-textMain hover:bg-white/10 rounded-xl transition-all duration-300"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-card"></span>
            )}
          </button>

          <NotificationDropdown
            isOpen={notificationsOpen}
            notifications={notifications}
            unreadCount={unreadCount}
          />
        </div>

        <div className="flex items-center gap-3 px-4 py-1.5 bg-primary/10 rounded-xl border border-primary/20 group cursor-pointer transition-all duration-300 hover:bg-primary/20">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <User className="w-4 h-4" />
          </div>
          <div className="hidden xl:block">
            <p className="text-[10px] font-black uppercase text-primary tracking-tighter leading-none">Access Level</p>
            <p className="text-xs font-bold text-textMain mt-0.5">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
