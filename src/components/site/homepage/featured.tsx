import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IDestination } from "@/lib/types/destinations";
import { FeaturedCarousel } from "./featured-carousel";

export async function Featured() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/featured-destinations`,
  );
  const destinations: IDestination[] = await res.json();

  return (
    <section className="w-full bg-background px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Featured Destinations
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>
          <Link
            href="/all-destinations"
            className="inline-flex h-12 items-center justify-center gap-2 border border-border px-5 text-xs font-semibold tracking-widest text-foreground uppercase transition-colors hover:bg-muted"
          >
            All Destinations
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        {destinations.length > 0 ? (
          <FeaturedCarousel destinations={destinations} />
        ) : (
          <p className="mt-8 text-sm text-muted-foreground">
            No featured destinations available right now.
          </p>
        )}
      </div>
    </section>
  );
}
