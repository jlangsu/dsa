
// naive; inefficient algorithm
function prime(limit: number): number[] {
  const primes: number[] = [];
  let n = 2;
  do {
    let isPrime = true;
    for (const p of primes) {
      if (n % p === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(n);
    n++;
  } while (n < limit);
  return primes;
}

console.log(prime(100));
