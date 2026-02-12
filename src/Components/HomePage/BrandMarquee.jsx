import Marquee from "react-fast-marquee";

import BinanceLogo from "../../assets/marquee brands/binance logo.webp";
import BitfinexLogo from "../../assets/marquee brands/bitfinex logo.webp";
import BlockchainLogo from "../../assets/marquee brands/blockchain logo.webp";
import CoinbaseLogo from "../../assets/marquee brands/coinbase logo.webp";
import ExodusLogo from "../../assets/marquee brands/exodus logo.webp";
import PaypalLogo from "../../assets/marquee brands/paypal logo.webp";
import RevolutLogo from "../../assets/marquee brands/revolut logo.webp";

export default function BrandMarquee() {
  const brands = [
    { id: 1, img: BinanceLogo },
    { id: 2, img: BitfinexLogo },
    { id: 3, img: BlockchainLogo },
    { id: 4, img: CoinbaseLogo },
    { id: 5, img: ExodusLogo },
    { id: 6, img: PaypalLogo },
    { id: 7, img: RevolutLogo },
  ];
  return (
    <section className="text-white md:mb-5 lg:mb-20">
      <div className="bg-linear-to-r from-(--color2)/50 to-(--color3)/50 py-5 relative">
        <Marquee speed={50} className="">
          {[...brands, ...brands].map((brand, index) => (
            <img
              src={brand.img}
              key={brand.id}
              alt="brands"
              className="w-30 md:w-35 lg:w-50 px-5 lg:px-10 shrink-0"
            />
          ))}
        </Marquee>
        <div className="absolute top-0 left-0 h-full w-20 bg-linear-to-r from-(--color1)/80 to-(--color1)/0 z-1"></div>
        <div className="absolute top-0 right-0 h-full w-20 bg-linear-to-l from-(--color1)/80 to-(--color1)/0 z-1"></div>
      </div>
    </section>
  );
}
