import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function App() {
  const [file, setFile] = useState(null);
  const [csvData, setCsvData] = useState([]);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://127.0.0.1:8000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    alert(JSON.stringify(data));
    const res = await fetch("http://127.0.0.1:8000/data");
const csv = await res.json();
setCsvData(csv);
  };
  const motors = [
    { name: "Hoist Motor", status: "Healthy" },
    { name: "Crowd Motor", status: "Healthy" },
    { name: "Swing Motor", status: "Fault" },
    { name: "Travel Motor", status: "Healthy" },
    { name: "Blower Motor", status: "Healthy" },
    { name: "Cooling Motor", status: "Healthy" },
    { name: "Auxiliary Motor", status: "Healthy" }
  ];

  const components = [
    { name: "Current Transformer (CT)", status: "Healthy" },
    { name: "IGBT Module", status: "Warning" },
    { name: "Power Block", status: "Healthy" },
    { name: "Rectifier Unit", status: "Healthy" }
  ];
  const chartData = [
  { name: "Mon", health: 95 },
  { name: "Tue", health: 92 },
  { name: "Wed", health: 88 },
  { name: "Thu", health: 90 },
  { name: "Fri", health: 85 },
];

  return (
  <div style={{ display: "flex" }}>
      <div
  style={{
    width: "220px",
    background: "#1e293b",
    color: "white",
    minHeight: "100vh",
    padding: "20px"
  }}
>
  <h2>ERS Monitor</h2>

  <p>🏠 Dashboard</p>
  <p>⚙ Motors</p>
  <p>🔌 Components</p>
  <p>📈 Analytics</p>
  <p>🚨 Alerts</p>
</div>

<div style={{ flex: 1 }}></div>
      <h1 style={{ color: "#003366" }}>
        Electric Rope Shovel Health Monitoring System
      </h1>
      <div style={{
  background: "white",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "10px"
}}>
  <h3>Upload Raspberry Pi Data</h3>

  <input
  type="file"
  onChange={(e) => setFile(e.target.files[0])}
/>

  <button
  onClick={handleUpload}
  style={{
    marginLeft: "10px",
    padding: "8px 15px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }}

  >
    Upload
  </button>
</div>

{csvData && (
  <div
    style={{
      background: "white",
      padding: "20px",
      marginTop: "20px",
      borderRadius: "10px"
    }}
  >
    <h3>Uploaded CSV Data</h3>
    <pre>{JSON.stringify(csvData, null, 2)}</pre>
  </div>
)}

<p style={{ color: "#666" }}>
  Real-Time Monitoring of Motors and Electrical Components
</p>
<div
  style={{
    background: "white",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px"
  }}
>
  <h3>Health Trend</h3>

  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="health"
        stroke="#2563eb"
      />
    </LineChart>
  </ResponsiveContainer>
</div>

      <h2>Fleet Overview</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Total Assets</h3>
          <h1>11</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Healthy Assets</h3>
          <h1 style={{ color: "green" }}>9</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Fault Assets</h3>
          <h1 style={{ color: "red" }}>2</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Health Score</h3>
          <h1 style={{ color: "#0066cc" }}>88%</h1>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "50%",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h2>Motor Health Status</h2>

          <table width="100%">
            <thead>
              <tr>
                <th align="left">Motor</th>
                <th align="left">Status</th>
              </tr>
            </thead>

            <tbody>
              {motors.map((motor, index) => (
                <tr key={index}>
                  <td>{motor.name}</td>
                  <td
                    style={{
                      color:
                        motor.status === "Healthy"
                          ? "green"
                          : "red",
                      fontWeight: "bold"
                    }}
                  >
                    {motor.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "50%",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h2>Component Monitoring</h2>

          <table width="100%">
            <thead>
              <tr>
                <th align="left">Component</th>
                <th align="left">Status</th>
              </tr>
            </thead>

            <tbody>
              {components.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td
                    style={{
                      color:
                        item.status === "Healthy"
                          ? "green"
                          : "orange",
                      fontWeight: "bold"
                    }}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px"
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "65%",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h2>Live Current Signal</h2>

          <div
            style={{
              height: "250px",
              border: "2px dashed #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            Current Signal Graph Will Appear Here
          </div>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "35%",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h2>Recent Alerts</h2>

          <ul>
            <li>⚠ Swing Motor - Inner Race Fault</li>
            <li>⚠ IGBT Temperature High</li>
            <li>⚠ Current Harmonic Increase</li>
            <li>⚠ Bearing Wear Detected</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;