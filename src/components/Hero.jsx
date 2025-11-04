import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4l5Zg0vZ9J8B0xvC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white dark:from-neutral-950/60 dark:via-neutral-950/60 dark:to-neutral-950" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 dark:border-rose-900/40 bg-rose-50/70 dark:bg-rose-950/30 px-3 py-1 text-rose-700 dark:text-rose-300 text-sm">
          <Sparkles className="h-4 w-4" aria-hidden />
          Nurture healing through creativity
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          The Art Therapy Resources Hub
        </h1>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg">
          A calm, safe, and empowering library of activities, worksheets, workbooks, and tools to support your practice.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#join" className="px-6 py-3 rounded-xl bg-rose-600 text-white shadow-lg shadow-rose-600/20 hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">Join the Hub</a>
          <a href="#resources" className="px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 backdrop-blur hover:bg-white dark:hover:bg-neutral-900">Browse Free Samples</a>
        </div>
      </div>
    </section>
  );
}
