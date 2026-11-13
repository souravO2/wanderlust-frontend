import Image from "next/image";

const features = [
  {
    icon: "/assets/ShieldCheck.png",
    alt: "Shield with a check mark",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/assets/MapTrifold.png",
    alt: "Folded map icon",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/assets/Headset.png",
    alt: "Headset icon",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function FAQ() {
  return (
    <section id="destinations" className="bg-[#e9f3f5]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="font-heading text-4xl font-medium text-neutral-900 sm:text-5xl lg:text-[56px]">
            Why Choose Wanderlust
          </h2>
          <p className="mt-2 text-sm text-neutral-600 sm:text-base">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-3 md:gap-7">
          {features.map(({ icon, alt, title, description }) => (
            <article
              key={title}
              className="rounded-sm bg-white p-6 shadow-md sm:p-8"
            >
              <Image
                src={icon}
                alt={alt}
                width={48}
                height={48}
                className="size-10 lg:size-12"
              />
              <h3 className="mt-5 font-heading text-2xl text-neutral-900 sm:mt-6 sm:text-[26px]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
