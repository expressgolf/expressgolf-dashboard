// One object per week. The Monday assets are generated from `week`, the Tuesday assets from `results`.
// To produce next week's set, change these values (they mirror the FORMAT / WEEKLY WINNERS / STANDINGS tabs).
window.EG = {
  comp: "Express Cup",
  game: "Closest to the Pin",
  week: {
    n: 4, of: 26,
    day: "Monday 26 October",
    dayShort: "Mon 26 Oct",
    time: "3pm – 9pm",
    course: "Gleneagles King's",
    courseFull: "Gleneagles, King's Course",
    hole: 5,
    yards: 131,
    photo: "img/w04_gleneagles5_inner.jpg",
    card: "img/w04_gleneagles5_inner.jpg",
    qr: "img/qr_gleneagles.png",
    pin: [0.41, 0.36],
    prize: "Callaway Halloween ball + Tour Authentic ball",
    joinUrl: "api.toptracer.com/app/event?eventid=cbcc5d73…"
  },
  prize: {
    weekly: "Weekly prize + a semi-final place",
    final: "Custom-fit irons worth up to £1,500"
  },
  points: [5, 4, 3, 2, 1],
  url: "expressgolf.co.uk/express-cup",
  results: {
    n: 3, course: "Royal Troon", hole: 8, yards: 120, day: "Monday 19 October",
    entries: 29,
    prize: "Pro V1 dozen + Titleist Players glove",
    top5: ["Phelpsy", "JFewster", "Pixiepad71", "Sparky666", "WillThornber"],
    standings: [
      ["1=", "BenKGolf", 5, "W"], ["1=", "Rob Templeton", 5, "W"], ["1=", "Phelpsy", 5, "W"],
      ["4=", "gbartle", 4], ["4=", "Zainrehman1881", 4], ["4=", "JFewster", 4],
      ["7", "Bidipbip", 4], ["8", "Jl9595", 4]
    ]
  }
};
