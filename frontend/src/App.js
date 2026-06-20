import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import {
  FaTachometerAlt,
  FaCog,
  FaMicrochip,
  FaChartLine,
  FaBell,
  FaSyncAlt
} from "react-icons/fa";

import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Motors from "./pages/Motors";
import Components from "./pages/Components";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";
import ComponentDetails from "./pages/ComponentDetails";

import "./styles/theme.css";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: FaTachometerAlt },
  { to: "/motors", label: "Motors", icon: FaCog },
  { to: "/components", label: "Components", icon: FaMicrochip },
  { to: "/analytics", label: "Analytics", icon: FaChartLine },
  { to: "/alerts", label: "Alerts", icon: FaBell }
];

const PAGE_TITLES = {
  "/dashboard": "Dashboard",
  "/motors": "Motors",
  "/components": "Components",
  "/analytics": "Analytics",
  "/alerts": "Alerts"
};

function AppContent() {
  const location = useLocation();
  const isWelcomePage = location.pathname === "/";

  const currentTitle =
    PAGE_TITLES[location.pathname] ||
    (location.pathname.startsWith("/component/")
      ? "Component Details"
      : "ERS Monitor");

  return (
    <div className="app-shell">
      {/* Sidebar */}
      {!isWelcomePage && (
        <aside className="sidebar">
          <div className="sidebar-brand">
            <div className="sidebar-brand-mark">ERS</div>
            <div className="sidebar-brand-text">
              <h1>ERS Monitor</h1>
              <span>Health Monitoring</span>
            </div>
          </div>

          <nav className="sidebar-nav">
            <div className="sidebar-section-label">Monitoring</div>
            {NAV_ITEMS.map(({ to, label, icon: Icon }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link${isActive ? " active" : ""}`}
                >
                  <Icon />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="sidebar-footer">
            ERS Health Monitoring
            <br />
            IIT Kharagpur &middot; 2026
          </div>
        </aside>
      )}

      {/* Main Content */}
      <div className="main-area">
        {!isWelcomePage && (
          <div className="topbar">
            <div className="topbar-left">
              <span className="topbar-title">{currentTitle}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <button
                className="btn-refresh"
                onClick={() => window.location.reload()}
              >
                <FaSyncAlt size={12} />
                Refresh
              </button>
            </div>
          </div>
        )}

        <div className="page-content" style={isWelcomePage ? { padding: 0 } : {}}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/motors" element={<Motors />} />
            <Route path="/components" element={<Components />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/component/:id" element={<ComponentDetails />} />
          </Routes>
        </div>

        {!isWelcomePage && (
          <footer className="page-footer">
            ERS Health Monitoring System | IIT Kharagpur | 2026
          </footer>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;