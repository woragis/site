export function SectionHeading({
  index,
  label,
  title,
  href,
}: {
  index: string;
  label: string;
  title: string;
  href?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span>{index}</span>{label}</p>
      <div className="section-heading__row">
        <h2>{title}</h2>
        {href && <a className="text-link" href={href}>Ver todos <span aria-hidden="true">↗</span></a>}
      </div>
    </div>
  );
}
