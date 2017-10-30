// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A){
  // merge sort and check conditions
  N = A.length;
  if(N < 3) return 0;
  var t = 1;
  if(N > 5){ t = 2;} 
  for(i = t; i < N - t; i++){
    for(j = 1; j < t + 1; j++)
        for(h = 1; h < t + 1; h++){
            p = A[i-j]
            q = A[i]
            r = A[i+h]
            if(condition1(N, i-j, i, i+h) && condition2(p,q,r))
              return 1;
        }
  }
  
    return 0;
}

function condition1(N, p,q,r){
  return p >= 0 && q > p && r > q && N > r;
}

function condition2(p,q,r){
  pq = p + q;
  qr = q + r;
  rp = r + p;
  return pq > r && qr > p && rp > q;
}