import Link from "next/link";

export default function LocationCard({ branch }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-bold text-foreground">{branch.name}</h3>
      <address className="mt-4 flex-1 not-italic text-sm leading-relaxed text-body">
        {branch.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <span className="mt-2 block font-medium text-primary">
          {branch.landmark}
        </span>
      </address>
      <Link
        href={branch.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-xl border-2 border-accent px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-accent hover:text-white"
      >
        Open in Google Maps
      </Link>
    </article>
  );
}
