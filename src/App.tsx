import "./App.css";

import PlayerVideo from "./components/PlayerVideo";
import TicketInfo from "./components/TicketInfo";

function App() {
  console.log("Renderizando App");
  return (
    <div className="app">
      <PlayerVideo />
      <TicketInfo />
    </div>
  );
}

export default App;
