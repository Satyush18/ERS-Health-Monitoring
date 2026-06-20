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

function ComponentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const componentData = data.filter(
    (item) => item.Motor === decodeURIComponent(id)
  );

  useEffect(() => {
    fetch("https://ers-health-monitoring.onrender.com/data")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  const maxTemp =
    componentData.length > 0
      ? Math.max(...componentData.map((item) => Number(item.Temperature)))
      : 0;

  const maxVibration =
    componentData.length > 0
      ? Math.max(...componentData.map((item) => Number(item.Vibration)))
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
    value: Number(item.Temperature)
  }));

  const vibrationData = componentData.map((item, index) => ({
    time: `T${index + 1}`,
    value: Number(item.Vibration)
  }));

  const currentData = componentData.map((item, index) => ({
    time: `T${index + 1}`,
    value: Math.round(Number(item.Temperature) * 1.5)
  }));

  const current =
    currentData.length > 0 ? currentData[currentData.length - 1].value : 0;

  const temperatureTrend =
    temperatureData.length > 1 &&
    temperatureData[temperatureData.length - 1].value >
      temperatureData[0].value
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

  if (maxTemp > 100) {
    recommendations.push("Inspect cooling system immediately.");
  }

  if (maxVibration > 2) {
    recommendations.push("Check bearings and rotating parts.");
  }

  if (healthScore < 75) {
    recommendations.push("Schedule maintenance within 24 hours.");
  }

  if (recommendations.length === 0) {
    recommendations.push("System operating normally.");
  }

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

  return (
    <div>
      <button className="btn-back" onClick={() => navigate("/components")}>
        <FaArrowLeft size={12} />
        Back to Components
      </button>

      <div className="dash-hero">
        <h1>{decodeURIComponent(id)}</h1>
        <p>Detailed Component Analysis</p>
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
          <div className="kpi-value neutral">{current} A</div>
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
          <div>
            <h2 className="panel-title">Current Signature Analysis</h2>
          </div>
        </div>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6e9f2" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#5b6478" }} />
              <YAxis tick={{ fontSize: 12, fill: "#5b6478" }} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#1d4ed8" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Temperature Trend */}
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Temperature Trend</h2>
          </div>
        </div>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6e9f2" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#5b6478" }} />
              <YAxis tick={{ fontSize: 12, fill: "#5b6478" }} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#dc2626" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Vibration Trend */}
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Vibration Trend</h2>
          </div>
        </div>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={vibrationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6e9f2" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#5b6478" }} />
              <YAxis tick={{ fontSize: 12, fill: "#5b6478" }} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trend Analysis */}
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Trend Analysis</h2>
          </div>
        </div>
        <ul className="plain-list">
          <li>
            Temperature Trend: <strong>{temperatureTrend}</strong>
          </li>
          <li>
            Vibration Trend: <strong>{vibrationTrend}</strong>
          </li>
          <li>
            Current Trend: <strong>{currentTrend}</strong>
          </li>
        </ul>
      </div>

      {/* Health Analysis */}
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Health Analysis</h2>
          </div>
        </div>
        <p className="health-analysis-text">
          Maximum Temperature: {maxTemp}&deg;C
          <br />
          Maximum Vibration: {maxVibration} mm/s
          <br />
          Estimated Current: {current} A
          <br />
          Risk Level: {riskLevel}
        </p>
      </div>

      {/* Recommendation */}
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Recommendation</h2>
          </div>
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