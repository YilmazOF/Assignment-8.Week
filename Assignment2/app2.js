const movies = [
  { title: "Braveheart", director: "Mel Gibson", rating: 8.4 },
  {
    title: "Plan 9 from Outer Space",
    director: "Ed Wood",
    rating: 2.5,
  },
  { title: "TThe Room", director: "Tommy Wiseau", rating: 2.5 },
  { title: "Pulp Fiction", director: "Quentin Tarantino", rating: 8.9 },
  {
    title: "Birdemic: Shock and Terror",
    director: "James Nguyen",
    rating: 1.9,
  },
  { title: "Forrest Gump", director: "Robert Zemeckis", rating: 8.8 },
  { title: "Schindler's List", director: "Steven Spielberg", rating: 8.9 },
  { title: "Brokeback Mountain", director: "Ang Lee", rating: 8.8 },
  { title: "Fight Club", director: "David Fincher", rating: 8.8 },
  { title: "Gladiator", director: "Ridley Scott", rating: 8.5 },
];

for (let movie of movies) {
  if (movie.rating >= 8.0) {
    console.log(
      "title:",
      movie.title,
      "director:",
      movie.director,
      "rating:",
      movie.rating
    );
  }
}
