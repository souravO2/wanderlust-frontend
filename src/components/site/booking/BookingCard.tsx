"use client";

import { IDestination } from "@/lib/types/destinations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { tokenFromClient } from "@/lib/tokenClient";

const perks = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

const BookingCard = ({ destination }: { destination: IDestination }) => {
  const { data, error } = authClient.useSession();
  const user = data?.user;

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const departureDate = (e.target as HTMLFormElement).departureDate.value;

    const data = {
      userName: user?.name,
      userEmail: user?.email,
      userImage: user?.image,
      ...destination,
      departureDate: departureDate,
      bookingDate: new Date(),
    };

    const token = await tokenFromClient();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const bookingResponse = res.json();
    console.log(bookingResponse);
  };

  return (
    <aside className="h-fit rounded-sm border border-border p-5">
      <p className="text-sm text-muted-foreground">Starting from</p>
      <p className="mt-1 text-3xl font-semibold text-[#00A8E8]">
        ${destination.price}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">per person</p>
      <form onSubmit={handleBooking}>
        <Input
          aria-label="Departure date"
          name="departureDate"
          type="date"
          defaultValue={destination.departureDate}
          className="mt-4"
        />

        <Button
          type="submit"
          className="mt-4 w-full bg-[#00A8E8] text-white hover:bg-[#0095d1]"
        >
          Book Now
          <ArrowRight />
        </Button>
      </form>

      <ul className="mt-5 space-y-3 border-t border-border pt-5">
        {perks.map((perk) => (
          <li
            key={perk}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Check className="size-4 shrink-0 text-green-600" />
            {perk}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BookingCard;
