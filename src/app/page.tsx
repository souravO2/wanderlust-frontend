import { Banner } from "@/components/site/homepage/banner";
import { Explore } from "@/components/site/homepage/explore";
import { FAQ } from "@/components/site/homepage/FAQ";
import { Featured } from "@/components/site/homepage/featured";

export default function Home() {
  return (
    <>
      <Banner />
      <Featured />
      <FAQ />
      <Explore />
    </>
  );
}
