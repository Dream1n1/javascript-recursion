//Fibonacci sequence using Recursion
function fibRec(n) {
  return n <= 1 ? n : fibRec(n - 1) + fibRec(n - 2);
}

//Fibonacci sequence using iteration
function fibIteration(n) {
  let preprev = 0;
  let prev = 1;
  let now = 0;
  for (let index = 0; index < n - 1; index++) {
    now = prev + preprev;
    preprev = prev;
    prev = now;
  }
  return now;
}
