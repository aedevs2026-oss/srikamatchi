export default function TrustBadges({ badges }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((badge) => (
        <li
          key={badge.id}
          className="animate-fade-up rounded-xl border border-border bg-surface p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckIcon />
          </div>
          <h3 className="text-base font-bold text-foreground">{badge.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            {badge.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
