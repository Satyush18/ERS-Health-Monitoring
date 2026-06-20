import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

function Components() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ers-health-monitoring.onrender.com/data")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  const maxTemp =
    data.length > 0
      ? Math.max(...data.map((item) => Number(item.Temperature)))
      : 0;

  const maxVibration =
    data.length > 0
      ? Math.max(...data.map((item) => Number(item.Vibration)))
      : 0;

  const components = [
    {
      name: "Transformer (CT)",
      status: maxTemp > 100 || maxVibration > 2 ? "Warning" : "Healthy",
      remarks:
        maxTemp > 100 || maxVibration > 2
          ? "High electrical stress detected"
          : "Operating normally"
    },
    {
      name: "IGBT Module",
      status: maxTemp > 90 || maxVibration > 1.5 ? "Warning" : "Healthy",
      remarks:
        maxTemp > 90 || maxVibration > 1.5
          ? "Thermal stress observed"
          : "Operating normally"
    },
    {
      name: "Power Block",
      status: maxVibration > 2 ? "Warning" : "Healthy",
      remarks:
        maxVibration > 2
          ? "Power fluctuations detected"
          : "Operating normally"
    },
    {
      name: "Rectifier Unit",
      status: maxTemp > 110 ? "Warning" : "Healthy",
      remarks: maxTemp > 110 ? "Rectification overload" : "Operating normally"
    },
    {
      name: "Cooling System",
      status: maxTemp > 80 || maxVibration > 1.5 ? "Warning" : "Healthy",
      remarks:
        maxTemp > 80 || maxVibration > 1.5
          ? "Cooling load increased"
          : "Operating normally"
    },
    {
      name: "Motor Drive Controller",
      status: maxTemp > 95 || maxVibration > 1.5 ? "Warning" : "Healthy",
      remarks:
        maxTemp > 95 || maxVibration > 1.5
          ? "Control system under stress"
          : "Operating normally"
    }
  ];

  const healthyCount = components.filter(
    (item) => item.status === "Healthy"
  ).length;

  const warningCount = components.filter(
    (item) => item.status === "Warning"
  ).length;

  return (
    <div>
      {/* Header */}
      <div className="dash-hero">
        <h1>ERS Component Monitoring</h1>
        <p>Electrical Component Health Status</p>
      </div>

      {/* Summary Cards */}
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

      {/* Components Table */}
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
                        navigate(
                          `/component/${encodeURIComponent(component.name)}`
                        )
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