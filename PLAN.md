http://deckofcardsapi.com/

HIGHER OR LOWER STYLE GAME USING DECK OF CARDS API

http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1 --- LINK TO GET A NEW DECK/SHUFFLE THE CARDS

RESPONSE = {
"success": true,
"deck_id": "3p40paa87x90",
"shuffled": true,
"remaining": 52
}

http://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1 --- DRAW A NEW CARD FOR THE NEXT VALUE TO BE PLAYED

{
"success": true,
"cards": [
{
"image": "http://deckofcardsapi.com/static/img/KH.png",
"value": "KING",
"suit": "HEARTS",
"code": "KH"
},
