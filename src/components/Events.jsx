import { motion } from "framer-motion";

const events = [
  {
    title: "Haldi",
    time: "5 March 2026 · 3:00 PM",
    venue: "Venue to be announced",
  },
  {
    title: "Raata",
    time: "6 March 2026 · 10:00 AM",
    venue: "Home",
  },
  {
    title: "Reception",
    time: "6 March 2026 · 4:00 PM",
    venue: "Niddam Village, Srikakulam",
  },
  {
    title: "Wedding",
    time: "6 March 2026 · 11:00 PM",
    venue: "Niddam Village, Srikakulam",
  },
  {
    title: "Reception",
    time: "8 March 2026 · 11:00 AM",
    venue: "Niddam Village, Srikakulam",
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
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          style={{ marginBottom: 40 }}
        >
          <h3 style={{ fontSize: 32 }}>{e.title}</h3>
          <p>{e.time}</p>
          <p style={{ color: "#d4af37" }}>{e.venue}</p>
        </motion.div>
      ))}
    </section>
  );
}
