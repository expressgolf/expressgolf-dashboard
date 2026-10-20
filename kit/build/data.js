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
    qr: "img/qr_week04.png",
    pin: [0.41, 0.36],
    prize: "Callaway Halloween Ball / Tour Authentic Ball",
    joinUrl: "https://api.toptracer.com/app/event?eventid=cbcc5d73-1c01-48e7-8d0e-0bfd8272d806"
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
    prize: "Pro V1 Dozen / Titleist Players Glove",
    top5: ["Phelpsy", "JFewster", "Pixiepad71", "Sparky666", "WillThornber"],
    standings: [
      ["1=", "BenKGolf", 5, "W"], ["1=", "Rob Templeton", 5, "W"], ["1=", "Phelpsy", 5, "W"],
      ["4=", "gbartle", 4], ["4=", "Zainrehman1881", 4], ["4=", "JFewster", 4],
      ["7", "Bidipbip", 4], ["8", "Jl9595", 4],
      ["9=", "DeeLowley", 3], ["9=", "Pixiepad71", 3],
      ["11", "Sparky666", 2],
      ["12=", "Joebrown27", 1], ["12=", "WillThornber", 1]
    ]
  }
};
