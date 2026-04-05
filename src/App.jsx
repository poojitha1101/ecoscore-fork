import { useState } from "react";
import InputPanel from "./components/InputPanel";
import Score from "./components/Score";
import Simulator from "./components/Simulator";
import { calculateEcoScore } from "./utils/calcEngine";
import "./styles/App.css";

function App() {
  const [inputs, setInputs] = useState({
    categoryVal: 10,
    materialVal: 15,
    transportVal: 20,
    packagingVal: 10,
  });
  const [baselineCarbon, setBaselineCarbon] = useState(null);
  const results = calculateEcoScore(inputs);

  if (baselineCarbon == null) setBaselineCarbon(results.carbon);

  return (
    <div className="dashboard-container">
      <header className="hud-header">
        <h1 className="highlight">ECOSCORE // SUSTAINABILITY_TRACKER</h1>
        <div className="status">SYSTEM_READY</div>
      </header>

      <main className="hud-grid">
        <section className="glass-card">
          {/* Collects Category, Material, Transport, Packaging [cite: 73-78] */}
          <InputPanel inputs={inputs} setInputs={setInputs} />
        </section>

        <section className="glass-card main-display">
          {/* Displays Carbon Value, EcoScore, and Verdict [cite: 26-29] */}
          <Score data={results} />
        </section>

        <section className="glass-card">
          <Simulator currentResults={results} baselineCarbon={baselineCarbon} />
        </section>
      </main>
    </div>
  );
}

export default App;
