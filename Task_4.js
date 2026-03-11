let games = ["cricket", "football", "hockey", "tennis"];

let games1 = games.forEach((c, i, t) => {
  console.log(c);
});

let games2 = [
  "Game : cricket",
  "Game : football",
  "Game : hockey",
  "Game : tennis",
];

let games3 = games2.map((c1, i1, t1) => {
  return c1;
});

console.log(games3);
