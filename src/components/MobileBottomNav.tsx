import React from 'react';
import { 
  Home, 
  Briefcase, 
  MapPin, 
  FileText, 
  Menu,
  X
} from 'lucide-react';

export interface MobileBottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  onOpenChecklistModal: () => void;
  onScrollToForm: () => void;
  onOpenFreeSummaryModal?: () => void;
  isMenuOpen?: boolean;
  onToggleMenu?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage,
  onNavigate,
  onOpenMenu,
  onOpenChecklistModal,
  onScrollToForm,
  onOpenFreeSummaryModal,
  isMenuOpen = false,
  onToggleMenu,
}) => {
  const handleMenuClick = () => {
    if (onToggleMenu) {
      onToggleMenu();
    } else {
      onOpenMenu();
    }
  };

  return (
    <div 
      data-mobile-nav="true"
      className="mobile-bottom-nav-container fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 sm:hidden shadow-lg transition-colors"
    >
      <div className="grid grid-cols-5 items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <button
          type="button"
          onClick={() => {
            if (isMenuOpen && onToggleMenu) onToggleMenu();
            onNavigate('home');
          }}
          className={`mobile-nav-item-btn flex flex-col items-center justify-center py-1 px-1 rounded-xl cursor-pointer select-none ${
            currentPage === 'home' && !isMenuOpen
              ? 'text-amber-700 font-bold'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <div className={`p-1 rounded-lg transition-transform ${currentPage === 'home' && !isMenuOpen ? 'bg-amber-100 scale-105' : ''}`}>
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] mt-0.5 font-medium tracking-tight truncate max-w-full">
            Home
          </span>
        </button>

        {/* Services */}
        <button
          type="button"
          onClick={() => {
            if (isMenuOpen && onToggleMenu) onToggleMenu();
            onNavigate('services');
          }}
          className={`mobile-nav-item-btn flex flex-col items-center justify-center py-1 px-1 rounded-xl cursor-pointer select-none ${
            currentPage === 'services' && !isMenuOpen
              ? 'text-amber-700 font-bold'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <div className={`p-1 rounded-lg transition-transform ${currentPage === 'services' && !isMenuOpen ? 'bg-amber-100 scale-105' : ''}`}>
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="text-[10px] mt-0.5 font-medium tracking-tight truncate max-w-full">
            Services
          </span>
        </button>

        {/* Cities */}
        <button
          type="button"
          onClick={() => {
            if (isMenuOpen && onToggleMenu) onToggleMenu();
            onNavigate('locations');
          }}
          className={`mobile-nav-item-btn flex flex-col items-center justify-center py-1 px-1 rounded-xl cursor-pointer select-none ${
            currentPage === 'locations' && !isMenuOpen
              ? 'text-amber-700 font-bold'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <div className={`p-1 rounded-lg transition-transform ${currentPage === 'locations' && !isMenuOpen ? 'bg-amber-100 scale-105' : ''}`}>
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-[10px] mt-0.5 font-medium tracking-tight truncate max-w-full">
            Cities
          </span>
        </button>

        {/* Free Summary Tool Button */}
        <button
          type="button"
          onClick={() => {
            if (isMenuOpen && onToggleMenu) onToggleMenu();
            onOpenFreeSummaryModal?.();
          }}
          className="mobile-nav-item-btn flex flex-col items-center justify-center py-1 px-1 rounded-xl text-amber-800 hover:text-amber-900 cursor-pointer select-none"
          title="Get Free Tender Summary"
        >
          <div className="p-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-700">
            <FileText className="w-5 h-5" />
          </div>
          <span className="text-[10px] mt-0.5 font-black tracking-tight text-amber-800">
            Summary
          </span>
        </button>

        {/* Menu (Hamburger Drawer Trigger with Smooth Slide/Toggle Transition) */}
        <button
          type="button"
          onClick={handleMenuClick}
          className={`mobile-nav-item-btn flex flex-col items-center justify-center py-1 px-1 rounded-xl cursor-pointer select-none group ${
            isMenuOpen ? 'nav-menu-toggle-active text-amber-800' : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-label={isMenuOpen ? "Close Full Menu Drawer" : "Open Full Menu Drawer"}
          aria-expanded={isMenuOpen}
        >
          <div className={`p-1 rounded-lg border transition-all ${
            isMenuOpen 
              ? 'bg-amber-100 border-amber-400 text-amber-800 shadow-xs scale-105' 
              : 'bg-slate-100 border-slate-200 group-hover:border-amber-400 text-slate-700'
          }`}>
            <div className="nav-menu-toggle-icon flex items-center justify-center">
              {isMenuOpen ? (
                <X className="w-5 h-5 stroke-[2.5]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </div>
          </div>
          <span className={`text-[10px] mt-0.5 tracking-tight transition-colors ${
            isMenuOpen ? 'font-black text-amber-800' : 'font-bold text-slate-700'
          }`}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
