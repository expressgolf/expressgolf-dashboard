// One object per week. The Monday assets are generated from `week`, the Tuesday assets from `results`.
// To produce next week's set, change these values (they mirror the FORMAT / WEEKLY WINNERS / STANDINGS tabs).
window.EG = {
  comp: "Express Cup",
  game: "Closest to the Pin",
  week: {
    n: 6, of: 26,
    day: "Monday 9 November",
    dayShort: "Mon 9 Nov",
    time: "3pm – 9pm",
    course: "Pinehurst No.2",
    courseFull: "Pinehurst No.2",
    hole: 6,
    yards: 110,
    photo: "img/w06_pinehurst6_inner.jpg",
    card: "img/w06_pinehurst6_inner.jpg",
    qr: "img/qr_week06.png",
    pin: [0.33, 0.30],
    prize: "adidas Elevated pullover hoodie",
    joinUrl: "https://api.toptracer.com/app/event?eventid=aa94cf95-55c5-4c1a-b090-6483a1935197"
  },
  prize: {
    weekly: "Weekly prize + a semi-final place",
    final: "Custom-fit irons worth up to £1,500"
  },
  points: [5, 4, 3, 2, 1],
  url: "expressgolf.co.uk/express-cup",
  results: {
    n: 5, course: "Kiawah Island", hole: 17, yards: 126, day: "Monday 2 November",
    entries: 29,
    prize: "Ping Freddie Jumper",
    top5: ["KawishK", "DanHart91", "Archie2006", "AdeRob", "DeeLowley"],
    standings: [
      ["1", "Phelpsy", 10, "W"],
      ["2", "DeeLowley", 8],
      ["3", "KawishK", 7, "W"],
      ["4=", "BenKGolf", 5, "W"], ["4=", "Rob Templeton", 5, "W"],
      ["6", "Jl9595", 5],
      ["7=", "gbartle", 4], ["7=", "Zainrehman1881", 4], ["7=", "JFewster", 4], ["7=", "DanHart91", 4],
      ["11", "Bidipbip", 4],
      ["12=", "Pixiepad71", 3], ["12=", "Georgebest1", 3], ["12=", "Archie2006", 3],
      ["15=", "Sparky666", 2], ["15=", "AdeRob", 2],
      ["17=", "Joebrown27", 1], ["17=", "WillThornber", 1]
    ]
  }
};
