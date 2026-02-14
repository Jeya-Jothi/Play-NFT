export default function JoinCommunity() {
  return (
    <section className="text-white mx-5 md:mx-20 lg:mx-50 xl:mx-70 2xl:mx-85 my-10">
      <div className="p-0.5 rounded-[120px_15px_120px_15px] bg-linear-to-r from-white/50 to-white/0">
        <div
          className="rounded-[120px_15px_120px_15px]
    py-10 px-10
    bg-linear-to-r from-[#28218a] to-[#104e81]
    flex flex-col items-center justify-center text-center gap-5"
        >
          <p className="font-britanica text-2xl lg:text-3xl xl:text-4xl max-w-2xl">
            Join Us to Create, Sell and Collect NFTS Digital Art
          </p>

          <button
            className="group relative overflow-hidden py-2 md:py-1.5 px-6 md:px-8
           rounded-xl bg-linear-to-r from-(--color2) to-(--color3) text-sm md:text-base 
           hover:shadow-xl shadow-white/20 transition-all duration-300"
          >
            Join Community
            <span
              className="pointer-events-none absolute top-[-30%] left-[-40%] h-[160%] w-[20%]
             rotate-25 bg-linear-to-r from-transparent via-white/60 to-transparent blur-xs
              opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
