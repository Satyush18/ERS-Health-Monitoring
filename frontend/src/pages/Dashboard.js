import { useState, useEffect } from "react";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

function Dashboard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://ers-health-monitoring.onrender.com/data")
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
    (item) => Number(item.Temperature) > 100 || Number(item.Vibration) > 2
  ).length;

  const healthyAssets = totalAssets - faultAssets;

  const healthScore =
    totalAssets > 0 ? Math.round((healthyAssets / totalAssets) * 100) : 0;

  return (
    <div>
      {/* HEADER */}
      <div className="dash-hero">
        <h1>Electric Rope Shovel Health Monitoring System</h1>
        <p>Real-Time Equipment Health Dashboard &amp; Predictive Maintenance</p>
      </div>

      {error && <div className="alert-banner">{error}</div>}

      {/* KPI CARDS */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">Total Assets</div>
          <div className="kpi-value accent">{totalAssets}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-label">Healthy Assets</div>
          <div className="kpi-value healthy">{healthyAssets}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-label">Fault Assets</div>
          <div className="kpi-value critical">{faultAssets}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-label">Health Score</div>
          <div className="kpi-value accent">{healthScore}%</div>
          <div className="kpi-sub">Healthy ÷ total assets</div>
        </div>
      </div>

      {/* SYSTEM STATUS */}
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">System Status</h2>
          </div>
        </div>

        {faultAssets > 0 ? (
          <div className="status-block">
            <div className="status-icon critical">
              <FaExclamationTriangle />
            </div>
            <div>
              <div className="status-text-main critical">
                Fault Detected — Maintenance Required
              </div>
              <div className="status-text-sub">
                {faultAssets} of {totalAssets} assets reporting abnormal
                readings
              </div>
            </div>
          </div>
        ) : (
          <div className="status-block">
            <div className="status-icon healthy">
              <FaCheckCircle />
            </div>
            <div>
              <div className="status-text-main healthy">
                All Systems Operating Normally
              </div>
              <div className="status-text-sub">
                {totalAssets} assets monitored, no abnormal readings
              </div>
            </div>
          </div>
        )}
      </div>

      {/* LIVE DATA TABLE */}
      <div className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Live Equipment Data</h2>
            <div className="panel-subtitle">
              Updated on page refresh from the monitoring feed
            </div>
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Motor</th>
                <th>Temperature</th>
                <th>Vibration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={4}>
                    <div className="empty-state">No equipment data available yet.</div>
                  </td>
                </tr>
              ) : (
                data.map((item, index) => {
                  const status =
                    Number(item.Temperature) > 100 || Number(item.Vibration) > 2
                      ? "Critical"
                      : "Healthy";

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
                          {status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;