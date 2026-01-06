import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";

const link = "https://maps.google.com/?q=Niddam+Village+Srikakulam";

export default function Venue() {
  return (
    <section>
      <motion.div
        className="glass"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Venue</h2>
        <p>Niddam Village, Srikakulam District</p>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: 20,
            color: "#d4af37",
            textDecoration: "none",
          }}
        >
          Open in Google Maps →
        </a>

        <div style={{ marginTop: 40 }}>
          <QRCodeCanvas value={link} size={160} />
        </div>
      </motion.div>
    </section>
  );
}
