import React from "react";

export default function Subs(props) {
  const { data } = props;
    
  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Subs</h1>
        {data?.business_events?.map((sub) => (
            <div key={sub.id} className="mb-4 border-b pb-4">
                <h2 className="text-xl font-semibold">{sub.title}</h2>
                <p className="text-gray-700">{sub.reason}</p>
                <p className="text-gray-700">{sub.start_date_time}</p>
                <p className="text-gray-700">{sub.end_date_time}</p>
            </div>
        ))}
    </div>
  );
}