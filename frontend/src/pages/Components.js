import React, { useState, useEffect } from "react";

function Components() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/data")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  const maxTemp =
    data.length > 0
      ? Math.max(
          ...data.map((item) =>
            Number(item.Temperature)
          )
        )
      : 0;

  const maxVibration =
    data.length > 0
      ? Math.max(
          ...data.map((item) =>
            Number(item.Vibration)
          )
        )
      : 0;

  const components = [
    {
      name: "Transformer (CT)",
      status:
        maxTemp > 100 || maxVibration > 2
          ? "Warning"
          : "Healthy",
      remarks:
        maxTemp > 100 || maxVibration > 2
          ? "High electrical stress detected"
          : "Operating normally",
    },

    {
      name: "IGBT Module",
      status:
        maxTemp > 90 || maxVibration > 1.5
          ? "Warning"
          : "Healthy",
      remarks:
        maxTemp > 90 || maxVibration > 1.5
          ? "Thermal stress observed"
          : "Operating normally",
    },

    {
      name: "Power Block",
      status:
        maxVibration > 2
          ? "Warning"
          : "Healthy",
      remarks:
        maxVibration > 2
          ? "Power fluctuations detected"
          : "Operating normally",
    },

    {
      name: "Rectifier Unit",
      status:
        maxTemp > 110
          ? "Warning"
          : "Healthy",
      remarks:
        maxTemp > 110
          ? "Rectification overload"
          : "Operating normally",
    },

    {
      name: "Cooling System",
      status:
        maxTemp > 80 || maxVibration > 1.5
          ? "Warning"
          : "Healthy",
      remarks:
        maxTemp > 80 || maxVibration > 1.5
          ? "Cooling load increased"
          : "Operating normally",
    },

    {
      name: "Motor Drive Controller",
      status:
        maxTemp > 95 || maxVibration > 1.5
          ? "Warning"
          : "Healthy",
      remarks:
        maxTemp > 95 || maxVibration > 1.5
          ? "Control system under stress"
          : "Operating normally",
    },
  ];

  const healthyCount = components.filter(
    (item) => item.status === "Healthy"
  ).length;

  const warningCount = components.filter(
    (item) => item.status === "Warning"
  ).length;

  return (
    <div style={{ padding: "20px" }}>
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#0f172a,#1e3a8a)",
          color: "white",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "25px",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h1>ERS Component Monitoring</h1>
        <p>Electrical Component Health Status</p>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h3>Total Components</h3>
          <h1>{components.length}</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "green" }}>
            Healthy
          </h3>
          <h1 style={{ color: "green" }}>
            {healthyCount}
          </h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "orange" }}>
            Warning
          </h3>
          <h1 style={{ color: "orange" }}>
            {warningCount}
          </h1>
        </div>
      </div>

      {/* Components Table */}
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow:
            "0 4px 10px rgba(0,0,0,0.08)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#0f172a",
                color: "white",
              }}
            >
              <th
                style={{
                  padding: "15px",
                  width: "35%",
                  textAlign: "center",
                }}
              >
                Component
              </th>

              <th
                style={{
                  padding: "15px",
                  width: "20%",
                  textAlign: "center",
                }}
              >
                Status
              </th>

              <th
                style={{
                  padding: "15px",
                  width: "45%",
                  textAlign: "center",
                }}
              >
                Remarks
              </th>
            </tr>
          </thead>

          <tbody>
            {components.map(
              (component, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom:
                      "1px solid #e5e7eb",
                  }}
                >
                  <td
                    style={{
                      padding: "15px",
                      textAlign: "left",
                      fontWeight: "500",
                    }}
                  >
                    {component.name}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                      color:
                        component.status ===
                        "Healthy"
                          ? "green"
                          : "orange",
                      fontWeight: "bold",
                    }}
                  >
                    {component.status}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                      color: "#374151",
                    }}
                  >
                    {component.remarks}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#6b7280",
          fontSize: "14px",
        }}
      >
      </div>
    </div>
  );
}

export default Components;