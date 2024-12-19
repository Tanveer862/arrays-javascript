//Watson likes to challenge Sherlock's math ability.
 //He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints.
 //Sherlock must determine the number of square integers within that range.
 function squares(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
      const x = Math.sqrt(i); 
      if (typeof x === "number") {
        if (Math.round(x) === x) { 
          count++;
        }
      }
    }
    console.log(count);
  }
  squares(24, 49);
  