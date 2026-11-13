import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Destinations", href: "#destinations" },
  { label: "My Bookings", href: "#bookings" },
  { label: "My Profile", href: "#profile" },
];

const supportLinks = [
  { label: "Help Center", href: "#help" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
];

function XLogo(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInLogo(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125M7.119 20.452H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function InstagramLogo(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881" />
    </svg>
  );
}

const socials = [
  { label: "X (Twitter)", href: "https://x.com/SouravSaifur", Icon: XLogo },
  { label: "LinkedIn", href: "https://x.com/SouravSaifur", Icon: LinkedInLogo },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dada.vai993",
    Icon: InstagramLogo,
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-20">
        {/* Brand */}
        <div className="flex flex-col text-center sm:text-left">
          <p className="font-heading text-5xl font-bold tracking-tight sm:text-6xl lg:text-[72px]">
            Wanderlast
          </p>
          <p className="mt-2 text-sm text-white/70 sm:text-base">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Link columns */}
        <div className="mt-12 text-center grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Newsletter */}
          <div>
            <h3 className="text-xs sm:text-left font-semibold tracking-[0.15em] text-white/90 uppercase">
              Newsletter
            </h3>
            <p className="mt-3 sm:text-left text-xs text-white/70">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form className="mt-4 flex mx-auto sm:mx-0 justify-center h-10 max-w-xs items-center rounded-sm bg-[#3a3a3a] ring-1 ring-transparent transition focus-within:ring-white">
              <input
                type="email"
                name="newsletter-email"
                placeholder="Enter email"
                aria-label="Email for newsletter"
                className="h-full flex-1 bg-transparent px-3 text-sm text-white placeholder:text-white/60 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="inline-flex cursor-pointer size-10 items-center justify-center text-white/90 transition-colors hover:text-white"
              >
                <ArrowUpRight className="size-4" aria-hidden />
              </button>
            </form>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className="text-xs font-semibold tracking-[0.15em] text-white/90 uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support">
            <h3 className="text-xs font-semibold tracking-[0.15em] text-white/90 uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-white/90 uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="tel:+17869011622"
                  className="transition-colors hover:text-white"
                >
                  +880 15217 02109
                </a>
              </li>
              <li>
                <a
                  href="mailto:saifurrahmansourav93@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  saifurrahmansourav93@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://s0v-portfolio.vercel.app/"
                  target="_blank"
                  className="transition-colors font-bold hover:text-white"
                >
                  Visit My Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center text-center justify-center gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">
            © 2026 Wanderlust. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/80 transition-colors hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
