import HeroSection from "../Components/HomePage/HeroSection.jsx";
import BrandMarquee from "../Components/HomePage/BrandMarquee.jsx";
import Popular from "../Components/HomePage/Popular.jsx";
import TopSeller from "../Components/HomePage/TopSellers.jsx";
import Explore from "../Components/HomePage/Explore.jsx";
import HandAnimate from "../Components/HandAnimate.jsx";

export default function HomePage() {
  return (
    <>
      <section className="">
        <HeroSection />
        <BrandMarquee />
        <Popular />
        <TopSeller />
        <Explore />
        <HandAnimate />
      </section>
    </>
  );
}
