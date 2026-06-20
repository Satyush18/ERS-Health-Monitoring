import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import motorData from "../data/motorData";

function Components() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ers-health-monitoring.onrender.com/data")
      .then((res) => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then((result) => {
        if (result && result.length > 0) {
          setData(result);
        } else {
          throw new Error("Empty");
        }
      })
      .catch(() => {
        setData(motorData);
      });
  }, []);

  const getMaxTemp = (name) => {
    const rows = data.filter((item) => item.Motor && item.Motor.trim() === name);
    return rows.length > 0
      ? Math.max(...rows.map((item) => Number(item.Temperature)))
      : 0;
  };

  const getMaxVibration = (name) => {
    const rows = data.filter((item) => item.Motor && item.Motor.trim() === name);
    return rows.length > 0
      ? Math.max(...rows.map((item) => Number(item.Vibration)))
      : 0;
  };

  const componentList = [
    { name: "Transformer (CT)", tempThreshold: 100, vibThreshold: 2, warningMsg: "High electrical stress detected" },
    { name: "IGBT Module", tempThreshold: 90, vibThreshold: 1.5, warningMsg: "Thermal stress observed" },
    { name: "Power Block", tempThreshold: 999, vibThreshold: 2, warningMsg: "Power fluctuations detected" },
    { name: "Rectifier Unit", tempThreshold: 100, vibThreshold: 999, warningMsg: "Rectification overload" },
    { name: "Cooling System", tempThreshold: 80, vibThreshold: 1.5, warningMsg: "Cooling load increased" },
    { name: "Motor Drive Controller", tempThreshold: 95, vibThreshold: 1.5, warningMsg: "Control system under stress" },
  ];

  const components = componentList.map((c) => {
    const t = getMaxTemp(c.name);
    const v = getMaxVibration(c.name);
    const isWarning = t > c.tempThreshold || v > c.vibThreshold;
    return {
      name: c.name,
      status: isWarning ? "Warning" : "Healthy",
      remarks: isWarning ? c.warningMsg : "Operating normally",
    };
  });

  const healthyCount = components.filter((c) => c.status === "Healthy").length;
  const warningCount = components.filter((c) => c.status === "Warning").length;

  return (
    <div>
      <div className="dash-hero">
        <h1>ERS Component Monitoring</h1>
        <p>Electrical Component Health Status</p>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">Total Components</div>
          <div className="kpi-value neutral">{components.length}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Healthy</div>
          <div className="kpi-value healthy">{healthyCount}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Warning</div>
          <div className="kpi-value warning">{warningCount}</div>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Component Status</h2>
            <div className="panel-subtitle">
              Derived from peak temperature and vibration readings
            </div>
          </div>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Status</th>
                <th>Remarks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {components.map((component, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: 500 }}>{component.name}</td>
                  <td>
                    <span className={`status-pill ${component.status === "Healthy" ? "healthy" : "warning"}`}>
                      {component.status === "Healthy"
                        ? <FaCheckCircle />
                        : <FaExclamationTriangle />}
                      {component.status}
                    </span>
                  </td>
                  <td style={{ color: "var(--text-secondary)" }}>
                    {component.remarks}
                  </td>
                  <td>
                    <button
                      className="btn-table-action"
                      onClick={() => navigate(`/component/${encodeURIComponent(component.name)}`)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Components;