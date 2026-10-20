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
    n: 2, course: "Celtic Manor", hole: 10, yards: 115, day: "Monday 12 October",
    entries: 17,
    prize: "TaylorMade TP5 dozen + TP glove",
    top5: ["Rob Templeton", "Zainrehman1881", "DeeLowley", "Jl9595", "Bidipbip"],
    standings: [
      ["1=", "BenKGolf", 5, "W"], ["1=", "Rob Templeton", 5, "W"],
      ["3=", "gbartle", 4], ["3=", "Zainrehman1881", 4], ["5", "Bidipbip", 4],
      ["6", "Jl9595", 4], ["7", "DeeLowley", 3], ["8", "Joebrown27", 1]
    ]
  }
};
