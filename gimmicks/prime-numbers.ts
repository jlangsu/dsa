
function simple(limit: number): number[] {
  console.log(performance.now());
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
  console.log(performance.now());
  return primes;
}

function sieve(limit: number): number[] {
  console.log(performance.now());
  const isPrime: boolean[] = new Array(limit);
  isPrime.fill(true);
  const primes: number[] = [];
  for (let i = 2; i < limit; ++i) {
    if (!isPrime[i]) continue;
    for (let j = i; j < limit; j += i) {
      isPrime[j] = false;
    }
    primes.push(i);
  }
  console.log(performance.now());
  return primes;
}

console.log('simple', simple(1e5));
console.log('sieve', sieve(1e5));
