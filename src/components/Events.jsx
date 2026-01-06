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
          <h3 style={{ fontSize: 28 }}>{e.title}</h3>
          <p>{e.time}</p>
          <p style={{ color: "#b9a37c" }}>{e.venue}</p>

          <a
            href={e.map}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: 12,
              textDecoration: "none",
              color: "#2b2b2b",
              borderBottom: "1px solid #b9a37c",
              paddingBottom: 2,
            }}
          >
            📍 View on Google Maps
          </a>
        </motion.div>
      ))}
    </section>
  );
}
