// One object per week. The Monday assets are generated from `week`, the Tuesday assets from `results`.
// To produce next week's set, change these values (they mirror the FORMAT / WEEKLY WINNERS / STANDINGS tabs).
window.EG = {
  comp: "Express Cup",
  game: "Closest to the Pin",
  week: {
    n: 7, of: 26,
    day: "Monday 16 November",
    dayShort: "Mon 16 Nov",
    time: "3pm – 9pm",
    course: "Spyglass Hill",
    courseFull: "Spyglass Hill",
    hole: 3,
    yards: 95,
    photo: "img/w07_spyglass3_inner.jpg",
    card: "img/w07_spyglass3_inner.jpg",
    qr: "img/qr_week07.png",
    pin: [0.37, 0.52],
    prize: "Under Armour Varsity Pullover / M Storm CGI Beanie",
    joinUrl: "https://api.toptracer.com/app/event?eventid=9f847b1e-f03b-44c3-883b-a4148afad829"
  },
  prize: {
    weekly: "Weekly prize + a semi-final place",
    final: "Custom-fit irons worth up to £1,500"
  },
  points: [5, 4, 3, 2, 1],
  url: "expressgolf.co.uk/express-cup",
  results: {
    n: 6, course: "Pinehurst No.2", hole: 6, yards: 110, day: "Monday 9 November",
    entries: 38,
    prize: "Adidas Elevated Pullover Hoodie",
    top5: ["KSmith95", "Phelpsy", "KawishK", "AdeRob", "Davelufc10"],
    standings: [
      ["1", "Phelpsy", 14, "W"],
      ["2", "KawishK", 10, "W"],
      ["3", "DeeLowley", 8],
      ["4=", "BenKGolf", 5, "W"], ["4=", "Rob Templeton", 5, "W"], ["4=", "KSmith95", 5, "W"],
      ["7", "Jl9595", 5],
      ["8=", "gbartle", 4], ["8=", "Zainrehman1881", 4], ["8=", "JFewster", 4], ["8=", "DanHart91", 4],
      ["12", "Bidipbip", 4],
      ["13", "AdeRob", 4],
      ["14=", "Pixiepad71", 3], ["14=", "Georgebest1", 3], ["14=", "Archie2006", 3],
      ["17", "Sparky666", 2],
      ["18=", "Joebrown27", 1], ["18=", "WillThornber", 1], ["18=", "Davelufc10", 1]
    ]
  }
};
