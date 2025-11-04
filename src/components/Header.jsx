import { Heart, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16" role="navigation" aria-label="Main">
          <a href="#home" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded">
            <span className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-rose-400 to-amber-300 p-2 text-white shadow">
              <Heart aria-hidden className="h-5 w-5" />
            </span>
            <span className="sr-only">The Art Therapy Resources Hub</span>
            <div className="flex flex-col" aria-hidden>
              <span className="text-sm font-semibold tracking-wide text-rose-600 dark:text-rose-400">
                Mindful Arts Therapy
              </span>
              <span className="font-bold leading-tight">Art Therapy Resources Hub</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded px-1" href="#resources">Resources</a>
            <a className="hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded px-1" href="#benefits">Why members love it</a>
            <a className="hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded px-1" href="#about">About</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#samples" className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">Browse Free Samples</a>
            <a href="#join" className="px-4 py-2 rounded-lg bg-rose-600 text-white shadow hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">Join Now</a>
          </div>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-neutral-300 dark:border-neutral-700" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
          <div className="px-4 py-4 space-y-2">
            <a className="block" href="#resources">Resources</a>
            <a className="block" href="#benefits">Why members love it</a>
            <a className="block" href="#about">About</a>
            <div className="pt-2 flex gap-2">
              <a href="#samples" className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-center">Free Samples</a>
              <a href="#join" className="flex-1 px-4 py-2 rounded-lg bg-rose-600 text-white text-center">Join Now</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
