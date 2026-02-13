import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FaHeart } from "react-icons/fa";

import Card1 from "../../assets/images/sticker2.webp";
import Card2 from "../../assets/images/sticker3.webp";
import Card3 from "../../assets/images/sticker4.webp";
import Card4 from "../../assets/images/sticker5.webp";
import Card5 from "../../assets/images/sticker6.webp";
import Card6 from "../../assets/images/sticker7.webp";

// Add more cards or duplicate the existing ones
const cards = [
  {
    id: 1,
    img: Card1,
    name: "Digital Decade",
    author: "Anthony gargasz",
    eth: 3.1,
    likes: "50k",
  },
  {
    id: 2,
    img: Card2,
    name: "Winter Jamz",
    author: "Anthony Tudaco",
    eth: 2.3,
    likes: "37k",
  },
  {
    id: 3,
    img: Card3,
    name: "Digital Decade",
    author: "Anthony gargasz",
    eth: 3.1,
    likes: "50k",
  },
  {
    id: 4,
    img: Card4,
    name: "Winter Jamz",
    author: "Anthony Tudaco",
    eth: 2.3,
    likes: "37k",
  },
  {
    id: 5,
    img: Card5,
    name: "Digital Decade",
    author: "Anthony gargasz",
    eth: 3.1,
    likes: "50k",
  },
  {
    id: 6,
    img: Card6,
    name: "Winter Jamz",
    author: "Anthony Tudaco",
    eth: 2.3,
    likes: "37k",
  },
  {
    id: 7,
    img: Card1,
    name: "Digital Decade",
    author: "Anthony gargasz",
    eth: 3.1,
    likes: "50k",
  },
  {
    id: 8,
    img: Card2,
    name: "Winter Jamz",
    author: "Anthony Tudaco",
    eth: 2.3,
    likes: "37k",
  },
  {
    id: 9,
    img: Card3,
    name: "Digital Decade",
    author: "Anthony gargasz",
    eth: 3.1,
    likes: "50k",
  },
  {
    id: 10,
    img: Card4,
    name: "Winter Jamz",
    author: "Anthony Tudaco",
    eth: 2.3,
    likes: "37k",
  },
  {
    id: 11,
    img: Card5,
    name: "Digital Decade",
    author: "Anthony gargasz",
    eth: 3.1,
    likes: "50k",
  },
  {
    id: 12,
    img: Card6,
    name: "Winter Jamz",
    author: "Anthony Tudaco",
    eth: 2.3,
    likes: "37k",
  },
];

export default function Popular() {
  return (
    <section className="py-10 xl:py-15 ">
      <p
        className="text-center text-white font-britanica 
      text-2xl md:text-3xl xl:text-4xl text-nowrap"
      >
        Popular this week
      </p>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1.5, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2.5, spaceBetween: 20 },
          1024: { slidesPerView: 3.5, spaceBetween: 25 },
          1280: { slidesPerView: 4.5, spaceBetween: 25 },
          1536: { slidesPerView: 5, spaceBetween: 30 }, // Target for 1920px screens
        }}
        className="popular-swiper w-full relative"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className="card overflow-hidden h-105 lg:h-125 xl:h-140 bg-linear-to-br
              from-(--color2)/40 to-(--color3)/40 border-2 border-gray-100/5
                    backdrop-blur-xl rounded-2xl relative my-10"
            >
              <img
                src={card.img}
                alt="Card with image"
                loading="lazy"
                className="rounded-b-2xl w-full h-full object-cover"
              />
              {/* Bid details */}
              <div
                className="absolute bottom-0 left-0 flex 
                      justify-between items-center w-full py-5 px-4 bg-linear-to-r 
                      from-(--color2)/60 to-(--color3)/60 rounded-b-2xl"
              >
                {/* Left */}
                <div>
                  <p className="text-white font-britanica">{card.name}</p>
                  <p className="text-white/80 text-sm -mt-1">
                    by {card.author}
                  </p>
                </div>
                {/* Right */}
                <div className="space-y-1">
                  <p className="text-white/90 text-nowrap text-xs lg:text-sm border-2 px-3.5 py-0.5 border-(--color2)/50 rounded-lg">
                    {card.eth} ETH
                  </p>
                  <p className="text-white flex items-center justify-center gap-1">
                    <FaHeart className="text-[#5c28c4]" />{" "}
                    <span>{card.likes}</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Background light */}
        <div
          className="absolute top-1/2 left-1/2 
        -translate-y-1/2 -translate-x-1/2 w-100 h-80 lg:w-140 lg:h-100
         bg-(--color3)/50 rounded-full blur-3xl"
        ></div>

        {/* Left fading */}
        <div
          className="absolute left-0 top-0 w-15 lg:w-30 h-full 
        bg-linear-to-r from-(--color1) to-(--color2)/5 z-5"
        ></div>
        {/* right fading */}
        <div
          className="absolute right-0 top-0 w-15 lg:w-30 h-full 
        bg-linear-to-l from-(--color1) to-(--color2)/5 z-5"
        ></div>
      </Swiper>
    </section>
  );
}
