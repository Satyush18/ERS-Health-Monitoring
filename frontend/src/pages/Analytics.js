import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function Analytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ers-health-monitoring.onrender.com/data")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="dash-hero">
        <h1>Analytics Dashboard</h1>
        <p>Motor Performance Analysis</p>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Temperature Analysis</h2>
            <div className="panel-subtitle">Per-motor temperature readings (&deg;C)</div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e6e9f2" />
            <XAxis dataKey="Motor" tick={{ fontSize: 12, fill: "#5b6478" }} />
            <YAxis tick={{ fontSize: 12, fill: "#5b6478" }} />
            <Tooltip />
            <Bar dataKey="Temperature" fill="#dc2626" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Vibration Analysis</h2>
            <div className="panel-subtitle">Per-motor vibration readings (mm/s)</div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e6e9f2" />
            <XAxis dataKey="Motor" tick={{ fontSize: 12, fill: "#5b6478" }} />
            <YAxis tick={{ fontSize: 12, fill: "#5b6478" }} />
            <Tooltip />
            <Bar dataKey="Vibration" fill="#1d4ed8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;