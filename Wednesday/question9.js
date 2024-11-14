//The Greatest Common Divisor (GCD) of two numbers is the largest
// positive integer that divides both numbers without leaving a remainder.

function gcd(a, b) {
  let temp;
  let GCD;
  if (b > a) {
    temp = b;
    b = a;
    a = temp;
  }
  for (i = 1; i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
        GCD=i;
    }
  }
  console.log(GCD)
}
gcd(12, 18)