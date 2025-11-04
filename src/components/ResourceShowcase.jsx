import { Download, Heart } from 'lucide-react';

const items = [
  { id: 1, title: 'Mindfulness Journal Pages', type: 'Worksheet', tags: ['mindfulness', 'reflection'], cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Anxiety Grounding Cards', type: 'Activity', tags: ['anxiety', 'grounding'], cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Breathing Exercise Poster', type: 'Template', tags: ['breath', 'poster'], cover: 'https://images.unsplash.com/photo-1487956382255-4a4fd9c7566e?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Gentle Self‑Compassion Workbook', type: 'Workbook', tags: ['compassion', 'healing'], cover: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1200&auto=format&fit=crop' },
];

export default function ResourceShowcase() {
  return (
    <section id="resources" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Explore free samples</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">A small taste of the growing library. Members unlock the full collection.</p>
          </div>
          <a href="#join" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700">Become a member</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.id} className="group rounded-2xl overflow-hidden border border-neutral-200/70 dark:border-neutral-800/70 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.cover} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-wide text-rose-600 dark:text-rose-400">{item.type}</p>
                <h3 className="mt-1 font-semibold leading-snug">{item.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-1 text-neutral-700 dark:text-neutral-300">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                  <button className="inline-flex p-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 text-rose-600" aria-label="Like">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
