function ran(num) {
  return Math.floor(Math.random() * num + 1);
}
console.log(ran(6));
module.exports = ran;
