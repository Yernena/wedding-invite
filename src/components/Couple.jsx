import { motion } from "framer-motion";
import bride from "../assets/bride.gif";
import groom from "../assets/groom.gif";

export default function Couple() {
  return (
    <section>
      <motion.div
        className="glass"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ display: "flex", gap: 60, justifyContent: "center" }}
      >
        <div>
          <img src={groom} alt="Groom" width="180" />
          <h3>Srinivas Naidu</h3>
          <p>The Groom</p>
        </div>

        <div>
          <img src={bride} alt="Bride" width="180" />
          <h3>Sowmya Prathibha</h3>
          <p>The Bride</p>
        </div>
      </motion.div>
    </section>
  );
}
