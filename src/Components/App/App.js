import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [deckID, setDeckID] = useState("");

  useEffect(() => {
    async function getDeck() {
      const response = await fetch(
        "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      const data = await response.json();
      console.log(data);
      console.log(data.deck_id);
      setDeckID(data.deck_id);
    }
    getDeck();
  }, []);

  return (
    <div className="App">
      <p>{deckID}</p>
    </div>
  );
}

export default App;
