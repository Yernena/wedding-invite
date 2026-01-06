import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
      >
        Srinivas Naidu
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ margin: "20px 0", color: "#d4af37" }}
      >
        &
      </motion.h2>

      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
      >
        Sowmya Prathibha
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        style={{ marginTop: 40 }}
      >
        A celebration of love, family and forever.
      </motion.p>
    </motion.section>
  );
}
