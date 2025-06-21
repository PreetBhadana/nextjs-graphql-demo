'use client';

import { useEffect, useState } from 'react';

// This demo explain how API call can be made from client side
// and update the UI in real time
// and now this is called as client side polling
// and this is not recommended for production
// as it will make a lot of API calls
// and will consume a lot of resources
// this is example of client side polling means it is not SSR.


export default function TimePoller() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      const res = await fetch('/api/time');
      const data = await res.json();
      setTime(data.time);
    };

    fetchTime(); // initial
    const interval = setInterval(fetchTime, 1000); // every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>⏳ Timestamp (via polling API)</h2>
      <p>Time: <strong>{time}</strong></p>
    </div>
  );
}