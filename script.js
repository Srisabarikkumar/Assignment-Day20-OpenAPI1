const btn = document.getElementById("quoteButton");

  // fetching breaking bad quotes API and displaying the quote and author in a card
  btn.onclick = function () {
    fetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
    .then((res) => res.json())
    .then((res) => {
      const cardQuote = document.getElementById("quoteLine");
      const cardAuthor = document.getElementById("quoteAuthor");
      res.map((item) => {
        cardQuote.innerHTML = item.quote;
        cardAuthor.innerHTML = `- ${item.author}`;
      }) 
    })
    .catch((err) => {
      console.log(err);
      const cardQuote = document.getElementById("quoteLine");
      cardQuote.innerHTML = err;
      btn.classList.add("disabled")
    });
  }