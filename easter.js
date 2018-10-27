// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// Write your program below!
<<<<<<< HEAD
MOM = READLINE.question("CHOOSE A YEAR!")
// #1
let y = MOM
// #2
let a = y % 19
// #3
let b = y / 100
let c = y % 100
// #4
let d = b / 4
let e = b % 4
// #5
let f = (b+8) / 25
// #6
let g = (b-f+1) / 3
// #7
h1 = 19 * a
let h = (h1+b-d-g+15) % 30
// #8
let i = c / 4
let k = c % 4
// #9
r1 = 2*e
r2 = 2*i
let r = (32+r1+r2-h-k) % 7
// #10
let m = (a+11*h+22*r) / 451
// #11
let n = (h+r-7*m+114) / 31
let p = (h+r-7*m+114) % 31
=======
// First line should get user input (year) and store it in variable y.
let y = 2003
let a = y%19;
let b = y/100;
let c = y %100;
let d = b/4;
let e = b%4;
let f =(b+8)/25;
let g = (b-f+1)/3;
let h = 19*(a+b-d-g+15)%30;
let i = c/4;
let k = c%4;
let r = (32+2*e+2*i-h-k)%7;
let m = (a+11*h+22*r)/451;
let n = (h+r-7+m+114)/31;
let p = (h+r-7*m+11)%31;
>>>>>>> c3701ec7b92376d4dc0c6d23991bc949f6595bb0
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)
console.log(k)
console.log(r)
console.log(m)
console.log(n)
<<<<<<< HEAD
console.log(p)
=======
console.log(p)

>>>>>>> c3701ec7b92376d4dc0c6d23991bc949f6595bb0
