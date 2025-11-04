import Header from './components/Header';
import Hero from './components/Hero';
import ResourceShowcase from './components/ResourceShowcase';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <Header />
      <main>
        <Hero />
        <ResourceShowcase />
        <Features />
        <section id="about" className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">About Mindful Arts Therapy</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg">
              Our vision is to nurture healing through creativity. We offer a calm, safe, and empowering space for art therapists, counsellors, and creative practitioners to access quality resources and gentle guidance.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
