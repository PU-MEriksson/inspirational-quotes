async function fetchQuote() {
  try {
    // Random query parameter to prevent caching
    const timestamp = new Date().getTime();
    const response = await fetch(
      `https://api.allorigins.win/raw?url=https://zenquotes.io/api/random?_=${timestamp}`
    );

    const data = await response.json();
    const quote = data[0].q;
    const author = data[0].a;

    document.getElementById("quote").innerText = `"${quote}"`;
    document.getElementById("author").innerText = `- ${author}`;
  } catch (error) {
    console.error("Error fetching the quote:", error);

    document.getElementById("quote").innerText =
      "Unable to fetch a quote. Please try again.";
    document.getElementById("author").innerText = "- Error";
  }
}

//Show quote when the page have loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchQuote();

  //Get a new quote when the button is clicked
  const button = document.getElementById("new-quote");
  button.addEventListener("click", fetchQuote);
});
