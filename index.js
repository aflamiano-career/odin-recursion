function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}

console.log(fibs(8));

function fibsRec(n) {
  if (n < 2) return n;
  return fibsRec(n - 1) + fibsRec(n - 2);
}
console.log(fibsRec(8));
