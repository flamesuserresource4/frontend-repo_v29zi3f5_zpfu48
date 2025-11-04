export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200/70 dark:border-neutral-800/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="font-semibold">The Art Therapy Resources Hub</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">by Mindful Arts Therapy — Owner: Susan Day</p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
              <li>Email: <a className="underline underline-offset-2" href="mailto:sday@mindfulartstherapy.com.au">sday@mindfulartstherapy.com.au</a></li>
              <li>Phone: +61 421 582 067</li>
              <li>Maryborough, Australia</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
              <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:underline">Terms of Use</a></li>
              <li><a href="#accessibility" className="hover:underline">Accessibility</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Mindful Arts Therapy. All rights reserved.</p>
      </div>
    </footer>
  );
}
