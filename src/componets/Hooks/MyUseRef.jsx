import React, { useEffect, useRef, useState } from "react";

export default function MyUseRef() {
  const have = useRef();

  const [time, setTime] = useState(`${new Date()}`);

  setInterval(() => {
    setTime(`${new Date()}`);
  }, [1000]);

  useEffect(() => {
    have.current.style.background = "#" + Math.random().toString(16).slice(-6);
  }, [time]);
  return (
    <div ref={have} style={{ height: "100vh" }}>
      <h1>{time}</h1>
    </div>
  );
}
