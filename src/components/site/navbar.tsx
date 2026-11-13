"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, User, X } from "lucide-react";
import { cn } from "cn";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Destinations", href: "/all-destinations", active: false },
  { label: "My Bookings", href: "/mybookings", active: false },
  { label: "Add Destinaton", href: "/add-destination", active: false },
];

const authLinks = [
  { label: "Profile", href: "/profile", icon: User },
  { label: "Sign In", href: "/signin" },
  { label: "Sign Up", href: "/signup" },
];

type MenuItem = {
  label: string;
  href: string;
  active?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
};

const menuItems: MenuItem[] = [...navLinks, ...authLinks];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-16 lg:grid lg:grid-cols-3 lg:px-8">
        {/* Mobile: logo + hamburger (desktop: nav links) */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="-ml-2 inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ label, href, active }) => (
            <Link
              key={label}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "whitespace-nowrap text-sm font-medium transition-colors hover:text-brand",
                active
                  ? "text-brand underline underline-offset-8"
                  : "text-foreground",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Center logo */}
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-tight text-brand lg:justify-self-center"
        >
          Wanderlast
        </Link>

        {/* Right actions (desktop) */}
        <div className="hidden items-center justify-end gap-6 lg:flex">
          {authLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors hover:text-brand"
            >
              {Icon ? <Icon className="size-4" /> : null}
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile: ghost spacer to balance layout */}
        <div className="size-10 lg:hidden" />
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Mobile" className="border-t px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {menuItems.map(({ label, href, active, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                    active
                      ? "text-brand underline underline-offset-4"
                      : "text-foreground",
                  )}
                >
                  {Icon ? <Icon className="size-4" /> : null}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
