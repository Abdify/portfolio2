import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';

function App() {

  const [userActive, setUserActive] = useState(false);
  document.body.addEventListener("mouseenter", () => setUserActive(true), false);
  document.body.addEventListener("mouseleave", () => setUserActive(false), false);

  return (
    <div className={userActive ? "" : "inactive"}>
      <Home />
    </div>
  );
}

export default App;
