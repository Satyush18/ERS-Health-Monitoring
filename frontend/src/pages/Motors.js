import { useState, useEffect } from "react";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

function Motors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ers-health-monitoring.onrender.com/data")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  const driveData = data.filter(
    (item) =>
      item.Motor?.toLowerCase().includes("crowd") ||
      item.Motor?.toLowerCase().includes("swing") ||
      item.Motor?.toLowerCase().includes("hoist") ||
      item.Motor?.toLowerCase().includes("propel")
  );

  const auxiliaryData = data.filter(
    (item) =>
      !item.Motor?.toLowerCase().includes("crowd") &&
      !item.Motor?.toLowerCase().includes("swing") &&
      !item.Motor?.toLowerCase().includes("hoist") &&
      !item.Motor?.toLowerCase().includes("propel")
  );

  function getStatus(item) {
    if (item.Temperature > 100 || item.Vibration > 2) {
      return "Critical";
    }
    return "Healthy";
  }

  const totalMotors = data.length;

  const criticalMotors = data.filter(
    (item) => item.Temperature > 100 || item.Vibration > 2
  ).length;

  const healthyMotors = data.filter(
    (item) => item.Temperature <= 100 && item.Vibration <= 2
  ).length;

  const renderRows = (rows) =>
    rows.map((item, index) => {
      const status = getStatus(item);
      return (
        <tr key={index}>
          <td>{item.Motor}</td>
          <td className="mono">{item.Temperature}</td>
          <td className="mono">{item.Vibration}</td>
          <td>
            <span
              className={`status-pill ${
                status === "Critical" ? "critical" : "healthy"
              }`}
            >
              {status === "Critical" ? (
                <FaExclamationTriangle />
              ) : (
                <FaCheckCircle />
              )}
              {status}
            </span>
          </td>
        </tr>
      );
    });

  return (
    <div>
      {/* Header */}
      <div className="dash-hero">
        <h1>Motor Health Status</h1>
        <p>Real-Time Motor Monitoring Dashboard</p>
      </div>

      {/* Summary */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">Total Motors Monitored</div>
          <div className="kpi-value neutral">{totalMotors}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-label">Healthy Motors</div>
          <div className="kpi-value healthy">{healthyMotors}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-label">Critical Motors</div>
          <div className="kpi-value critical">{criticalMotors}</div>
        </div>
      </div>

      {/* Drive Motors */}
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Drive Motors</h2>
            <div className="panel-subtitle">
              Crowd, swing, hoist &amp; propel motors
            </div>
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Motor</th>
                <th>Temperature (&deg;C)</th>
                <th>Vibration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {driveData.length === 0 ? (
                <tr>
                  <td colSpan={4}>
                    <div className="empty-state">No drive motor data available.</div>
                  </td>
                </tr>
              ) : (
                renderRows(driveData)
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Auxiliary Motors */}
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Auxiliary Motors</h2>
            <div className="panel-subtitle">All other monitored motors</div>
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Motor</th>
                <th>Temperature (&deg;C)</th>
                <th>Vibration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {auxiliaryData.length === 0 ? (
                <tr>
                  <td colSpan={4}>
                    <div className="empty-state">No auxiliary motor data available.</div>
                  </td>
                </tr>
              ) : (
                renderRows(auxiliaryData)
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Motors;