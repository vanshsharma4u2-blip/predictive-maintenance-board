import { useMemo, useState } from "react";
import { initialAssets } from "./data/assets";
import "./App.css";

function evaluateRisk(asset) {
  let score = 0;
  const reasons = [];

  if (asset.temperature >= 90) {
    score += 3;
    reasons.push("High temperature");
  } else if (asset.temperature >= 75) {
    score += 2;
    reasons.push("Elevated temperature");
  } else if (asset.temperature >= 60) {
    score += 1;
  }

  if (asset.vibration >= 8) {
    score += 3;
    reasons.push("High vibration");
  } else if (asset.vibration >= 5) {
    score += 2;
    reasons.push("Elevated vibration");
  } else if (asset.vibration >= 3) {
    score += 1;
  }

  if (asset.runtime >= 5000) {
    score += 2;
    reasons.push("High runtime");
  } else if (asset.runtime >= 3000) {
    score += 1;
  }

  let status = "Healthy";

  if (asset.status === "maintenance" || score >= 6) {
    status = "Maintenance Due";
  } else if (asset.status === "at-risk" || score >= 4) {
    status = "At-Risk";
  } else if (asset.status === "watch" || score >= 2) {
    status = "Watch";
  }

  return {
    status,
    score,
    reason:
      reasons.length > 0
        ? reasons.join(" • ")
        : "Operating within normal thresholds"
  };
}

function StatusBadge({ status }) {
  return (
    <span className={`badge ${status.toLowerCase().replaceAll(" ", "-")}`}>
      {status}
    </span>
  );
}

function AssetCard({ asset }) {
  return (
    <div className="asset-card">
      <div className="asset-top">
        <div>
          <div className="asset-id">{asset.id}</div>
          <h3>{asset.name}</h3>
          <p>{asset.type}</p>
        </div>

        <StatusBadge status={asset.status} />
      </div>

      <div className="readings">
        <div>
          <span>Temperature</span>
          <strong>{asset.temperature}°C</strong>
        </div>

        <div>
          <span>Vibration</span>
          <strong>{asset.vibration} mm/s</strong>
        </div>

        <div>
          <span>Runtime</span>
          <strong>{asset.runtime} h</strong>
        </div>
      </div>

      <div className="risk-info">
        <strong>Risk score: {asset.score}</strong>
        <span>{asset.reason}</span>
      </div>
    </div>
  );
}

