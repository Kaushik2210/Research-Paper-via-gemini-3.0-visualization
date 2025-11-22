import React, { useEffect, useState } from 'react';
import { NavItem, SectionId } from '../types';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const items: NavItem[] = [
  { id: SectionId.HERO, label: 'Introduction' },
  { id: SectionId.MECHANISMS, label: 'Mechanisms' },
  { id: SectionId.IMPACTS, label: 'Impacts' },
  { id: SectionId.POLITICS, label: 'Case Study: Politics' },
  { id: SectionId.DETECTION, label: 'The Detection Gap' },
  { id: SectionId.FUTURE, label: 'Future' },
];

export const Navigation: React.FC<NavigationProps> = ({ isDark, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState<string>(SectionId.HERO);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-16 z-50 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white dark:bg-slate-800 rounded-full md:hidden shadow-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav Bar */}
      <nav className={`fixed top-0 left-0 h-full md:w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-r border-slate-200 dark:border-slate-800 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-8">
          <h2 className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-8">Contents</h2>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-indigo-600 dark:border-indigo-400 pl-3' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white pl-3 border-l-2 border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs text-slate-500 leading-relaxed">
              Based on research by<br/>
              <span className="text-slate-700 dark:text-slate-300">Sodagum Venkata Kaushik</span><br/>
              & <span className="text-slate-700 dark:text-slate-300">A M Bojamma</span>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};