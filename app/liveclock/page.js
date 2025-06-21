"use client"
import { useEffect, useState } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  // This component is fully cient side

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>⏰ Live Timestamp (Client-side)</h1>
      <p>Time: <strong>{time}</strong></p>
    </div>
  );
}