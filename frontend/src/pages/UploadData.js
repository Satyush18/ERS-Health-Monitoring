import React, { useState } from "react";

function UploadData() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setMessage("");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a CSV file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
  "https://ers-health-monitoring.onrender.com/data",
  {
    method: "POST",
    body: formData,
  }
);
      const result = await response.json();

      if (result.status === "success") {
        setMessage(
          `✅ Data Uploaded Successfully! Rows: ${result.rows}`
        );
      } else {
        setMessage(`❌ ${result.message}`);
      }
    } catch (error) {
      setMessage("❌ Upload Failed");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* HEADER */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0f172a, #1e3a8a)",
          color: "white",
          padding: "30px",
          borderRadius: "15px",
          marginBottom: "25px",
          boxShadow:
            "0px 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1
  style={{
    margin: 0,
    fontSize: "36px",
    fontWeight: "700"
  }}
>
  Electric Rope Shovel Health Monitoring System
</h1>

        <h3
  style={{
    marginTop: "10px",
    color: "#cbd5e1",
    fontSize: "22px",
    fontWeight: "600"
  }}
>
  Department of Electrical Engineering
</h3>

        <h3
  style={{
    color: "#cbd5e1",
    fontSize: "22px",
    fontWeight: "600"
  }}
>
  Indian Institute of Technology, Kharagpur
</h3>

        <p
          style={{
            marginTop: "15px",
            color: "#e2e8f0",
          }}
        >
        </p>
      </div>

      {/* UPLOAD CARD */}
      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow:
            "0 8px 25px rgba(0,0,0,0.1)",
          border: "2px dashed #2563eb",
        }}
      >
        <div style={{ fontSize: "80px" }}>📂</div>

        <h2
          style={{
            color: "#0f172a",
            marginTop: "10px",
          }}
        >
          Upload Raspberry Pi Sensor Data
        </h2>

        <p
          style={{
            color: "#64748b",
            marginBottom: "20px",
          }}
        >
          Upload CSV files collected from ERS
          sensors for monitoring and analysis.
        </p>

        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
        />

        <br />
        <br />

        {fileName && (
          <div
            style={{
              background: "#f8fafc",
              padding: "15px",
              borderRadius: "10px",
              display: "inline-block",
              border: "1px solid #e2e8f0",
            }}
          >
            <b>Selected File:</b> {fileName}
          </div>
        )}

        <br />
        <br />

        <button
          onClick={handleUpload}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "14px 35px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Upload Data
        </button>

        <br />
        <br />

        {message && (
          <h3
            style={{
              color: message.includes("Successfully")
                ? "green"
                : "red",
            }}
          >
            {message}
          </h3>
        )}

        {/* DATASET INFO */}
        {fileName && (
          <div
            style={{
              marginTop: "25px",
              background: "#f8fafc",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3>Dataset Information</h3>

            <p>
              <b>File:</b> {fileName}
            </p>

            <p>
              <b>Expected Fields:</b> Motor,
              Temperature, Vibration
            </p>

            <p>
              <b>Data Source:</b> Raspberry Pi
              Sensors
            </p>
          </div>
        )}
      </div>

      {/* FEATURE CARDS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            flex: 1,
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow:
              "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>⚡ Real-Time Monitoring</h3>
          <p>
            Continuous monitoring of motor
            temperature and vibration.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow:
              "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>🚨 Fault Detection</h3>
          <p>
            Automatic identification of abnormal
            equipment conditions.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow:
              "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>📊 Predictive Analytics</h3>
          <p>
            Data-driven maintenance
            recommendations and health insights.
          </p>
        </div>
      </div>

      {/* WORKFLOW */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          marginTop: "25px",
          boxShadow:
            "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>System Workflow</h2>

        <p>1️⃣ Upload CSV Sensor Data</p>
        <p>2️⃣ Analyze Motor Health</p>
        <p>3️⃣ Detect Components Conditions</p>
        <p>4️⃣ Visualize Analytics</p>
        <p>5️⃣ Generate Alerts </p>
      </div>
    </div>
  );
}

export default UploadData;