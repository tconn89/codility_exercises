
function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  for(i=0; i< A.length; i++){}

}
allFactors = function(x){
  primes = factorization(x, arrayF(x))

  y = z = x
  i = 0;
  composites = []
  for(i=0; i< primes.length;i++){
    subset = primes
    composites.push(multiply(subset))
  }
  
  primes.push(1);
  primes.push(x);
  return primes;
}
multiply = function(a){
  ans = 1;
  for(var elem in a)
    ans *= elem
  return ans;
}

var arrayF = function(n){
  F = (new Array(n+1)).fill(0);
  i = 2;
  while(i * i <= n){
    if(F[i] == 0){
      k = i * i;
      while(k <= n){
        if(F[k] == 0){
          F[k] = i;
        }
        k += i;
      }
    }
    i++;
  }
  return F;
}

function factorization(x, F){
  primeFactors = [];
  while(F[x] > 0 ){
    primeFactors.push( F[x]);
    x /= F[x]
  }
  primeFactors.push( x);
  return primeFactors;
}

console.log(allFactors(144));
