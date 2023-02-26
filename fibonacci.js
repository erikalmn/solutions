function fibonacci(number) {
  let current = 0;
  let next = 1;
  let isFibonacci = false;

  while (current <= number) {
    if (current === number) {
      isFibonacci = true;
      break;
    }

    let sum = current + next;
    current = next;
    next = sum;
  }

  if (isFibonacci) {
    console.log(`${number} is included in the Fibonacci sequence.`);
  } else {
    console.log(`${number} not included in the Fibonacci sequence.`);
  }
}
