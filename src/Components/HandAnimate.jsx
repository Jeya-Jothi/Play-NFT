import HandImage from "../assets/images/handmoving.webp";
import { motion } from "framer-motion";

export default function HandAnimate() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <img
        src={HandImage}
        alt="moving hand anime"
        loading="lazy"
        className="hand w-80 lg:w-120"
      />
    </motion.section>
  );
}
