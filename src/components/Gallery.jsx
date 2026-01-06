import { motion } from "framer-motion";
import c1 from "../assets/couple1.gif";
import c2 from "../assets/couple2.gif";

export default function Gallery() {
  return (
    <section>
      <h2>Our Moments</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 40,
        }}
      >
        {[c1, c2, c1, c2].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Couple moment"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              width: "100%",
              borderRadius: 24,
            }}
          />
        ))}
      </div>
    </section>
  );
}
