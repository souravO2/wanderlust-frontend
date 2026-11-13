"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  Star,
} from "lucide-react";
import { useRef, useState } from "react";
import { IDestination } from "@/lib/types/destinations";

const GAP = 24; // matches the gap-6 between cards

function rating(id: string) {
  const sum = id.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return (4 + (sum % 10) / 10).toFixed(1);
}

export function FeaturedCarousel({
  destinations,
}: {
  destinations: IDestination[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const total = destinations.length;

  const step = () => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return 0;
    return card.offsetWidth + GAP;
  };

  const scrollToPage = (next: number) => {
    const target = Math.min(Math.max(next, 1), total);
    trackRef.current?.scrollTo({
      left: (target - 1) * step(),
      behavior: "smooth",
    });
    setPage(target);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    const cardStep = step();
    if (!track || cardStep === 0) return;
    setPage(
      Math.min(total, Math.round(track.scrollLeft / cardStep) + 1)
    );
  };

  return (
    <div className="mt-8">
      {/* Cards track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {destinations.map((destination) => {
          const days = Number(destination.duration) || 1;
          return (
            <article
              key={destination._id}
              className="w-[85%] flex-none snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-sm sm:h-72">
                <Image
                  src={destination.imageUrl}
                  alt={destination.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-3 right-3 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs font-semibold shadow-sm">
                  {rating(destination._id)}
                  <Star className="size-3 fill-black text-black" />
                </span>
              </div>

              {/* Details */}
              <div className="pt-4">
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4" />
                  {destination.country}
                </p>
                <div className="mt-1 flex items-baseline justify-between gap-2">
                  <h3 className="truncate text-xl font-semibold text-foreground">
                    {destination.name}
                  </h3>
                  <p className="shrink-0 text-2xl font-semibold text-foreground">
                    ${destination.price}
                    <span className="text-xs font-normal text-muted-foreground">
                      /Person
                    </span>
                  </p>
                </div>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="size-4" />
                  {days} Days/{Math.max(days - 1, 0)} Nights
                </p>
                <Link
                  href={`/all-destinations/${destination._id}`}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-[#00A8E8] uppercase underline underline-offset-4"
                >
                  Book Now
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center gap-6">
        <p className="shrink-0 text-sm font-medium text-foreground">
          {page}/{total}
        </p>
        <div
          aria-hidden
          className="relative h-px flex-1 bg-border"
        >
          <div
            className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-300"
            style={{ width: `${(page / total) * 100}%` }}
          />
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Previous destinations"
            onClick={() => scrollToPage(page - 1)}
            disabled={page === 1}
            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next destinations"
            onClick={() => scrollToPage(page + 1)}
            disabled={page === total}
            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
