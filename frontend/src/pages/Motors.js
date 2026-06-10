import { useState, useEffect } from "react";

function Motors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/data")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* Header */}
      <div
        style={{
          background: "#0f172a",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "25px",
        }}
      >
        <h1>Motor Health Status</h1>
        <p>Real-Time Motor Monitoring Dashboard</p>
      </div>

      {/* Table */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#0f172a",
                color: "white",
              }}
            >
              <th style={{ padding: "12px" }}>Motor</th>
              <th style={{ padding: "12px" }}>Temperature (°C)</th>
              <th style={{ padding: "12px" }}>Vibration</th>
              <th style={{ padding: "12px" }}>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              const status =
                item.Temperature > 100 || item.Vibration > 2
                  ? "Critical"
                  : "Healthy";

              return (
                <tr
                  key={index}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "12px" }}>
                    {item.Motor}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {item.Temperature}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {item.Vibration}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                      fontWeight: "bold",
                      color:
                        status === "Critical"
                          ? "red"
                          : "green",
                    }}
                  >
                    {status === "Critical"
                      ? "🔴 Critical"
                      : "🟢 Healthy"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div
        style={{
          marginTop: "25px",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Motor Summary</h2>

        <p>
          Total Motors Monitored: <b>{data.length}</b>
        </p>

        <p>
          Critical Motors:{" "}
          <b style={{ color: "red" }}>
            {
              data.filter(
                (item) =>
                  item.Temperature > 100 ||
                  item.Vibration > 2
              ).length
            }
          </b>
        </p>

        <p>
          Healthy Motors:{" "}
          <b style={{ color: "green" }}>
            {
              data.filter(
                (item) =>
                  item.Temperature <= 100 &&
                  item.Vibration <= 2
              ).length
            }
          </b>
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          color: "gray",
        }}
      >
        ERS Monitoring System | IIT KHARAGPUR | 2026
      </div>
    </div>
  );
}

export default Motors;