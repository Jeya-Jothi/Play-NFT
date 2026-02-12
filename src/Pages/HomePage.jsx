import HeroSection from "../Components/HomePage/HeroSection.jsx";
import BrandMarquee from "../Components/HomePage/BrandMarquee.jsx";
import Popular from "../Components/HomePage/Popular.jsx";
import TopSeller from "../Components/HomePage/TopSellers.jsx";

export default function HomePage() {
  return (
    <>
      <section className="">
        <HeroSection />
        <BrandMarquee />
        <Popular />
        <TopSeller />
      </section>
    </>
  );
}
