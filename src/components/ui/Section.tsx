import type { ReactNode } from "react";

export function Section({
  title,
  subtitle,
  action,
  children,
  wrapperClassName = "",
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  /** Applied to the full-width wrapper, e.g. a background tint. */
  wrapperClassName?: string;
}) {
  return (
    <section className={wrapperClassName}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">{title}</h2>
            {subtitle && <p className="mt-2 max-w-xl text-brand-700">{subtitle}</p>}
          </div>
          {action}
        </div>
        {children}
      </div>
    </section>
  );
}
