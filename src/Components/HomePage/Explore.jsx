import { artwork } from "../../data/artwork";

export default function Explore() {
  return (
    <section className="my-20 lg:my-30">
      <p
        className="text-center text-white font-britanica 
      text-2xl md:text-3xl xl:text-4xl text-nowrap mb-10"
      >
        Explore Artworks
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {artwork.map((art) => (
            <div
              className="p-0.5 bg-linear-to-r from-white/50 
        to-white/0 rounded-2xl w-fit"
            >
              <div
                className="flex flex-col gap-2 bg-linear-to-r 
          from-(--color1) to-(--color3)/90 rounded-2xl px-1 py-3"
              >
                <div className="grid grid-cols-3 gap-2">
                  {art.imgs.slice(0, 3).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={art.name}
                      loading="lazy"
                      className={`w-30 h-30 object-cover ${
                        i === 0
                          ? "rounded-[20%_0_0_0]"
                          : i === 2
                            ? "rounded-[0_20%_0_0]"
                            : ""
                      }`}
                    />
                  ))}
                </div>
                <img
                  src={art.imgs[3]}
                  alt={art.name}
                  loading="lazy"
                  className="h-30 w-full object-cover"
                />

                <div className="px-2 flex items-center justify-between text-white">
                  <p className="">{art.name}</p>
                  <p className="border-2 border-(--color2) px-4 py-0.5 rounded-xl">
                    {art.items} items
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
