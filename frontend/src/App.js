import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { 
  FaUpload,
  FaTachometerAlt,
  FaCog,
  FaMicrochip,
  FaChartLine,
  FaBell
} from "react-icons/fa";

import UploadData from "./pages/UploadData";
import Dashboard from "./pages/Dashboard";
import Motors from "./pages/Motors";
import Components from "./pages/Components";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          background: "#f5f7fb"
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: "240px",
            background: "#0f172a",
            color: "white",
            padding: "20px"
          }}
        >
          <h2 style={{ marginBottom: "30px" }}>
            ERS Monitor
          </h2>

          <p>
            <Link
              to="/upload"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <FaUpload /> Upload Data
            </Link>
          </p>

          <p>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <FaTachometerAlt /> Dashboard
            </Link>
          </p>

          <p>
            <Link
              to="/motors"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <FaCog /> Motors
            </Link>
          </p>

          <p>
            <Link
              to="/components"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <FaMicrochip /> Components
            </Link>
          </p>

          <p>
            <Link
              to="/analytics"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <FaChartLine /> Analytics
            </Link>
          </p>

          <p>
            <Link
              to="/alerts"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <FaBell /> Alerts
            </Link>
          </p>
        </div>

        {/* Main Content */}
        <div
  style={{
    flex: 1,
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  }}
>
  <div style={{ flex: 1 }}>
    <Routes>
      <Route path="/upload" element={<UploadData />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/motors" element={<Motors />} />
      <Route path="/components" element={<Components />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/alerts" element={<Alerts />} />
    </Routes>
  </div>

  {/* Footer */}
  <footer
    style={{
      textAlign: "center",
      padding: "15px",
      marginTop: "30px",
      color: "#6b7280",
      fontSize: "14px",
      borderTop: "1px solid #e5e7eb"
    }}
  >
    ERS Health Monitoring System | IIT Kharagpur | 2026
  </footer>
</div>
      </div>
    </Router>
  );
}

export default App;