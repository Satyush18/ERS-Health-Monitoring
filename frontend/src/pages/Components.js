import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

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
        setData(motorData); // fallback to local data
      });
  }, []);

  // Per-component max values from actual data
  const getMaxTemp = (name) => {
    const rows = data.filter((item) => item.Motor === name);
    return rows.length > 0
      ? Math.max(...rows.map((item) => Number(item.Temperature)))
      : 0;
  };

  const getMaxVibration = (name) => {
    const rows = data.filter((item) => item.Motor === name);
    return rows.length > 0
      ? Math.max(...rows.map((item) => Number(item.Vibration)))
      : 0;
  };

  const components = [
    {
      name: "Transformer (CT)",
      get maxTemp() { return getMaxTemp(this.name); },
      get maxVibration() { return getMaxVibration(this.name); },
      get status() {
        return this.maxTemp > 100 || this.maxVibration > 2 ? "Warning" : "Healthy";
      },
      get remarks() {
        return this.maxTemp > 100 || this.maxVibration > 2
          ? "High electrical stress detected"
          : "Operating normally";
      }
    },
    {
      name: "IGBT Module",
      get maxTemp() { return getMaxTemp(this.name); },
      get maxVibration() { return getMaxVibration(this.name); },
      get status() {
        return this.maxTemp > 90 || this.maxVibration > 1.5 ? "Warning" : "Healthy";
      },
      get remarks() {
        return this.maxTemp > 90 || this.maxVibration > 1.5
          ? "Thermal stress observed"
          : "Operating normally";
      }
    },
    {
      name: "Power Block",
      get maxTemp() { return getMaxTemp(this.name); },
      get maxVibration() { return getMaxVibration(this.name); },
      get status() {
        return this.maxVibration > 2 ? "Warning" : "Healthy";
      },
      get remarks() {
        return this.maxVibration > 2
          ? "Power fluctuations detected"
          : "Operating normally";
      }
    },
    {
      name: "Rectifier Unit",
      get maxTemp() { return getMaxTemp(this.name); },
      get maxVibration() { return getMaxVibration(this.name); },
      get status() {
        return this.maxTemp > 100 ? "Warning" : "Healthy";
      },
      get remarks() {
        return this.maxTemp > 100 ? "Rectification overload" : "Operating normally";
      }
    },
    {
      name: "Cooling System",
      get maxTemp() { return getMaxTemp(this.name); },
      get maxVibration() { return getMaxVibration(this.name); },
      get status() {
        return this.maxTemp > 80 || this.maxVibration > 1.5 ? "Warning" : "Healthy";
      },
      get remarks() {
        return this.maxTemp > 80 || this.maxVibration > 1.5
          ? "Cooling load increased"
          : "Operating normally";
      }
    },
    {
      name: "Motor Drive Controller",
      get maxTemp() { return getMaxTemp(this.name); },
      get maxVibration() { return getMaxVibration(this.name); },
      get status() {
        return this.maxTemp > 95 || this.maxVibration > 1.5 ? "Warning" : "Healthy";
      },
      get remarks() {
        return this.maxTemp > 95 || this.maxVibration > 1.5
          ? "Control system under stress"
          : "Operating normally";
      }
    }
  ];

  const healthyCount = components.filter((item) => item.status === "Healthy").length;
  const warningCount = components.filter((item) => item.status === "Warning").length;

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
                    <span
                      className={`status-pill ${
                        component.status === "Healthy" ? "healthy" : "warning"
                      }`}
                    >
                      {component.status === "Healthy" ? (
                        <FaCheckCircle />
                      ) : (
                        <FaExclamationTriangle />
                      )}
                      {component.status}
                    </span>
                  </td>
                  <td style={{ color: "var(--text-secondary)" }}>
                    {component.remarks}
                  </td>
                  <td>
                    <button
                      className="btn-table-action"
                      onClick={() =>
                        navigate(`/component/${encodeURIComponent(component.name)}`)
                      }
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