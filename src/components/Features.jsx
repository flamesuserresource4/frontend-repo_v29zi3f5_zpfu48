import { BookOpen, FileDown, Shield, MessageCircle, Star } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Curated Library',
    desc: 'Activities, worksheets, workbooks, videos, and templates across mindfulness, anxiety, depression, and more.'
  },
  {
    icon: FileDown,
    title: 'Member Downloads',
    desc: 'High‑quality PDFs and resources with secure, time‑limited links. Free samples for everyone.'
  },
  {
    icon: MessageCircle,
    title: 'Community & Support',
    desc: 'Simple messaging and support tickets to connect with peers and get help when you need it.'
  },
  {
    icon: Shield,
    title: 'Safe & Private',
    desc: 'Strong security, privacy‑first design, and accessible experiences that meet WCAG 2.1 AA.'
  },
  {
    icon: Star,
    title: 'Member Rewards',
    desc: 'Earn badges for milestones like first download, 5 sessions, and community contributions.'
  },
];

export default function Features() {
  return (
    <section id="benefits" className="py-16 sm:py-20 bg-gradient-to-b from-white to-rose-50/40 dark:from-neutral-950 dark:to-rose-950/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">Why members love it</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">Designed with therapists and creative practitioners in mind—calm, trauma‑informed, and practical.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6 hover:shadow transition-shadow focus-within:shadow">
              <div className="inline-flex items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 w-11 h-11">
                <f.icon aria-hidden className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
