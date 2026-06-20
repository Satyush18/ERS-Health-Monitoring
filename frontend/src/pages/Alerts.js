import React, { useState, useEffect } from "react";
import { FaExclamationTriangle, FaCheckCircle, FaThermometerFull, FaWaveSquare } from "react-icons/fa";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch("https://ers-health-monitoring.onrender.com/data")
      .then((res) => res.json())
      .then((data) => {
        let generatedAlerts = [];

        data.forEach((item) => {
          if (item.Temperature > 100) {
            generatedAlerts.push({
              type: "Temperature",
              motor: item.Motor,
              value: item.Temperature
            });
          }

          if (item.Vibration > 2) {
            generatedAlerts.push({
              type: "Vibration",
              motor: item.Motor,
              value: item.Vibration
            });
          }
        });

        setAlerts(generatedAlerts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="dash-hero">
        <h1>Alerts Dashboard</h1>
        <p>Fault Detection &amp; Warning System</p>
      </div>

      {alerts.length > 0 ? (
        <div className="alert-list">
          {alerts.map((alert, index) => (
            <div key={index} className="alert-card">
              <div className="alert-card-icon">
                {alert.type === "Temperature" ? (
                  <FaThermometerFull />
                ) : (
                  <FaWaveSquare />
                )}
              </div>

              <div className="alert-card-body">
                <div className="alert-card-title">
                  <FaExclamationTriangle />
                  {alert.type} Alert
                </div>
                <div className="alert-card-detail">
                  <span>
                    <strong>Motor:</strong> {alert.motor}
                  </span>
                  <span>
                    <strong>Value:</strong> {alert.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="panel no-alerts-panel">
          <div className="status-icon healthy" style={{ margin: "0 auto 14px" }}>
            <FaCheckCircle />
          </div>
          <h2 className="status-text-main healthy" style={{ textAlign: "center" }}>
            No Active Alerts
          </h2>
          <p className="status-text-sub" style={{ textAlign: "center" }}>
            All monitored equipment is within normal operating range.
          </p>
        </div>
      )}
    </div>
  );
}

export default Alerts;