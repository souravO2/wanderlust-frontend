import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Check, MapPin } from "lucide-react";

import { IDestination } from "@/lib/types/destinations";
import EditDestinationDialog from "@/components/site/destinations/EditDestinationDialog";
import DeleteDestinationDialog from "@/components/site/destinations/DeleteDestinationDialog";
import BookingCard from "@/components/site/booking/BookingCard";
import { tokenFromServer } from "@/lib/tokenServer";

const highlights = [
  "Professional local guide",
  "Comfortable accommodation",
  "Daily breakfast included",
  "Small group experience",
  "All entrance fees covered",
];

const DestinationDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const token = await tokenFromServer();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-destinations/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) notFound();
  const { result: destination }: { result?: IDestination } = await res.json();
  if (!destination) notFound();

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      {/* Actions */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/all-destinations"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Destinations
        </Link>
        <div className="flex items-center gap-3">
          <EditDestinationDialog destination={destination} />

          <DeleteDestinationDialog id={id} />
        </div>
      </div>

      {/* Hero image */}
      <div className="relative mt-6 h-72 w-full overflow-hidden rounded-sm md:h-80">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="mt-6 rounded-sm border border-border bg-white p-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          {/* Main */}
          <div>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {destination.country}
            </p>

            <h1 className="mt-2 text-4xl font-light tracking-tight text-foreground md:text-5xl">
              {destination.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <CalendarDays className="size-4" />
                {destination.duration}
              </span>
            </div>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Overview
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {destination.description}
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Highlights
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="size-4 shrink-0 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <BookingCard destination={destination} />
        </div>
      </div>
    </main>
  );
};

export default DestinationDetailsPage;
