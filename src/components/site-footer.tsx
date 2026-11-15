export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-6 text-sm text-muted-foreground sm:px-6">
        <p>© {new Date().getFullYear()} Chad Zarett</p>
        <a href="#top" className="transition-colors hover:text-foreground">
          Back to top
        </a>
      </div>
    </footer>
  );
}
