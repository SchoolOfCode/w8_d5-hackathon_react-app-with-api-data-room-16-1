import { useState, useEffect } from "react";

function CurrentCard({ deckID }) {
  const [card, setCard] = useState("");
  useEffect(() => {
    async function getCurrentCard() {
      const response = await fetch(
        `http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
      );
      const data = await response.json();
      console.log(data);
      setCard(data);
    }
    getCurrentCard();
  }, [deckID]);

  return (
    <div>
      <p>{deckID}</p>
      {/* <img src={card[0].image}></img> */}
      <p>{card[0].suit}</p>
    </div>
  );
}
export default CurrentCard;
