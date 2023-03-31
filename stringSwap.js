function Swap(x, y) {
  x = x.concat(y);
  y = x.slice(0, x.length - y.length);
  x = x.slice(y.length);
   console.log(x,y)
  
}
(Swap("sahlini", "tiwari"));
