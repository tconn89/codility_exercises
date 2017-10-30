
function solution(T){
  max = -1000000000;
  min =  1000000000;
  maxIndex = 0;
  minIndex = 0;
  for(i=0; i< T.length; i++){
    elem = T[i]
    if(max < elem){
      max = elem;
      maxIndex = i;
    }
    if(min > elem){
      min = elem;
      minIndex = i;
    }
  }
  // summer then winter
  if(maxIndex < minIndex){
    partialMax = -1000000000
    partialMaxIndex = minIndex;
    for(i=minIndex; i < T.length; i++){
      elem = T[i]
      if(partialMax < elem)
        partialMax = elem;
        partialMaxIndex = i;
    }
    if(T[partialMaxIndex] < T[minIndex - 1])
      return T.length - minIndex;
    else return T.length - minIndex + 1
  }
  // winter then summer
  else{
    partialMin = -1000000000
    partialMaxIndex = minIndex;
    for(i=minIndex; i < T.length; i++){
      elem = T[i]
      if(partialMax < elem)
        partialMax = elem;
        partialMaxIndex = i;
    }
    if(T[partialMaxIndex] < T[minIndex - 1])
      return T.length - minIndex;
    else return T.length - minIndex + 1
  }
    return minIndex + 1;

}