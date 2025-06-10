// App.jsx
import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

const icons = [
  "🎨",
  "⚡",
  "📦",
  "🎸",
  "💡",
  "🔧",
  "🧠",
  "💻",
  "🚀",
  "🎯",
  "📚",
  "🕹️",
  "💰",
];

const bgColors = [
  "#f87171",
  "#fbbf24",
  "#34d399",
  "#60a5fa",
  "#a78bfa",
  "#f472b6",
  "#fcd34d",
  "#4ade80",
  "#38bdf8",
  "#c084fc",
  "#fb7185",
  "#facc15",
];

const LETTERS = {
  A: [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  B: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0],
  ],
  C: [
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [0, 1, 1],
  ],
  D: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 0],
  ],
  E: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  F: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 0],
    [1, 0, 0],
  ],
  G: [
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 1],
  ],
  H: [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  I: [[1], [1], [1], [1], [1]],
  J: [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
  ],
  K: [
    [1, 0, 1],
    [1, 1, 0],
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 1],
  ],
  L: [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  O: [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  P: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 0, 0],
    [1, 0, 0],
  ],
  Q: [
    [0, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
  ],
  R: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
  ],
  S: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  T: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  U: [
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  V: [
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
  ],
  W: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  X: [
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
  ],
  Y: [
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  Z: [
    [1, 1, 1],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
};

const IconGridText = ({ text, gridRef }) => {
  return (
    <div
      ref={gridRef}
      style={{
        display: "flex",
        gap: "1.5rem",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "1rem",
        background: "rgb(98, 90, 253)",
      }}
    >
      {[...text.toUpperCase()].map((char, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column" }}>
          {LETTERS[char]?.map((row, ri) => (
            <div key={ri} style={{ display: "flex" }}>
              {row.map((cell, ci) => {
                if (!cell)
                  return <div key={ci} style={{ width: 32, height: 32 }}></div>;
                const emoji = icons[(i + ri + ci) % icons.length];
                const bgColor = bgColors[(i + ri + ci) % bgColors.length];
                return (
                  <div
                    key={ci}
                    style={{
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 4,
                      backgroundColor: bgColor,
                      fontSize: "1rem",
                      border: `1px solid black`,
                    }}
                  >
                    {emoji}
                  </div>
                );
              })}
            </div>
          )) || <div style={{ color: "red" }}>?</div>}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [text, setText] = useState("MITO");
  const gridRef = useRef();

  const handleDownload = async () => {
    if (!gridRef.current) return;
    const canvas = await html2canvas(gridRef.current);
    const link = document.createElement("a");
    link.download = `${text}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div
      style={{
        padding: "1.5rem",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        GAME OF MITO Art Generator
      </h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "0.5rem",
          borderRadius: "4px",
          boxShadow: "0 0 4px rgba(0,0,0,0.1)",
          border: "1px solid #ccc",
        }}
        placeholder="Enter text"
      />
      <div style={{ marginTop: "1.5rem" }}>
        <IconGridText text={text} gridRef={gridRef} />
      </div>
      <button
        onClick={handleDownload}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#10b981",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Download as PNG
      </button>
    </div>
  );
}

export default App;
