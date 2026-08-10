export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-14 py-9 flex flex-wrap justify-between gap-4 text-sm text-cream-dim">
      <span className="font-logo text-xl md:text-2xl tracking-wide uppercase font-bold text-cream">YASH.</span>
      <div className="flex gap-7">
        <a href="mailto:hello@yash.dev" className="hover:text-gold-bright transition-colors">
          Email
        </a>
        <a href="#" aria-label="LinkedIn Profile" className="hover:text-gold-bright transition-colors">
          LinkedIn
        </a>
        <a href="#" aria-label="GitHub Profile" className="hover:text-gold-bright transition-colors">
          GitHub
        </a>
      </div>
    </footer>
  );
}
