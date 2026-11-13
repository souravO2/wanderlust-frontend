"use client";

import { useState } from "react";
import { ChevronDown, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { tokenFromClient } from "@/lib/tokenClient";

const CATEGORIES = [
  "Beach",
  "Mountains",
  "City",
  "Adventure",
  "Cultural",
  "Historical",
  "Wildlife",
  "Cruise",
] as const;

const INITIAL_STATE = {
  name: "",
  country: "",
  category: "",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

const fieldClasses =
  "h-9 w-full rounded-md border border-border bg-secondary px-3 text-sm text-foreground transition outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

export default function AddDestinationPage() {
  const [form, setForm] = useState(INITIAL_STATE);

  const set = (key: keyof typeof INITIAL_STATE) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: wire up to the API once the backend endpoint exists

    const token = await tokenFromClient();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/add-destination`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      },
    );

    const result = await res.json();
    console.log(result);
    console.log(form);
  };

  const handleCancel = () => setForm(INITIAL_STATE);

  return (
    <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-light sm:text-4xl">
          Add New Travel Package
        </h1>
      </div>
      <div className="mx-auto mt-10 max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
            {/* Destination Name */}
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm">
                Destination Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Bali Paradise"
                value={form.name}
                onChange={(e) => set("name")(e.target.value)}
                className={cn(fieldClasses, "mt-2")}
                required
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm">
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                placeholder="Indonesia"
                value={form.country}
                onChange={(e) => set("country")(e.target.value)}
                className={cn(fieldClasses, "mt-2")}
                required
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm">
                Category
              </label>
              <div className="relative mt-2">
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={(e) => set("category")(e.target.value)}
                  className={cn(
                    fieldClasses,
                    "appearance-none pr-9",
                    !form.category && "text-muted-foreground",
                  )}
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden
                  className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground"
                />
              </div>
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm">
                Price (USD)
              </label>
              <input
                id="price"
                name="price"
                type="number"
                min="0"
                placeholder="e.g., 1299"
                value={form.price}
                onChange={(e) => set("price")(e.target.value)}
                className={cn(fieldClasses, "mt-2")}
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label htmlFor="duration" className="block text-sm">
                Duration
              </label>
              <input
                id="duration"
                name="duration"
                type="text"
                placeholder="e.g., 7 Days/6 Nights"
                value={form.duration}
                onChange={(e) => set("duration")(e.target.value)}
                className={cn(fieldClasses, "mt-2")}
                required
              />
            </div>

            {/* Departure Date */}
            <div className="sm:col-span-2">
              <label htmlFor="departureDate" className="block text-sm">
                Departure Date
              </label>
              <input
                id="departureDate"
                name="departureDate"
                type="date"
                value={form.departureDate}
                onChange={(e) => set("departureDate")(e.target.value)}
                className={cn(fieldClasses, "mt-2")}
                required
              />
            </div>

            {/* Image URL */}
            <div className="sm:col-span-2">
              <label htmlFor="imageUrl" className="block text-sm">
                Image URL
              </label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={form.imageUrl}
                onChange={(e) => set("imageUrl")(e.target.value)}
                className={cn(fieldClasses, "mt-2")}
                required
              />
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Describe the travel experience..."
                value={form.description}
                onChange={(e) => set("description")(e.target.value)}
                className={cn(fieldClasses, "mt-2 h-auto resize-none py-2")}
                required
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleCancel}
              className="border-destructive/60 cursor-pointer text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2 data-icon="inline-start" aria-hidden />
              Cancel
            </Button>
            <Button
              type="submit"
              size="lg"
              className="bg-brand cursor-pointer text-brand-foreground hover:bg-brand/90"
            >
              <Save data-icon="inline-start" aria-hidden />
              Add Travel Package
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
