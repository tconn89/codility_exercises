function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  var dom = -1;
  if(A.length == 0 || A.length == 2) return dom;
  if(A.length == 1) return 0;
  
  beta = [];
  occurrences = 1;
  dom = 0;
  for(i=1; i< A.length; i++){
    if(A[i] == A[dom]) { occurrences++}//keep dom
    else {
      if(beta[A[i]] == null) beta[A[i]] = 0;
      beta[A[i]]++;
      if(beta[A[i]] > occurrences) {dom = i; occurrences = beta[A[i]];}
    }
  };
  if(occurrences > A.length / 2)
    return dom;
  else return -1;
}

a = [0,0,1,1,1];
console.log(solution(a));