// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 6.4.0)
  var counters = counting(A, N+1)[N];
  var maxOccurrences = counters[N];
  console.log(maxOcurrences);
  var maxCounter = 0
  var max = 0;
  var finalMax = 0;
  counters.fill(0);
  for(i = 0; i < A.length; i++){
      if(A[i] <= N){
          if(++counters[A[i]-1] > max) max = counters[A[i]-1];
      }
      else{
          maxCounter++;
          if(maxCounter == maxOccurrences) 

      }
  }
  // fill
  for(i = 0; i < counters.length; i++){
    if(counters[i] < finalMax) counters[i] = finalMax;
  }
  return counters;
}

function solution(A, m, max){
  var counter;
  var maxOccurrences = 0;
  if(counting(A.slice(0, A.length));
  for(var i in A)
    count[A[i]]++;
  return count;
}
function counting(){
  for(var i in A){
    if(A[i] == m) {
      counter = new Array(m-1).fill(max);
      return ++maxOccurrences;
    //if(++count[A[i]] > max) max = count[A[i]];

  }
  return count;
}