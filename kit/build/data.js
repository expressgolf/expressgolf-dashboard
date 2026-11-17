// One object per week. The Monday assets are generated from `week`, the Tuesday assets from `results`.
// To produce next week's set, change these values (they mirror the FORMAT / WEEKLY WINNERS / STANDINGS tabs).
window.EG = {
  comp: "Express Cup",
  game: "Closest to the Pin",
  week: {
    n: 8, of: 26,
    day: "Monday 23 November",
    dayShort: "Mon 23 Nov",
    time: "3pm – 9pm",
    course: "Naruo",
    courseFull: "Naruo",
    hole: 12,
    yards: 137,
    photo: "img/w08_naruo12_inner.jpg",
    card: "img/w08_naruo12_inner.jpg",
    qr: "img/qr_week08.png",
    pin: [0.48, 0.65],
    prize: "TaylorMade TP5 Dozen / TP Glove",
    joinUrl: "https://api.toptracer.com/app/event?eventid=dac2c02f-0fd3-40a9-9e7e-3569a4bb31a6"
  },
  prize: {
    weekly: "Weekly prize + a semi-final place",
    final: "Custom-fit irons worth up to £1,500"
  },
  points: [5, 4, 3, 2, 1],
  url: "expressgolf.co.uk/express-cup",
  results: {
    n: 7, course: "Spyglass Hill", hole: 3, yards: 95, day: "Monday 16 November",
    entries: 27,
    prize: "Under Armour Varsity Pullover / M Storm CGI Beanie",
    top5: ["TIGERMOSES", "Zainrehman1881", "KSmith95", "Aahil", "MattyMorris1987"],
    standings: [
      ["1", "Phelpsy", 14, "W"],
      ["2", "KawishK", 10, "W"],
      ["3", "KSmith95", 8, "W"],
      ["4", "Zainrehman1881", 8],
      ["5", "DeeLowley", 8],
      ["6=", "BenKGolf", 5, "W"], ["6=", "Rob Templeton", 5, "W"], ["6=", "TIGERMOSES", 5, "W"],
      ["9", "Jl9595", 5],
      ["10=", "gbartle", 4], ["10=", "JFewster", 4], ["10=", "DanHart91", 4],
      ["13", "Bidipbip", 4],
      ["14", "AdeRob", 4],
      ["15=", "Pixiepad71", 3], ["15=", "Georgebest1", 3], ["15=", "Archie2006", 3],
      ["18=", "Sparky666", 2], ["18=", "Aahil", 2],
      ["20=", "Joebrown27", 1], ["20=", "WillThornber", 1], ["20=", "Davelufc10", 1], ["20=", "MattyMorris1987", 1]
    ]
  }
};
