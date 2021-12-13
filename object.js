const mia = {
  movie: {
    title: "before sunrise",
    director: "Richard",
  },
  food: ["strawberry", "cherry", "melon"],
  travel: {
    UK: {
      continent: "Europe",
      city: "London",
      time: 8,
    },
    USA: {
      continent: "America",
      city: "Washington d.c.",
      time: 12,
    },
    Australia: {
      continent: "Oceania",
      city: "Canberra",
      time: 2,
    },
  },
};

for (let travelCountry in mia.travel) {
  console.log(mia.travel[travelCountry].city);
}
