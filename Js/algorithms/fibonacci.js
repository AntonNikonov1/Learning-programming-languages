// this way will be slow
function fibonacciRecursion(num) {
  if (num < 2) return 1
  return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2)
}

console.log(fibonacciRecursion(5))

// this method will be faster
function fibonacciСycle(num) {
  let a = 1
  let b = 1

  for(let i = 1; i < num; i++) {
    let c = a + b
    a = b
    b = c
  }

  return b
}

console.log(fibonacciСycle(5))