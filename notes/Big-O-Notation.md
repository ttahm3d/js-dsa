# Big O Notation

Usually in interviews we are asked to give the Worst Case time complexity of our solution. It is represented by Big-O Notation

It describes the complexity of algorithm in algebraic terms

1. It is represented as a function of input size
2. It excludes the minute details and focuses on big picture

```JS
/**
 *
 * @param {*} n number
 * @returns sum of first n natural numbers
 */
function sumToNNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++){
    sum += i
  }
  return sum
}
```

When called with n = 4, it will return 10.

We cannot calculate the time as discused hence we can count pr measure the time as a function of input size.

There are three main statements

1. `let sum = 0` - runs once

2. `sum += i` - runs 4 times for n = 4

3. `return sum` - runs once

This can be generalized as 4 + 2 as `n+2 times`. 2 is irralevent when the number or size of input is very large so it can be reduced to `n` -> big o of sum to n numbers is `O(n)`

```JS
/**
 *
 * @param {*} n number
 * @returns sum of first n natural numbers
 */
function summation(n) {
  return (n * (n + 1)) / 2;
}
```

This is a `O(1)` solution. Irrespective of size of n, the program runs the statement only once

---

| Type of function | General appearance or structure in code                 |
| ---------------- | ------------------------------------------------------- |
| Quadratic        | Nested loops upto level 2                               |
| Cubic            | Nested loops upto level 3                               |
| Logarithmic      | If the size of input reduces by half in every iteration |

![](https://www.notion.so/tahirahmedt/Big-O-Notation-063f1f18317741f5bbed965c2c85a9fb#d5c367c7ab2f476b88271e4b1c1ef75e)
