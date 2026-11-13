import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const searchFields = [
  { label: "Location", value: "Address, City Or Zip" },
  { label: "Date/Duration", value: "Anytime/3 Days" },
  { label: "Budget", value: "$0-$3000" },
  { label: "People", value: "5-10" },
];

export function Banner() {
  return (
    <section className="relative isolate flex min-h-155 flex-col justify-between sm:min-h-165 lg:min-h-186.5">
      {/* Background image + overlay */}
      <Image
        src="/assets/Banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden className="-z-10 absolute inset-0 bg-black/25" />

      {/* Hero copy */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="max-w-2xl font-heading text-5xl leading-[1.1] font-medium text-white sm:text-6xl md:text-7xl lg:text-[76px]">
          Discover Your Next Adventure
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/95 sm:text-base">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/explore"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-7 text-sm font-semibold tracking-wide text-brand-foreground uppercase transition-colors hover:bg-brand/80"
          >
            Explore Now
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-white/50 px-7 text-sm font-semibold tracking-wide text-neutral-800 uppercase transition-colors hover:bg-white/90"
          >
            View Destination
          </Link>
        </div>
      </div>

      {/* Search bar */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
        <div className="grid justify-center grid-cols-1 overflow-hidden rounded-lg bg-black/50 shadow-lg backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-border">
          {searchFields.map(({ label, value }) => (
            <button
              key={label}
              type="button"
              className="flex flex-col cursor-pointer items-center border-b border-border px-6 py-4 text-left transition-colors hover:bg-white/25 sm:border-r sm:odd:border-r-0 lg:border-b-0 lg:odd:border-r"
            >
              <span className="block text-sm font-bold text-white">
                {label}
              </span>
              <span className="mt-0.5 block text-xs text-white">{value}</span>
            </button>
          ))}
          <button
            type="button"
            className="sm:col-span-2 lg:col-span-1 cursor-pointer inline-flex items-center justify-center bg-brand px-6 py-4 text-sm font-semibold uppercase tracking-wide text-brand-foreground transition-colors hover:bg-brand/80"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