function KanbanColumn({ title, description, assets }) {
  return (
    <div className="kanban-column">
      <div className="column-header">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <span className="count">{assets.length}</span>
      </div>

      <div className="cards">
        {assets.length > 0 ? (
          assets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))
        ) : (
          <div className="empty">No assets in this category</div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [assets, setAssets] = useState(initialAssets);
  const [view, setView] = useState("dashboard");

  const evaluatedAssets = useMemo(
    () =>
      assets.map((asset) => ({
        ...asset,
        ...evaluateRisk(asset)
      })),
    [assets]
  );

  const stats = {
    total: evaluatedAssets.length,
    healthy: evaluatedAssets.filter((a) => a.status === "Healthy").length,
    watch: evaluatedAssets.filter((a) => a.status === "Watch").length,
    risk: evaluatedAssets.filter((a) => a.status === "At-Risk").length,
    due: evaluatedAssets.filter((a) => a.status === "Maintenance Due").length
  };

  function simulateReadings() {
    setAssets((current) =>
      current.map((asset) => ({
        ...asset,
        temperature: Math.max(
          30,
          Math.min(
            105,
            asset.temperature + Math.round((Math.random() - 0.5) * 12)
          )
        ),
        vibration: Math.max(
          1,
          Math.min(
            10,
            +(asset.vibration + (Math.random() - 0.5) * 1.2).toFixed(1)
          )
        ),
        runtime: asset.runtime + Math.floor(Math.random() * 8)
      }))
    );
  }

  const columns = [
    {
      title: "Healthy",
      description: "Normal operating condition",
      status: "Healthy"
    },
    {
      title: "Watch",
      description: "Needs observation",
      status: "Watch"
    },
    {
      title: "At-Risk",
      description: "Maintenance attention required",
      status: "At-Risk"
    },
    {
      title: "Maintenance Due",
      description: "Immediate maintenance required",
      status: "Maintenance Due"
    }
  ];

  const alerts = evaluatedAssets.filter(
    (asset) =>
      asset.status === "At-Risk" || asset.status === "Maintenance Due"
  );

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-title">Predictive Maintenance</div>
          <div className="brand-subtitle">Alert Board</div>
        </div>

        <nav>
          <button
            className={view === "dashboard" ? "nav active" : "nav"}
            onClick={() => setView("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={view === "alerts" ? "nav active" : "nav"}
            onClick={() => setView("alerts")}
          >
            Alerts
          </button>
        </nav>

        <button className="simulate" onClick={simulateReadings}>
          Simulate New Readings
        </button>
      </header>

      <main>
        <section className="hero">
          <div>
            <div className="eyebrow">EQUIPMENT HEALTH MONITORING</div>

            <h1>
              Predict maintenance issues before they become failures.
            </h1>

            <p>
              Monitor temperature, vibration and runtime to identify equipment
              that needs attention.
            </p>
          </div>

          <div className="system-status">
            <span></span>
            System Monitoring
          </div>
        </section>

        <section className="stats">
          <div className="stat">
            <span>Total Assets</span>
            <strong>{stats.total}</strong>
          </div>

          <div className="stat healthy">
            <span>Healthy</span>
            <strong>{stats.healthy}</strong>
          </div>

          <div className="stat watch">
            <span>Watch</span>
            <strong>{stats.watch}</strong>
          </div>

          <div className="stat risk">
            <span>At-Risk</span>
            <strong>{stats.risk}</strong>
          </div>

          <div className="stat due">
            <span>Maintenance Due</span>
            <strong>{stats.due}</strong>
          </div>
        </section>

        {view === "dashboard" ? (
          <>
            <section className="alerts">
              <div className="section-heading">
                <div>
                  <h2>Maintenance Alerts</h2>
                  <p>
                    Equipment requiring attention based on current readings.
                  </p>
                </div>

                <span className="alert-count">
                  {alerts.length} active
                </span>
              </div>

              {alerts.length > 0 ? (
                <div className="alert-list">
                  {alerts.map((asset) => (
                    <div className="alert" key={asset.id}>
                      <div>
                        <strong>
                          {asset.name} ({asset.id})
                        </strong>

                        <span>{asset.reason}</span>
                      </div>

                      <StatusBadge status={asset.status} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-alerts">
                  All equipment is currently operating within acceptable
                  limits.
                </div>
              )}
            </section>

            <section className="board-section">
              <div className="section-heading">
                <div>
                  <h2>Maintenance Kanban Board</h2>
                  <p>
                    Assets grouped by their current maintenance condition.
                  </p>
                </div>
              </div>

              <div className="kanban">
                {columns.map((column) => (
                  <KanbanColumn
                    key={column.status}
                    title={column.title}
                    description={column.description}
                    assets={evaluatedAssets.filter(
                      (asset) => asset.status === column.status
                    )}
                  />
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="alerts full">
            <div className="section-heading">
              <div>
                <h2>All Maintenance Alerts</h2>
                <p>Current equipment requiring attention.</p>
              </div>
            </div>

            {alerts.length > 0 ? (
              <div className="alert-list">
                {alerts.map((asset) => (
                  <div className="alert" key={asset.id}>
                    <div>
                      <strong>
                        {asset.name} ({asset.id})
                      </strong>

                      <span>
                        Temperature: {asset.temperature}°C · Vibration:{" "}
                        {asset.vibration} mm/s · Runtime: {asset.runtime} h
                      </span>
                    </div>

                    <StatusBadge status={asset.status} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-alerts">
                No active maintenance alerts.
              </div>
            )}
          </section>
        )}
      </main>

      <footer>
        Predictive Maintenance Alert Board · Simulated equipment monitoring
      </footer>
    </div>
  );
}