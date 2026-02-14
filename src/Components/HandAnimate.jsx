import HandImage from "../assets/images/handmoving.webp";

export default function HandAnimate() {
  return (
    <section className="flex justify-center">
      <img
        src={HandImage}
        alt="moving hand anime"
        loading="lazy"
        className="hand w-80 lg:w-120"
      />
    </section>
  );
}
