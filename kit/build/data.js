// One object per week. The Monday assets are generated from `week`, the Tuesday assets from `results`.
// To produce next week's set, change these values (they mirror the FORMAT / WEEKLY WINNERS / STANDINGS tabs).
window.EG = {
  comp: "Express Cup",
  game: "Closest to the Pin",
  week: {
    n: 5, of: 26,
    day: "Monday 2 November",
    dayShort: "Mon 2 Nov",
    time: "3pm – 9pm",
    course: "Kiawah Island",
    courseFull: "Kiawah Island, Ocean Course",
    hole: 17,
    yards: 126,
    photo: "img/w05_kiawah17_inner.jpg",
    card: "img/w05_kiawah17_inner.jpg",
    qr: "img/qr_week05.png",
    pin: [0.38, 0.43],
    prize: "Ping Freddie Jumper",
    joinUrl: "https://api.toptracer.com/app/event?eventid=fe8851ee-ca63-43b1-aec2-3cc0a1a4ab5c"
  },
  prize: {
    weekly: "Weekly prize + a semi-final place",
    final: "Custom-fit irons worth up to £1,500"
  },
  points: [5, 4, 3, 2, 1],
  url: "expressgolf.co.uk/express-cup",
  results: {
    n: 4, course: "Gleneagles King's", hole: 5, yards: 131, day: "Monday 26 October",
    entries: 29,
    prize: "Callaway Halloween Ball / Tour Authentic Ball",
    top5: ["Phelpsy", "JFewster", "Pixiepad71", "Sparky666", "WillThornber"],
    standings: [
      ["1", "Phelpsy", 10, "W"],
      ["2", "DeeLowley", 7],
      ["3=", "BenKGolf", 5, "W"], ["3=", "Rob Templeton", 5, "W"],
      ["5", "Jl9595", 5],
      ["6=", "gbartle", 4], ["6=", "Zainrehman1881", 4], ["6=", "JFewster", 4],
      ["9", "Bidipbip", 4],
      ["10=", "Pixiepad71", 3], ["10=", "Georgebest1", 3],
      ["12=", "Sparky666", 2], ["12=", "KawishK", 2],
      ["14=", "Joebrown27", 1], ["14=", "WillThornber", 1]
    ]
  }
};
