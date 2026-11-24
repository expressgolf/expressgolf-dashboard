// One object per week. The Monday assets are generated from `week`, the Tuesday assets from `results`.
// To produce next week's set, change these values (they mirror the FORMAT / WEEKLY WINNERS / STANDINGS tabs).
window.EG = {
  comp: "Express Cup",
  game: "Closest to the Pin",
  week: {
    n: 9, of: 26,
    day: "Monday 30 November",
    dayShort: "Mon 30 Nov",
    time: "3pm – 9pm",
    course: "The Belfry",
    courseFull: "The Belfry",
    hole: 14,
    yards: 147,
    photo: "img/w09_belfry14_inner.jpg",
    card: "img/w09_belfry14_inner.jpg",
    qr: "img/qr_week09.png",
    pin: [0.36, 0.46],
    prize: "Pro V1 Dozen / Titleist Players Glove",
    joinUrl: "https://api.toptracer.com/app/event?eventid=8819f14c-969c-4834-bb81-8c02c7cbef64"
  },
  prize: {
    weekly: "Weekly prize + a semi-final place",
    final: "Custom-fit irons worth up to £1,500"
  },
  points: [5, 4, 3, 2, 1],
  url: "expressgolf.co.uk/express-cup",
  results: {
    n: 8, course: "Naruo", hole: 12, yards: 137, day: "Monday 23 November",
    entries: 19,
    prize: "TaylorMade TP5 Dozen / TP Glove",
    top5: ["KSmith95", "JamieMangham", "Gazaz18", "Zainrehman1881", "gbartle"],
    standings: [
      ["1", "Phelpsy", 14, "W"],
      ["2", "KSmith95", 13, "W"],
      ["3", "KawishK", 10, "W"],
      ["4", "Zainrehman1881", 10],
      ["5", "DeeLowley", 8],
      ["6=", "BenKGolf", 5, "W"], ["6=", "Rob Templeton", 5, "W"], ["6=", "TIGERMOSES", 5, "W"],
      ["9", "gbartle", 5],
      ["10", "Jl9595", 5],
      ["11=", "JFewster", 4], ["11=", "DanHart91", 4], ["11=", "JamieMangham", 4],
      ["14", "Bidipbip", 4],
      ["15", "AdeRob", 4],
      ["16=", "Pixiepad71", 3], ["16=", "Georgebest1", 3], ["16=", "Archie2006", 3], ["16=", "Gazaz18", 3],
      ["20=", "Sparky666", 2], ["20=", "Aahil", 2],
      ["22=", "Joebrown27", 1], ["22=", "WillThornber", 1], ["22=", "Davelufc10", 1], ["22=", "MattyMorris1987", 1]
    ]
  }
};
