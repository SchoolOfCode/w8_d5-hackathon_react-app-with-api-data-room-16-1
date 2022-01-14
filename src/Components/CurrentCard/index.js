import { useState, useEffect } from "react";

import Button from "../Button";

function CurrentCard({ deckID }) {
  const [card, setCard] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [cardValue, setCardValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);
  const [continueGame, setContinueGame] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getFirstCard() {
      const response = await fetch(
        `http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
      );
      const data = await response.json();
      console.log(data);
      setCard(data);
      setCardImage(data.cards.image);

      if (data.cards[0].value === "KING") {
        data.cards[0].value = 13;
      }
      if (data.cards[0].value === "QUEEN") {
        data.cards[0].value = 12;
      }
      if (data.cards[0].value === "ACE") {
        data.cards[0].value = 1;
      }
      if (data.cards[0].value === "JACK") {
        data.cards[0].value = 11;
      }
      setPreviousValue(data.cards[0].value);
      setCardValue(data.cards[0].value);
      setCardValue(parseInt(data.cards[0].value));

      //   console.log(cardImage);
    }
    getFirstCard();
  }, [deckID]);

  async function getNewCard() {
    const response = await fetch(
      `http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
    );
    const data = await response.json();
    // console.log(data);
    setCard(data);
    setCardImage(data.cards.image);
    if (data.cards[0].value === "KING") {
      data.cards[0].value = 13;
    }
    if (data.cards[0].value === "QUEEN") {
      data.cards[0].value = 12;
    }
    if (data.cards[0].value === "ACE") {
      data.cards[0].value = 1;
    }
    if (data.cards[0].value === "JACK") {
      data.cards[0].value = 11;
    }
    setCardValue(parseInt(data.cards[0].value));
  }

  function continueGameStateHigher() {
    setPreviousValue(cardValue);
    getNewCard();

    if (previousValue < cardValue) {
      setCount(count + 1);
    } else {
      setContinueGame(false);
      console.log("THE GAME WILL STOP AS THE CARD WAS LOWER");
      setCount(0);
    }
  }
  function continueGameStateLower() {
    setPreviousValue(cardValue);
    getNewCard();

    if (previousValue > cardValue) {
      setCount(count + 1);
    } else {
      setContinueGame(false);
      console.log("THE GAME WILL STOP AS THE CARD WAS HIGHER");
      setCount(0);
    }
  }

  return (
    <div>
      {cardImage !== "" && <img src={card.cards[0].image} alt={"card"}></img>}
      <p>Your score is {count}</p>
      <p>Card value is {cardValue}</p>
      <p>The previous card value is {previousValue}</p>
      <Button text="higher" onClick={continueGameStateHigher} />
      <Button text="lower" onClick={continueGameStateLower} />
      <Button text="Get new card" onClick={getNewCard} />
    </div>
  );
}
export default CurrentCard;
