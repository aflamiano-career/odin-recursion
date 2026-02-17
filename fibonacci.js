function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}
console.log(fibs(5));

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  if (n === 2) {
    return [0, 1];
  } else {
    let fib = fibsRec(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
  }
}
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(5));

function fibsValue(n) {
  if (n < 2) return n;
  return fibsValue(n - 1) + fibsValue(n - 2);
}
console.log(fibsValue(3));
