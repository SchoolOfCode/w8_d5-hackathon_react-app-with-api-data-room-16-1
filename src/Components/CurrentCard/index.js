import { useEffect } from "react";

function CurrentCard() {
  useEffect(() => {
    async function getCurrentCard() {
      const response = await fetch("");
      const data = response.json();
      console.log(data);
    }
  });
}

export default CurrentCard();
