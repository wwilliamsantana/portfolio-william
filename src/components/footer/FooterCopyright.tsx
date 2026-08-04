export function FooterCopyright() {
  return (
    <div className=" flex flex-col items-center justify-between gap-4 border-t border-(--border) py-8 text-sm text-(--muted) md:flex-row">
      <p>© {new Date().getFullYear()} William Santana.</p>

      <p>Designed & Built with ☕ using Next.js.</p>
    </div>
  );
}
