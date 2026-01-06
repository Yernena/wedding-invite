import { motion } from "framer-motion";

// Import reel images (1 → 15)
import r1 from "../assets/reel/reel1.jpg";
import r2 from "../assets/reel/reel2.jpg";
import r3 from "../assets/reel/reel3.jpg";
import r4 from "../assets/reel/reel4.jpg";
import r5 from "../assets/reel/reel5.jpg";
import r6 from "../assets/reel/reel6.jpg";
import r7 from "../assets/reel/reel7.jpg";
import r8 from "../assets/reel/reel8.jpg";
import r9 from "../assets/reel/reel9.jpg";
import r10 from "../assets/reel/reel10.jpg";
import r11 from "../assets/reel/reel11.jpg";
import r12 from "../assets/reel/reel12.jpg";
import r13 from "../assets/reel/reel13.jpg";
import r14 from "../assets/reel/reel14.jpg";
import r15 from "../assets/reel/reel15.jpg";

const images = [
  r1, r2, r3, r4, r5,
  r6, r7, r8, r9, r10,
  r11, r12, r13, r14, r15,
];

export default function ReelGallery() {
  return (
    <section>
      <h2 style={{ textAlign: "center", marginBottom: 40 }}>
        Our Story in Moments
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
        }}
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
            }}
          >
            <img
              src={img}
              alt={`Reel moment ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
