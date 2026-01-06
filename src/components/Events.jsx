import { motion } from "framer-motion";

const HALDI_MAP =
  "https://www.google.com/maps/place/Hanuman+Temple,+Turakapeta/@18.4387376,83.8501575";

const GROOM_MAP =
  "https://www.google.com/maps/place/Niddam,+Srikakulam,+Andhra+Pradesh";

const events = [
  {
    title: "🌼 Haldi",
    time: "5 March 2026 · 3:00 PM",
    venue: "Hanuman Temple, Turakapeta",
    map: HALDI_MAP,
  },
  {
    title: "🎶 Raata (Bride)",
    time: "6 March 2026 · Morning",
    venue: "Hanuman Temple, Turakapeta",
    map: HALDI_MAP,
  },
  {
    title: "🎶 Raata (Groom)",
    time: "6 March 2026 · Morning",
    venue: "Niddam Village, Srikakulam",
    map: GROOM_MAP,
  },
  {
    title: "🎉 Reception 1",
    time: "6 March 2026 · 4:00 PM",
    venue: "Niddam Village, Srikakulam",
    map: GROOM_MAP,
  },
  {
    title: "💍 Wedding",
    time: "6 March 2026 · 11:00 PM",
    venue: "Niddam Village, Srikakulam",
    map: GROOM_MAP,
  },
  {
    title: "🥂 Reception 2",
    time: "8 March 2026 · 11:00 AM",
    venue: "Niddam Village, Srikakulam",
    map: GROOM_MAP,
  },
];

export default function Events() {
  return (
    <section>
      <h2>Wedding Events</h2>

      {events.map((e, i) => (
        <motion.div
          key={i}
          className="glass"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          style={{ marginBottom: 40 }}
        >
          <h3 style={{ fontSize: 28, color: "#ffffff" }}>{e.title}</h3>

          <p style={{ color: "rgba(255,255,255,0.75)" }}>{e.time}</p>

          {/* 🔥 FIXED GOOGLE LOCATION VISIBILITY */}
          <a
            href={e.map}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 12,
              textDecoration: "none",
              color: "#FFD700",                 // BRIGHT GOLD
              fontSize: 17,
              fontWeight: 600,
              textShadow: "0 0 6px rgba(255,215,0,0.35)", // glow
            }}
          >
            <span style={{ fontSize: 18 }}>📍</span>
            <span>{e.venue}</span>
          </a>
        </motion.div>
      ))}
    </section>
  );
}
