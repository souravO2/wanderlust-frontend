import MyBookingCard from "@/components/site/booking/MyBookingCard";
import { auth } from "@/lib/auth";
import { tokenFromServer } from "@/lib/tokenServer";
import { IBooking } from "@/lib/types/Booking";
import { headers } from "next/headers";
import React from "react";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const token = await tokenFromServer();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mybookings/${user?.email}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const bookings = await res.json();
  console.log(bookings);

  return (
    <div className="container mx-auto max-w-5xl py-10 px-4 md:px-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-normal tracking-tight">My Bookings</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* Bookings List */}
      <div className="flex flex-col gap-6">
        {bookings.map((booking: IBooking) => {
          return <MyBookingCard booking={booking} key={booking._id} />;
        })}
      </div>
    </div>
  );
};

export default MyBookingsPage;
