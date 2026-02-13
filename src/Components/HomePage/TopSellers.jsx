import { sellers } from "../../data/sellers";
import Marquee from "react-fast-marquee";

export default function TopSeller() {
  const firstRow = sellers.slice(0, 8);
  const secondRow = sellers.slice(8, 17);

  return (
    <section className="text-white  lg:my-10 xl:my-20">
      <p
        className="text-center text-white font-britanica 
      text-2xl md:text-3xl xl:text-4xl text-nowrap mb-10"
      >
        Top Sellers
      </p>
      <Marquee speed={20} pauseOnHover={true}>
        {firstRow.map((seller) => (
          <SellerCard
            key={seller.id}
            avatar={seller.avatar}
            name={seller.name}
            eth={seller.eth}
            customStyle="pr-5"
          />
        ))}
      </Marquee>

      <Marquee
        speed={20}
        pauseOnHover={true}
        direction="right"
        className="mt-5"
      >
        {secondRow.map((seller) => (
          <SellerCard
            key={seller.id}
            avatar={seller.avatar}
            name={seller.name}
            eth={seller.eth}
            customStyle="pr-5"
          />
        ))}
      </Marquee>
    </section>
  );
}

function SellerCard({ avatar, name, eth, customStyle }) {
  return (
    <div className="p-0.5 mx-2 w-fit rounded-2xl bg-linear-to-r from-(--color2)/80 to-(--color3)/50">
      <div
        className={`flex gap-5 bg-linear-to-r from-[#1e1147] to-[#163054] 
      w-fit p-2  rounded-2xl ${customStyle ? "pr-5 lg:pr-15" : "pr-15"}`}
      >
        <div>
          <img
            src={avatar}
            alt="User"
            loading="lazy"
            className="w-15 h-15 rounded-2xl object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p>{eth}</p>
        </div>
      </div>
    </div>
  );
}
