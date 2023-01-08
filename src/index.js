module.exports = function reverse (n) {
    if (n < 0) n *= -1;
  let strNumb = n.toString();
  res = '';
  for(let i = 0; i < strNumb.length; i++) {
    res = `${res}${strNumb[strNumb.length - 1 - i]}`
  }
  return res;
}
