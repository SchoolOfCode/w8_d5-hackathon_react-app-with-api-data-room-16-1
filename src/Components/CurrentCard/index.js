import { useState, useEffect } from "react";

import Button from "../Button";

function CurrentCard({ deckID }) {
  const [card, setCard] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [cardValue, setCardValue] = useState(0);
  useEffect(() => {
    async function getFirstCard() {
      const response = await fetch(
        `http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
      );
      const data = await response.json();
      //   console.log(data);
      setCard(data);
      setCardImage(data.cards.image);

      //   console.log(cardImage);
    }
    getFirstCard();
  }, [deckID]);

  async function getNewCard() {
    const response = await fetch(
      `http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
    );
    const data = await response.json();
    console.log(data);
    setCard(data);
    setCardImage(data.cards.image);
  }

  return (
    <div>
      <p>{deckID}</p>
      {cardImage !== "" && <img src={card.cards[0].image} alt={"card"}></img>}
      <Button text="higher" />
      <Button text="lower" />
    </div>
  );
}
export default CurrentCard;
