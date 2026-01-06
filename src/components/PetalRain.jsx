import "../styles/petal.css";

export default function PetalRain() {
  return (
    <div className="petal-container">
      {Array.from({ length: 15 }).map((_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${12 + Math.random() * 8}s`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}
