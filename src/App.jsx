import { useState } from "react";
import Router from "./routes";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Router darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
