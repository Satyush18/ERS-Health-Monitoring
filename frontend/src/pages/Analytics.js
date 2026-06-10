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
      <div
        style={{
          background: "#0f172a",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "25px"
        }}
      >
        <h1>Analytics Dashboard</h1>
        <p>Motor Performance Analysis</p>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "25px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2>Temperature Analysis</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Motor" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Temperature" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2>Vibration Analysis</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Motor" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Vibration" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;