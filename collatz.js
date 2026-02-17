function collatz(n) {
  let steps = 0;
  steps++;
  if (n === 1) {
    return 1;
  }

  if (n % 2 === 0) {
    console.log("even fired");
    return steps + collatz(n / 2);
  } else {
    console.log("odd fired");
    return steps + collatz(3 * n + 1);
  }
}

console.log(collatz(3));

// step(6 / 2);
// step(3 * 3 + 1);
// step(10 / 2);
// step(3 * 5 + 1);
// step(16 / 2);
// step(8 / 2);
// step(4 / 2);
// step(2 / 2);
// step(1);
