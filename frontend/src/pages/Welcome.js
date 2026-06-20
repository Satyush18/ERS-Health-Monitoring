import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-screen">
      <div className="welcome-glow" />

      <span className="welcome-eyebrow">Electric Rope Shovel Health Monitoring</span>

      <h1 className="welcome-title">Welcome to the</h1>
      <h1 className="welcome-title welcome-title-accent">ERS Monitoring System</h1>

      <p className="welcome-subtitle">
        Real-time equipment health tracking &amp; predictive maintenance
      </p>

      <button className="welcome-cta" onClick={() => navigate("/dashboard")}>
        Enter Dashboard
      </button>

      <div className="welcome-footer">IIT Kharagpur &middot; Department of Electrical Engineering</div>
    </div>
  );
}

export default Welcome;