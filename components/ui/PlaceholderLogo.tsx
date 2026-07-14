export function PlaceholderLogo({ label = "LOGO" }: { label?: string }) {
  return (
    <div className="flex h-16 w-full items-center justify-center rounded-xl border border-dashed border-black/10 bg-surface-subtle text-xs font-medium text-ink-muted">
      {label}
    </div>
  );
}
