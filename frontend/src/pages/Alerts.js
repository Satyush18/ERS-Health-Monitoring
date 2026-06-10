import React, { useState, useEffect } from "react";

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
      <div
        style={{
          background: "#0f172a",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "25px"
        }}
      >
        <h1>Alerts Dashboard</h1>
        <p>Fault Detection & Warning System</p>
      </div>

      {alerts.length > 0 ? (
        alerts.map((alert, index) => (
          <div
            key={index}
            style={{
              background: "#fee2e2",
              border: "1px solid red",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "12px"
            }}
          >
            <h3>🚨 {alert.type} Alert</h3>

            <p>
              <strong>Motor:</strong> {alert.motor}
            </p>

            <p>
              <strong>Value:</strong> {alert.value}
            </p>
          </div>
        ))
      ) : (
        <div
          style={{
            background: "#dcfce7",
            padding: "20px",
            borderRadius: "12px"
          }}
        >
          <h2 style={{ color: "green" }}>
            ✅ No Active Alerts
          </h2>
        </div>
      )}
    </div>
  );
}

export default Alerts;