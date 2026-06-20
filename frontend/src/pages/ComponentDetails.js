import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { FaArrowLeft } from "react-icons/fa";

const motorData = [
  { Motor: "Crowd Motor", Temperature: "78.5", Vibration: "1.1", Current: "45" },
  { Motor: "Swing Motor", Temperature: "82.3", Vibration: "1.4", Current: "52" },
  { Motor: "Hoist Motor", Temperature: "93.6", Vibration: "1.6", Current: "61" },
  { Motor: "Propel Motor", Temperature: "68.2", Vibration: "0.9", Current: "38" },
  { Motor: "Crowd Motor 2", Temperature: "104.8", Vibration: "2.3", Current: "78" },
  { Motor: "Swing Motor 2", Temperature: "88.1", Vibration: "1.6", Current: "57" },
  { Motor: "Hoist Motor 2", Temperature: "79.4", Vibration: "1.3", Current: "48" },
  { Motor: "Propel Motor 2", Temperature: "73.9", Vibration: "1.0", Current: "42" },
  { Motor: "Cooling Pump Motor", Temperature: "85.2", Vibration: "1.7", Current: "54" },
  { Motor: "Lube Oil Pump Motor", Temperature: "76.4", Vibration: "1.2", Current: "44" },
  { Motor: "Air Compressor Motor", Temperature: "91.5", Vibration: "1.9", Current: "63" },
  { Motor: "Conveyor Drive Motor", Temperature: "69.8", Vibration: "0.8", Current: "36" },
  { Motor: "Exciter Motor", Temperature: "86.7", Vibration: "1.3", Current: "55" },
  { Motor: "Auxiliary Blower Motor", Temperature: "72.1", Vibration: "1.0", Current: "40" },
  { Motor: "Transformer (CT)", Temperature: "88.0", Vibration: "1.2", Current: "58" },
  { Motor: "Transformer (CT)", Temperature: "92.5", Vibration: "1.4", Current: "62" },
  { Motor: "Transformer (CT)", Temperature: "96.0", Vibration: "1.6", Current: "66" },
  { Motor: "Transformer (CT)", Temperature: "101.5", Vibration: "1.8", Current: "72" },
  { Motor: "IGBT Module", Temperature: "75.0", Vibration: "1.0", Current: "43" },
  { Motor: "IGBT Module", Temperature: "80.0", Vibration: "1.2", Current: "50" },
  { Motor: "IGBT Module", Temperature: "86.0", Vibration: "1.3", Current: "56" },
  { Motor: "IGBT Module", Temperature: "91.5", Vibration: "1.4", Current: "62" },
  { Motor: "Power Block", Temperature: "70.0", Vibration: "1.1", Current: "39" },
  { Motor: "Power Block", Temperature: "74.5", Vibration: "1.5", Current: "46" },
  { Motor: "Power Block", Temperature: "79.0", Vibration: "1.9", Current: "52" },
  { Motor: "Power Block", Temperature: "83.5", Vibration: "2.2", Current: "58" },
  { Motor: "Rectifier Unit", Temperature: "95.0", Vibration: "1.3", Current: "65" },
  { Motor: "Rectifier Unit", Temperature: "99.0", Vibration: "1.4", Current: "69" },
  { Motor: "Rectifier Unit", Temperature: "103.0", Vibration: "1.5", Current: "74" },
  { Motor: "Rectifier Unit", Temperature: "107.0", Vibration: "1.6", Current: "79" },
  { Motor: "Cooling System", Temperature: "65.0", Vibration: "0.9", Current: "33" },
  { Motor: "Cooling System", Temperature: "72.0", Vibration: "1.2", Current: "40" },
  { Motor: "Cooling System", Temperature: "78.5", Vibration: "1.4", Current: "47" },
  { Motor: "Cooling System", Temperature: "84.0", Vibration: "1.6", Current: "53" },
  { Motor: "Motor Drive Controller", Temperature: "80.0", Vibration: "1.1", Current: "50" },
  { Motor: "Motor Drive Controller", Temperature: "86.0", Vibration: "1.3", Current: "56" },
  { Motor: "Motor Drive Controller", Temperature: "92.0", Vibration: "1.5", Current: "63" },
  { Motor: "Motor Drive Controller", Temperature: "97.5", Vibration: "1.7", Current: "69" },
];

function ComponentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState(""); // "api" or "local"

  useEffect(() => {
    fetch("https://ers-health-monitoring.onrender.com/data")
      .then((res) => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then((result) => {
        if (result && result.length > 0) {
          setData(result);
          setDataSource("api");
        } else {
          throw new Error("Empty API response");
        }
      })
      .catch(() => {
        setData(motorData);
        setDataSource("local");
      })
      .finally(() => setLoading(false));
  }, []);

  const componentData = data.filter(
    (item) => item.Motor === decodeURIComponent(id)
  );

  const maxTemp =
    componentData.length > 0
      ? Math.max(...componentData.map((item) => Number(item.Temperature)))
      : 0;

  const maxVibration =
    componentData.length > 0
      ? Math.max(...componentData.map((item) => Number(item.Vibration)))
      : 0;

  const maxCurrent =
    componentData.length > 0
      ? Math.max(...componentData.map((item) => Number(item.Current)))
      : 0;

  let healthScore = 100;
  if (maxTemp > 100) healthScore -= 20;
  else if (maxTemp > 90) healthScore -= 10;
  if (maxVibration > 2) healthScore -= 20;
  else if (maxVibration > 1.5) healthScore -= 10;

  let riskLevel = "Low";
  if (healthScore <= 90) riskLevel = "Medium";
  if (healthScore <= 75) riskLevel = "High";
  if (healthScore <= 50) riskLevel = "Critical";

  const temperatureData = componentData.map((item, index) => ({
    time: `T${index + 1}`,
    value: Number(item.Temperature),
  }));

  const vibrationData = componentData.map((item, index) => ({
    time: `T${index + 1}`,
    value: Number(item.Vibration),
  }));

  const currentData = componentData.map((item, index) => ({
    time: `T${index + 1}`,
    value: Number(item.Current),
  }));

  const temperatureTrend =
    temperatureData.length > 1 &&
    temperatureData[temperatureData.length - 1].value > temperatureData[0].value
      ? "Increasing"
      : "Stable";

  const vibrationTrend =
    vibrationData.length > 1 &&
    vibrationData[vibrationData.length - 1].value > vibrationData[0].value
      ? "Increasing"
      : "Stable";

  const currentTrend =
    currentData.length > 1 &&
    currentData[currentData.length - 1].value > currentData[0].value
      ? "Increasing"
      : "Stable";

  let recommendations = [];
  if (maxTemp > 100) recommendations.push("Inspect cooling system immediately.");
  if (maxVibration > 2) recommendations.push("Check bearings and rotating parts.");
  if (healthScore < 75) recommendations.push("Schedule maintenance within 24 hours.");
  if (recommendations.length === 0) recommendations.push("System operating normally.");

  let componentStatus = "Healthy";
  if (healthScore <= 90) componentStatus = "Warning";
  if (healthScore <= 75) componentStatus = "Critical";

  const healthColorClass =
    healthScore > 80 ? "healthy" : healthScore > 60 ? "warning" : "critical";

  const statusColorClass =
    componentStatus === "Healthy"
      ? "healthy"
      : componentStatus === "Warning"
      ? "warning"
      : "critical";

  if (loading) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "#5b6478" }}>
        <p>Loading component data...</p>
      </div>
    );
  }

  if (componentData.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "#5b6478" }}>
        <button className="btn-back" onClick={() => navigate("/components")}>
          <FaArrowLeft size={12} /> Back to Components
        </button>
        <p style={{ marginTop: "40px" }}>
          No data found for: <strong>{decodeURIComponent(id)}</strong>
        </p>
      </div>
    );
  }

  return (
    <div>
      <button className="btn-back" onClick={() => navigate("/components")}>
        <FaArrowLeft size={12} />
        Back to Components
      </button>

      <div className="dash-hero">
        <h1>{decodeURIComponent(id)}</h1>
        <p>
          Detailed Component Analysis{" "}
          {dataSource === "local" && (
            <span style={{ fontSize: "12px", color: "#f59e0b", marginLeft: "8px" }}>
              (Offline — Local Data)
            </span>
          )}
        </p>
      </div>

      {/* Top metrics */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">Health Score</div>
          <div className={`kpi-value ${healthColorClass}`}>{healthScore}%</div>
          <div className="health-bar-track">
            <div
              className={`health-bar-fill ${healthColorClass}`}
              style={{ width: `${healthScore}%` }}
            />
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Temperature</div>
          <div className="kpi-value neutral">{maxTemp}&deg;C</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Vibration</div>
          <div className="kpi-value neutral">{maxVibration} mm/s</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Current</div>
          <div className="kpi-value neutral">{maxCurrent} A</div>
        </div>
      </div>

      {/* Risk + Last Updated + Status */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">Risk Level</div>
          <div className="kpi-value neutral" style={{ fontSize: "20px" }}>
            {riskLevel}
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Last Updated</div>
          <div className="kpi-value neutral" style={{ fontSize: "16px" }}>
            {new Date().toLocaleString()}
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Component Status</div>
          <div className={`kpi-value ${statusColorClass}`} style={{ fontSize: "20px" }}>
            {componentStatus}
          </div>
        </div>
      </div>

      {/* Current Signature Analysis */}
      <div className="panel">
        <div className="panel-header">
          <h2 className="panel-title">Current Signature Analysis</h2>
        </div>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6e9f2" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#5b6478" }} />
              <YAxis tick={{ fontSize: 12, fill: "#5b6478" }} unit=" A" />
              <Tooltip formatter={(val) => [`${val} A`, "Current"]} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#1d4ed8"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Temperature Trend */}
      <div className="panel">
        <div className="panel-header">
          <h2 className="panel-title">Temperature Trend</h2>
        </div>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6e9f2" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#5b6478" }} />
              <YAxis tick={{ fontSize: 12, fill: "#5b6478" }} unit="°C" />
              <Tooltip formatter={(val) => [`${val}°C`, "Temperature"]} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#dc2626"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Vibration Trend */}
      <div className="panel">
        <div className="panel-header">
          <h2 className="panel-title">Vibration Trend</h2>
        </div>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={vibrationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6e9f2" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#5b6478" }} />
              <YAxis tick={{ fontSize: 12, fill: "#5b6478" }} unit=" mm/s" />
              <Tooltip formatter={(val) => [`${val} mm/s`, "Vibration"]} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#16a34a"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trend Analysis */}
      <div className="panel">
        <div className="panel-header">
          <h2 className="panel-title">Trend Analysis</h2>
        </div>
        <ul className="plain-list">
          <li>Temperature Trend: <strong>{temperatureTrend}</strong></li>
          <li>Vibration Trend: <strong>{vibrationTrend}</strong></li>
          <li>Current Trend: <strong>{currentTrend}</strong></li>
        </ul>
      </div>

      {/* Health Analysis */}
      <div className="panel">
        <div className="panel-header">
          <h2 className="panel-title">Health Analysis</h2>
        </div>
        <p className="health-analysis-text">
          Maximum Temperature: {maxTemp}&deg;C<br />
          Maximum Vibration: {maxVibration} mm/s<br />
          Maximum Current: {maxCurrent} A<br />
          Risk Level: {riskLevel}
        </p>
      </div>

      {/* Recommendation */}
      <div className="panel">
        <div className="panel-header">
          <h2 className="panel-title">Recommendation</h2>
        </div>
        <ul className="recommendation-list">
          {recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ComponentDetails;