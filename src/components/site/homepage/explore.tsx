import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Explore() {
  return (
    <section className="relative isolate flex min-h-[360px] items-center justify-center overflow-hidden sm:min-h-[400px] lg:min-h-[440px]">
      {/* Background image + overlay */}
      <Image
        src="/assets/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden className="-z-10 absolute inset-0 bg-black/45" />

      <div className="px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-4xl font-light text-white sm:text-5xl lg:text-[52px]">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-sm text-white/90 sm:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>
        <a
          href="book"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-7 text-sm font-semibold tracking-wide text-neutral-900 uppercase transition-colors hover:bg-neutral-200"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
