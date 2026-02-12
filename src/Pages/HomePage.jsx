import HeroSection from "../Components/HomePage/HeroSection.jsx";
import BrandMarquee from "../Components/HomePage/BrandMarquee.jsx";
import Popular from "../Components/HomePage/Popular.jsx";

export default function HomePage() {
  return (
    <>
      <section className="">
        <HeroSection />
        <BrandMarquee />
        <Popular />
      </section>
    </>
  );
}
