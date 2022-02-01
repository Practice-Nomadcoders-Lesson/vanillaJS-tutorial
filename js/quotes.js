const quotes = [
  {
    quote:
      "One resolution I have made, and try always to keep, is this: To rise above the little things.",
    author: "John Burroughs",
  },
  {
    quote:
      "Sometimes our fate resembles a fruit tree in winter. Who would think that those branches would turn green again and blossom, but we hope it, we know it.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "People don't just get upset. They contribute to their upsetness.",
    author: "Ablert Ellis",
  },
  {
    quote:
      "They say that time changes things, but you actually have to change them yourself.",
    author: "Andy Warhol",
  },
  {
    quote: "Throw your heart over the fence and the rest will follow",
    author: "Norman Vincent Peale",
  },
  {
    quote:
      "The self is not somthing ready-made, but something in continuous formation through choice of action.",
    author: "John Dewey",
  },
  {
    quote:
      "Look at a day when you are supremely satisfied at the end. It's not a day when you lounge around doing nothing; it's when you had everything to do, and you've done it.",
    author: "Margaret Thatcher",
  },
  {
    quote:
      "A positive attitude may not solve all your problems, but it will annoy enough people to make it worth the effort.",
    author: "Herm Albright",
  },
  {
    quote: "Not truth, but faith it is that keeps the world alive.",
    author: "Edna St. Vincnet Millay",
  },
  {
    quote:
      "Few things help an individual more than to place responsibility upon him, and to let him know that you trust him.",
    author: "Booker T. Washington",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
