function ordering(number) {
  const digits = ("" + number).split("");
  digits.sort((a, b) => b - a);
  let numberOrdered = digits.join('');
  return +numberOrdered;
}