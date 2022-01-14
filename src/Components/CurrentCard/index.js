// GETTING THE FIRST VALUE AND STORE THAT
// WHEN HIGHER OR LOWER PRESSED, WE ARE GOING TO SET THE VALUE TO A NEW VALUE
// CHECK THE FIRST VALUE AND THE NEW VALUE
// NEXT TIME ONE OF BUTTONS PRESSED, SET A PREVIOUS VALUE

import { useState, useEffect } from "react";

import Button from "../Button";

function CurrentCard({ deckID }) {
  const [card, setCard] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [cardValue, setCardValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getFirstCard() {
      const response = await fetch(
        `http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
      );
      const data = await response.json();
      //   console.log(data);
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

      console.log(
        parseInt(data.cards[0].value),
        " - value of card on first render"
      );
      setCardValue(parseInt(data.cards[0].value));

      //   console.log(cardImage);
    }
    getFirstCard();
  }, [deckID]);

  async function getNewCard() {
    console.log(cardValue);
    setPreviousValue(cardValue);
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
    console.log(previousValue, cardValue);
    if (previousValue < cardValue) {
      setCount(count + 1);
      console.log(previousValue, "higher than", cardValue);
    }
    if (previousValue === cardValue) {
      setCount(count + 1);
      console.log(previousValue, "is equal", cardValue);
    }
    if (previousValue > cardValue) {
      setCount(0);
      console.log(previousValue, "is less than", cardValue);
    }
  }

  function continueGameStateLower() {
    console.log(previousValue, cardValue);
    if (previousValue >= cardValue) {
      setCount(count + 1);
    } else {
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
