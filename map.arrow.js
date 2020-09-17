var kodeUnix = [
  23,
  89,
  67,
  29,
  192,
  6,
  2,
  129,
  21,
  872,
  891,
  901,
  70,
  61,
  78,
  62,
  32,
  90,
  90,
];

// var bykNilai = kodeUnix.length;
const unixKode = kodeUnix.map((x) => (x * 2) / 5 - kodeUnix.length);

console.log(unixKode);
// document.write(unixKode);
