export function EmptyState({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="empty-state"><span className="empty-state__symbol" aria-hidden="true">＋</span><h3>{title}</h3><p>{children}</p></div>;
}
