import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #0f172a, #2563eb)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        WELCOME EVERYONE
      </h1>

      <h2
        style={{
          marginBottom: "10px",
          fontSize: "2rem",
        }}
      >
        TO
      </h2>

      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "40px",
          fontWeight: "bold",
        }}
      >
        ERS MONITORING SYSTEM
      </h1>

      <button
        onClick={() => navigate("/upload")}
        style={{
          padding: "15px 40px",
          fontSize: "20px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          backgroundColor: "#f59e0b",
          color: "white",
        }}
      >
        START
      </button>
    </div>
  );
}

export default Welcome;