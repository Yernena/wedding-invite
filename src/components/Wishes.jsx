import { useState, useEffect } from "react";

export default function Wishes() {
  const [wish, setWish] = useState("");
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    setWishes(JSON.parse(localStorage.getItem("wishes")) || []);
  }, []);

  const submit = () => {
    if (!wish.trim()) return;
    const updated = [wish, ...wishes];
    setWishes(updated);
    localStorage.setItem("wishes", JSON.stringify(updated));
    setWish("");
  };

  return (
    <section>
      <div className="glass">
        <h2>Leave Your Blessings</h2>

        <textarea
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder="Write something beautiful…"
          style={{
            width: "100%",
            height: 120,
            background: "transparent",
            color: "white",
            border: "1px solid #333",
            borderRadius: 16,
            padding: 16,
            fontSize: 16,
          }}
        />

        <button
          onClick={submit}
          style={{
            marginTop: 20,
            padding: "12px 30px",
            borderRadius: 30,
            border: "none",
            background: "white",
            color: "black",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Send
        </button>

        <div style={{ marginTop: 40 }}>
          {wishes.map((w, i) => (
            <p key={i}>✨ {w}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
