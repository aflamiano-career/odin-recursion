function collatz(n) {
  if (n === 1) {
    return 0;
  } else if (n % 2 === 0) {
    console.log("even fired");
    return 1 + collatz(n / 2);
  } else {
    console.log("odd fired");
    return 1 + collatz(3 * n + 1);
  }
}

console.log(collatz(6));

// step(6 / 2); 1 +
// step(3 * 3 + 1); 1 +
// step(10 / 2); 1 +
// step(3 * 5 + 1); 1 +
// step(16 / 2); 1 +
// step(8 / 2); 1 +
// step(4 / 2); 1 +
// step(2 / 2); 1 +
// step(1); 0
