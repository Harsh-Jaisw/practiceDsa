function Swap(x, y) {
  x = x.concat(y);
  y = x.slice(0, x.length - y.length);
  x = x.slice(y.length);
  return [x, y].join(" ");
}
console.log(Swap("sahlini", "tiwari"));
