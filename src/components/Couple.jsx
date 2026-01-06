import { motion } from "framer-motion";
import bride from "../assets/bride.jpg";
import groom from "../assets/groom.jpg";

export default function Couple() {
  return (
    <section>
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 60 }}
      >
        Meet the Couple
      </motion.h2>

      <motion.div
        className="glass"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          display: "flex",
          gap: 80,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {/* Groom */}
        <div className="couple-card" style={{ maxWidth: 240 }}>
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto 18px",
              background: "rgba(255,255,255,0.08)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
            }}
          >
            <img
              src={groom}
              alt="Groom"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: 6 }}
          >
            Srinivas Naidu
          </motion.h3>

          <p style={{ opacity: 0.75 }}>The Groom</p>

          <span
            className="couple-heart"
            style={{ animation: "pulse 1.5s infinite" }}
          >
            ❤️
          </span>
        </div>

        {/* Bride */}
        <div className="couple-card" style={{ maxWidth: 240 }}>
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto 18px",
              background: "rgba(255,255,255,0.08)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
            }}
          >
            <img
              src={bride}
              alt="Bride"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ marginBottom: 6 }}
          >
            Sowmya Prathibha
          </motion.h3>

          <p style={{ opacity: 0.75 }}>The Bride</p>

          <span
            className="couple-heart"
            style={{ animation: "pulse 1.5s infinite" }}
          >
            ❤️
          </span>
        </div>
      </motion.div>
    </section>
  );
}
