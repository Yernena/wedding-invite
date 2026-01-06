export default function Wishes() {
  const FORM_LINK = "https://forms.gle/R1uaWn1wbYum7BqL7";

  return (
    <section>
      <div className="glass" style={{ textAlign: "center" }}>
        <h2>Leave Your Blessings</h2>

        <p style={{ marginTop: 16 }}>
          Your kind words and blessings mean a lot to us 💖
        </p>

        <a
          href={FORM_LINK}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: 30,
            padding: "14px 32px",
            borderRadius: 30,
            background: "#FFD700",
            color: "#000",
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          ✨ Leave a Blessing
        </a>
      </div>
    </section>
  );
}
