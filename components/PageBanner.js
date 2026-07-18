import Breadcrumb from "@/components/Breadcrumb";

export default function PageBanner({
  title,
  description,
  breadcrumbs = [],
}) {
  return (
    <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 py-10 md:py-14">
        {breadcrumbs.length ? (
          <div className="mb-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
        ) : null}
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-body md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

