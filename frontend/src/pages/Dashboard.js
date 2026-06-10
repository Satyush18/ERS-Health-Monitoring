import { useState, useEffect } from "react";

import {
PieChart,
Pie,
Cell,
Tooltip,
Legend,
ResponsiveContainer,
} from "recharts";

function Dashboard() {
const [data, setData] = useState([]);
const [error, setError] = useState("");

useEffect(() => {
fetch("http://127.0.0.1:8000/data")
.then((res) => {
if (!res.ok) {
throw new Error("Failed to fetch data");
}
return res.json();
})
.then((result) => {
setData(result);
})
.catch((err) => {
console.error(err);
setError(err.message);
});
}, []);

const totalAssets = data.length;

const faultAssets = data.filter(
(item) =>
Number(item.Temperature) > 100 ||
Number(item.Vibration) > 2
).length;

const healthyAssets = totalAssets - faultAssets;

const healthScore =
totalAssets > 0
? Math.round((healthyAssets / totalAssets) * 100)
: 0;

const pieData = [
{
name: "Healthy Assets",
value: healthyAssets,
},
{
name: "Fault Assets",
value: faultAssets,
},
];

const COLORS = ["#22c55e", "#ef4444"];

return ( <div>
{/* HEADER */}
<div
style={{
background:
"linear-gradient(135deg,#0f172a,#1e3a8a)",
color: "white",
padding: "30px",
borderRadius: "15px",
marginBottom: "25px",
boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
}}
> <h1>
Electric Rope Shovel Health Monitoring System </h1>

    <p>
      Real-Time Equipment Health Dashboard &
      Predictive Maintenance
    </p>
  </div>

  {error && (
    <div
      style={{
        background: "#fee2e2",
        color: "#dc2626",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      {error}
    </div>
  )}

  {/* KPI CARDS */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(220px,1fr))",
      gap: "20px",
      marginBottom: "30px",
    }}
  >
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow:
          "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Total Assets</h3>
      <h1 style={{ color: "#2563eb" }}>
        {totalAssets}
      </h1>
    </div>

    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow:
          "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Healthy Assets</h3>
      <h1 style={{ color: "green" }}>
        {healthyAssets}
      </h1>
    </div>

    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow:
          "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Fault Assets</h3>
      <h1 style={{ color: "red" }}>
        {faultAssets}
      </h1>
    </div>

    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow:
          "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Health Score</h3>
      <h1 style={{ color: "#0ea5e9" }}>
        {healthScore}%
      </h1>
    </div>
  </div>

  {/* SYSTEM STATUS */}
  <div
    style={{
      background: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow:
        "0 4px 10px rgba(0,0,0,0.1)",
      marginBottom: "25px",
    }}
  >
    <h2>System Status</h2>

    {faultAssets > 0 ? (
      <h3 style={{ color: "red" }}>
        ⚠ Fault Detected - Maintenance Required
      </h3>
    ) : (
      <h3 style={{ color: "green" }}>
        ✅ All Systems Operating Normally
      </h3>
    )}
  </div>

  {/* PIE CHART */}
  <div
    style={{
      background: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow:
        "0 4px 10px rgba(0,0,0,0.1)",
      marginBottom: "25px",
    }}
  >
    <h2>Equipment Health Distribution</h2>

    <div
      style={{
        width: "100%",
        height: "350px",
      }}
    >
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>

  {/* LIVE DATA TABLE */}
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow:
        "0 4px 10px rgba(0,0,0,0.1)",
    }}
  >
    <h2>Live Equipment Data</h2>

    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr
          style={{
            background: "#0f172a",
            color: "white",
          }}
        >
          <th style={{ padding: "12px" }}>
            Motor
          </th>
          <th style={{ padding: "12px" }}>
            Temperature
          </th>
          <th style={{ padding: "12px" }}>
            Vibration
          </th>
          <th style={{ padding: "12px" }}>
            Status
          </th>
        </tr>
      </thead>

      <tbody>
  {data.map((item, index) => {
    const status =
      Number(item.Temperature) > 100 ||
      Number(item.Vibration) > 2
        ? "Critical"
        : "Healthy";

    return (
      <tr
        key={index}
        style={{
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <td
          style={{
            padding: "14px",
            textAlign: "center",
          }}
        >
          {item.Motor}
        </td>

        <td
          style={{
            padding: "14px",
            textAlign: "center",
          }}
        >
          {item.Temperature}
        </td>

        <td
          style={{
            padding: "14px",
            textAlign: "center",
          }}
        >
          {item.Vibration}
        </td>

        <td
          style={{
            padding: "14px",
            textAlign: "center",
            fontWeight: "bold",
            color:
              status === "Critical"
                ? "#dc2626"
                : "#16a34a",
          }}
        >
          {status}
        </td>
      </tr>
    );
  })}
</tbody>
    </table>
  </div>
</div>

);
}

export default Dashboard;
