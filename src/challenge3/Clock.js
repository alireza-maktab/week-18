import React, { useState, useEffect } from "react";

function createRandomColor() {
  const rgb = new Array(3)
    .fill(null)
    .map(() => Math.floor(Math.random() * 255));
  return `rgba(${rgb.join(", ")})`;
}

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState("rgba(0,0,0)");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  useEffect(() => {
    setColor(createRandomColor());
  }, [time]);

  return <h1 style={{ color: color }}>{time.toLocaleTimeString()}</h1>;
}
