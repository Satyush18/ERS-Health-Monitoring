import React, { useState, useEffect } from "react";
import {
    useParams,
    useNavigate,
} from "react-router-dom";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function ComponentDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const componentData = data.filter(
  (item) =>
    item.Motor === decodeURIComponent(id)
);

    useEffect(() => {
        fetch(
            "https://ers-health-monitoring.onrender.com/data"
        )
            .then((res) => res.json())
            .then((result) => setData(result))
            .catch((err) => console.log(err));
    }, []);

    const maxTemp =
    componentData.length > 0
        ? Math.max(
              ...componentData.map((item) =>
                  Number(item.Temperature)
              )
          )
        : 0;

const maxVibration =
    componentData.length > 0
        ? Math.max(
              ...componentData.map((item) =>
                  Number(item.Vibration)
              )
          )
        : 0;

    let healthScore = 100;

    if (maxTemp > 100)
        healthScore -= 20;
    else if (maxTemp > 90)
        healthScore -= 10;

    if (maxVibration > 2)
        healthScore -= 20;
    else if (maxVibration > 1.5)
        healthScore -= 10;

    let riskLevel = "Low";

    if (healthScore <=90)
        riskLevel = "Medium";

    if (healthScore <=75)
        riskLevel = "High";

    if (healthScore <=50)
        riskLevel = "Critical";

    const temperatureData = componentData.map(
    (item, index) => ({
        time: `T${index + 1}`,
        value: Number(item.Temperature),
    })
);

const vibrationData = componentData.map(
    (item, index) => ({
        time: `T${index + 1}`,
        value: Number(item.Vibration),
    })
);

const currentData = componentData.map(
    (item, index) => ({
        time: `T${index + 1}`,
        value: Math.round(
            Number(item.Temperature) * 1.5
        ),
    })
);

const current =
    currentData.length > 0
        ? currentData[currentData.length - 1]
              .value
        : 0;
   const temperatureTrend =
  temperatureData.length > 1 &&
  temperatureData[temperatureData.length - 1].value >
  temperatureData[0].value
    ? "Increasing"
    : "Stable";
const vibrationTrend =
  vibrationData.length > 1 &&
  vibrationData[vibrationData.length - 1].value >
  vibrationData[0].value
    ? "Increasing"
    : "Stable";

const currentTrend =
  currentData.length > 1 &&
  currentData[currentData.length - 1].value >
  currentData[0].value
    ? "Increasing"
    : "Stable";
let recommendations = [];

if (maxTemp > 100) {
  recommendations.push(
    "Inspect cooling system immediately."
  );
}

if (maxVibration > 2) {
  recommendations.push(
    "Check bearings and rotating parts."
  );
}

if (healthScore < 75) {
  recommendations.push(
    "Schedule maintenance within 24 hours."
  );
}

if (recommendations.length === 0) {
  recommendations.push(
    "System operating normally."
  );
}
let componentStatus = "Healthy";

if (healthScore <=90)
  componentStatus = "Warning";

if (healthScore <=75)
  componentStatus = "Critical";

return (
        <div style={{ padding: "20px" }}>
            <button
                onClick={() =>
                    navigate("/components")
                }
                style={{
                    padding: "10px 15px",
                    marginBottom: "20px",
                    border: "none",
                    borderRadius: "6px",
                    background: "#0f172a",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                ← Back to Components
            </button>

            <div
                style={{
                    background:
                        "linear-gradient(135deg,#0f172a,#1e3a8a)",
                    color: "white",
                    padding: "25px",
                    borderRadius: "15px",
                    marginBottom: "20px",
                }}
            >
                <h1>{decodeURIComponent(id)}</h1>
                <p>
                    Detailed Component Analysis
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "20px",
                    marginBottom: "20px",
                }}
            >
                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                    }}
                >
                    <h3>Health Score</h3>

                    <h1
                        style={{
                            color:
                                healthScore > 80
                                    ? "green"
                                    : healthScore > 60
                                        ? "orange"
                                        : "red",
                        }}
                    >
                        {healthScore}%
                    </h1>

                    <div
                        style={{
                            width: "100%",
                            height: "12px",
                            background: "#e5e7eb",
                            borderRadius: "10px",
                            marginTop: "10px",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: `${healthScore}%`,
                                height: "100%",
                                background:
                                    healthScore > 80
                                        ? "#22c55e"
                                        : healthScore > 60
                                            ? "#f59e0b"
                                            : "#ef4444",
                            }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                    }}
                >
                    <h3>Temperature</h3>

                    <h1>{maxTemp}°C</h1>
                </div>

                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                    }}
                >
                    <h3>Vibration</h3>

                    <h1>
                        {maxVibration} mm/s
                    </h1>
                </div>

                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                    }}
                >
                    <h3>Current</h3>

                    <h1>{current} A</h1>
                </div>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(300px,1fr))",
                    gap: "20px",
                    marginBottom: "20px",
                }}
            >
                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                    }}
                >
                    <h3>Risk Level</h3>

                    <h2>{riskLevel}</h2>
                </div>

                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                    }}
                >
                    <h3>Last Updated</h3>

                    <h2>
                        {new Date().toLocaleString()}
                    </h2>
                </div>
        </div>
            
<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
  }}
>
  <h3
  style={{
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px"
  }}
>
  Component Status
</h3>
  <h2
    style={{
      color:
        componentStatus === "Healthy"
          ? "green"
          : componentStatus === "Warning"
          ? "orange"
          : "red",
    }}
  >
    {componentStatus}
  </h2>



  
 <div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
  }}
>
  </div>


<div
  style={{
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "20px",
  }}
></div>
                <h2>
                    Current Signature Analysis
                </h2>

                <div style={{ height: "300px" }}>
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <LineChart data={currentData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="value"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div
                style={{
                    background: "white",
                    padding: "25px",
                    borderRadius: "12px",
                    marginBottom: "20px",
                }}
            >
                <h2>Temperature Trend</h2>

                <div style={{ height: "300px" }}>
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <LineChart
                            data={temperatureData}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="value"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                </div>


      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <h2>Vibration Trend</h2>

        <div style={{ height: "300px" }}>
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart
              data={vibrationData}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <div
  style={{
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "20px",
  }}
>
  <h2>Trend Analysis</h2>

 <ul
  style={{
    lineHeight: "2",
    paddingLeft: "0px",
    marginLeft: "0px",
    listStylePosition: "inside",
  }}
>
    <li>
      Temperature Trend:
      <strong> {temperatureTrend}</strong>
    </li>

    <li>
      Vibration Trend:
      <strong> {vibrationTrend}</strong>
    </li>

    <li>
      Current Trend:
      <strong> {currentTrend}</strong>
    </li>
  </ul>
</div>
        <h2>Health Analysis</h2>

        <p>
          Maximum Temperature: {maxTemp}°C
          <br />
          Maximum Vibration: {maxVibration} mm/s
          <br />
          Estimated Current: {current} A
          <br />
          Risk Level: {riskLevel}
        </p>
      </div>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
        }}
      >
        <h2>Recommendation</h2>

        <ul
  style={{
    lineHeight: "2",
    paddingLeft: "20px",
  }}
>
  {recommendations.map(
    (item, index) => (
      <li key={index}>{item}</li>
    )
  )}
</ul>
      </div>

    </div>
  );
}

export default ComponentDetails;