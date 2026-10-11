import React from 'react';
import { 
  Home, 
  Briefcase, 
  MapPin, 
  FileText, 
  Menu
} from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  onOpenChecklistModal: () => void;
  onScrollToForm: () => void;
  onOpenFreeSummaryModal?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage,
  onNavigate,
  onOpenMenu,
  onOpenChecklistModal,
  onScrollToForm,
  onOpenFreeSummaryModal,
}) => {
  return (
    <div 
      data-mobile-nav="true"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 sm:hidden shadow-lg transition-colors"
    >
      <div className="grid grid-cols-5 items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer select-none ${
            currentPage === 'home'
              ? 'text-amber-700 font-bold'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <div className={`p-1 rounded-lg transition-transform ${currentPage === 'home' ? 'bg-amber-100 scale-105' : ''}`}>
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] mt-0.5 font-medium tracking-tight truncate max-w-full">
            Home
          </span>
        </button>

        {/* Services */}
        <button
          type="button"
          onClick={() => onNavigate('services')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer select-none ${
            currentPage === 'services'
              ? 'text-amber-700 font-bold'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <div className={`p-1 rounded-lg transition-transform ${currentPage === 'services' ? 'bg-amber-100 scale-105' : ''}`}>
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="text-[10px] mt-0.5 font-medium tracking-tight truncate max-w-full">
            Services
          </span>
        </button>

        {/* Cities */}
        <button
          type="button"
          onClick={() => onNavigate('locations')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer select-none ${
            currentPage === 'locations'
              ? 'text-amber-700 font-bold'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <div className={`p-1 rounded-lg transition-transform ${currentPage === 'locations' ? 'bg-amber-100 scale-105' : ''}`}>
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-[10px] mt-0.5 font-medium tracking-tight truncate max-w-full">
            Cities
          </span>
        </button>

        {/* Free Summary Tool Button */}
        <button
          type="button"
          onClick={onOpenFreeSummaryModal}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-amber-800 hover:text-amber-900 transition-all cursor-pointer select-none"
          title="Get Free Tender Summary"
        >
          <div className="p-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-700">
            <FileText className="w-5 h-5" />
          </div>
          <span className="text-[10px] mt-0.5 font-black tracking-tight text-amber-800">
            Summary
          </span>
        </button>

        {/* Menu (Hamburger Drawer Trigger) */}
        <button
          type="button"
          onClick={onOpenMenu}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-600 hover:text-slate-900 transition-all cursor-pointer select-none group"
          aria-label="Open Full Menu Drawer"
        >
          <div className="p-1 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-amber-400 transition-colors">
            <Menu className="w-5 h-5 text-slate-700 group-hover:text-amber-700" />
          </div>
          <span className="text-[10px] mt-0.5 font-bold tracking-tight text-slate-700">
            Menu
          </span>
        </button>
      </div>
    </div>
  );
};
