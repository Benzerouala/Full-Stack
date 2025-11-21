import { useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";
const INITIAL_TACHES = [
  { id: 1, texte: "Apprendre React", fait: true },
  { id: 2, texte: "Faire les exercices", fait: false },
  { id: 3, texte: "Boire un café", fait: false }
];

function App() {
  const [taches, setTaches] = useState(INITIAL_TACHES);
  const [filtre, setFiltre] = useState("toutes"); // "toutes" | "faites" | "a-faire"
  const [dark, setDark] = useState(false);

  const tachesAffichees = filtre === "toutes"
      ? taches
      : filtre === "faites"
      ? taches.filter(t => t.fait)
      : taches.filter(t => !t.fait);

  return (
    <div className={dark ? "app dark" : "app"}>
      <h1>Ma Liste de Tâches</h1>

      {/* Toolbar */}
      <div className="toolbar">
        <div className="filtres">
          <button
            className={filtre === "toutes" ? "actif" : ""}
            onClick={() => setFiltre("toutes")}
          >
            Toutes
          </button>

          <button
            className={filtre === "faites" ? "actif" : ""}
            onClick={() => setFiltre("faites")}
          >
            Fait
          </button>

          <button
            className={filtre === "a-faire" ? "actif" : ""}
            onClick={() => setFiltre("a-faire")}
          >
            À faire
          </button>
        </div>

        {/* Bouton thème */}
        <button className="theme-btn" onClick={() => setDark(d => !d)}>
          {dark ? "🌞 Clair" : "🌙 Sombre"}
        </button>
      </div>

      <TaskList taches={tachesAffichees} />
    </div>
  );
}

export default App;