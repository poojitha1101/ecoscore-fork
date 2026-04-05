import "../styles/Simulator.css";

const Simulator = ({ currentResults, baselineCarbon }) => {
  // Improvement = ((Carbon_old - Carbon_new) / Carbon_old) * 100 [cite: 84]
  const improvement = baselineCarbon > 0 
    ? (((baselineCarbon - currentResults.carbon) / baselineCarbon) * 100).toFixed(1)
    : 0;

  const isPositive = improvement >= 0;

  return (
    <div className="simulator-container">
      <div className="sim-header">
        <h2 className="highlight">OPTIMIZATION_LAB</h2>
        <span className="small-text">// WHAT_IF_ENGINE_ACTIVE</span>
      </div>

      <div className="comparison-box">
        <div className="stat-line">
          <span>BASELINE_CARBON:</span>
          <span>{baselineCarbon} kg</span>
        </div>
        <div className="stat-line highlight">
          <span>CURRENT_CARBON:</span>
          <span>{currentResults.carbon} kg</span>
        </div>
        <div className="impact-badge" style={{ borderColor: isPositive ? '#00ff88' : '#ff0055' }}>
          <span className="label">IMPROVEMENT</span>
          <h3 style={{ color: isPositive ? '#00ff88' : '#ff0055' }}>
            {isPositive ? '+' : ''}{improvement}%
          </h3>
        </div>
      </div>

      <div className="investor-insights">
        <p className="label highlight">INVESTOR_INSIGHTS</p>
        <ul className="insight-list">
          <li>• Scalable Carbon Savings: { (baselineCarbon - currentResults.carbon).toFixed(2) } units/pc [cite: 105]</li>
          <li>• Relative Performance: {currentResults.verdict} [cite: 88]</li>
          <li>• Funding Eligibility: {currentResults.score > 70 ? 'HIGH' : 'LOW'} [cite: 4, 109]</li>
        </ul>
      </div>

      <div className="optimization-engine">
        <p className="label">// SYSTEM_SUGGESTION</p>
        <p className="suggestion-text">
          {currentResults.score < 70 
            ? "Try switching to 'Local Sourcing' to minimize transport emissions." 
            : "Optimization complete. Current configuration is investor-ready."} [cite: 41, 42]
        </p>
      </div>
    </div>
  );
};

export default Simulator;
