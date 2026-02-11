import { HiPlay } from "react-icons/hi";

import HeroSticker from "../../assets/images/sticker1.webp";

export default function HeroSection() {
  const users = [
    { id: 1, img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 3, img: "https://randomuser.me/api/portraits/men/75.jpg" },
    { id: 4, img: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: 5, img: "https://randomuser.me/api/portraits/women/68.jpg" },
  ];

  return (
    <section
      className="text-white mt-5 mb-80 lg:mt-10 grid lg:grid-cols-2 items-center
     gap-10 lg:gap-20 px-5 md:px-10 lg:px-20"
    >
      {/* Left */}
      <div className="space-y-6 lg:space-y-12">
        <div>
          <p className="font-britanica text-4xl xl:text-5xl">
            Discover, Collect and Sell Dope Art and NFTs
          </p>

          <p className="text-white/90 mt-3 lg:mt-5 lg:w-[70%]">
            The world<span className="font-sans!">'</span>s largest digital
            marketplace for crypto collections and non fungible tokens{" "}
            <span className="font-sans!">(</span>NFTs
            <span className="font-sans!">)</span>
          </p>
        </div>

        <div className="flex items-center gap-3 lg:gap-10">
          <button
            className="group relative overflow-hidden
             py-1.5 md:py-2 px-6 md:px-8 rounded-xl
             bg-linear-to-r from-(--color2) to-(--color3)
             text-sm md:text-base hover:shadow-lg shadow-white/20 transition-all duration-300"
          >
            Discover
            {/* shine */}
            <span
              className="pointer-events-none absolute top-[-30%] left-[-40%]
               h-[160%] w-[20%] rotate-25
               bg-linear-to-r from-transparent via-white/60 to-transparent
               blur-xs opacity-0 transition-all duration-700
               group-hover:left-[120%] group-hover:opacity-100"
            />
          </button>

          <button
            className="p-0.5 rounded-xl
                     bg-linear-to-r from-(--color2) to-(--color3) group"
          >
            <div
              className="py-1.5 px-6 md:px-8 bg-(--color1)/60 flex items-center gap-2 rounded-xl 
            group-hover:bg-(--color1) transition-all duration-300"
            >
              <span className="text-sm md:text-base text-white/90">Create</span>
            </div>
          </button>
          <div className="flex items-center gap-1 lg:gap-2 cursor-pointer group">
            <HiPlay className="text-2xl fill-current text-blue-300 group-hover:scale-115 transition-all duration-300" />
            <p className="text-xs md:text-sm underline text-white/90 group-hover:text-white">
              Watch a video
            </p>
          </div>
        </div>

        {/* Metrix */}
        <div className="md:w-[55%] lg:w-full xl:w-[80%] 2xl:w-[55%]">
          <div
            className="py-1.5 px-6 md:px-8 rounded-xl border border-gray-100/50 flex justify-between
           bg-linear-to-br from-(--color2) to-(--color3) text-sm md:text-base"
          >
            <div>
              <p className="font-britanica text-2xl lg:text-3xl">27k +</p>
              <p className="text-white/90">Art Works</p>
            </div>
            <div>
              <p className="font-britanica text-2xl lg:text-3xl">20k +</p>
              <p className="text-white/90">Auctions</p>
            </div>
            <div>
              <p className="font-britanica text-2xl lg:text-3xl">7k +</p>
              <p className="text-white/90">Artists</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10">
          {/* Avatars */}
          <div className="flex -space-x-5 lg:-space-x-7">
            {users.map((user) => (
              <img
                src={user.img}
                alt="avatar"
                className="w-10 h-10 lg:w-15 lg:h-15 rounded-full border-2 border-(--color2)"
              />
            ))}
          </div>
          <div>
            <p className="font-britanica text-2xl lg:text-3xl">40k +</p>
            <p className="text-sm -mt-1 md:mt-0 text-white/90">Active Users</p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex items-center justify-center">
        <div
          className="bg-linear-to-br from-(--color2)/40 to-(--color3)/40 border-2 border-gray-100/5
        backdrop-blur-xl rounded-2xl relative"
        >
          <img
            src={HeroSticker}
            alt="Card with image"
            className="rounded-b-2xl"
          />
          {/* Bid details */}
          <div
            className="absolute bottom-0 left-0 flex 
          justify-between items-center w-full px-8 lg:px-10 py-3 bg-linear-to-r 
          from-(--color2)/60 to-(--color3)/60 rounded-b-2xl"
          >
            <div className="space-y-1">
              <p className="text-white/90 text-xs lg:text-sm">Ending in:</p>
              <p>1h 20m 30s</p>

              <button
                className="group relative overflow-hidden
             text-xs lg:text-sm rounded-md px-5 py-1.5
             bg-linear-to-r from-(--color2) to-(--color3)
              hover:shadow-lg shadow-white/20 transition-all duration-300"
              >
                Place a Bid
                {/* shine */}
                <span
                  className="pointer-events-none absolute top-[-30%] left-[-40%]
               h-[160%] w-[20%] rotate-25
               bg-linear-to-r from-transparent via-white/60 to-transparent
               blur-xs opacity-0 transition-all duration-700
               group-hover:left-[120%] group-hover:opacity-100"
                />
              </button>
            </div>
            <div className="space-y-1">
              <p className="text-white/90 text-xs lg:text-sm">Highest Bid</p>
              <p>
                32<span className="font-sans!">.4 </span>ETH
              </p>
              <button className="bg-gray-800/60 hover:bg-gray-800/70 text-xs lg:text-sm rounded-md px-5 py-1.5 transition-all duration-300">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
