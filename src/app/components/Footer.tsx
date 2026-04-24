import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-stone-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-stone-300">
            <span>© 2026 Syallom Adinda Sriyanto.</span>
            <span className="hidden md:inline">Hak cipta dilindungi.</span>
          </div>
          
          <div className="flex items-center gap-2 text-stone-300">
            <span>Dirancang & Dibuat dengan</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>oleh Syallom</span>
          </div>
        </div>
      </div>
    </footer>
  );
}