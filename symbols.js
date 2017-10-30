
function solution(S) {
  // write your code in JavaScript (Node.js 6.4.0)
  if(S.length % 2 == 1) return 0;
  stack = []
  for(i = 0; i < S.length; i++){
    elem = S[i]
    if(elem == '(' || elem == '{' || elem == '[')
      stack.push(elem);
    else if(stack.length == 0) return 0;
    else{
      pair = stack.pop()
      if(!validPair(pair, elem))
        return 0;
    }
  }
  if(stack.length != 0) return 0;
  return 1;
}

function validPair(left, right){
  if(left == '(' && right == ')') return true;
  if(left == '{' && right == '}') return true;
  if(left == '[' && right == ']') return true;
  return false;
}
function pairedElement(x){
  if(elem == x) return 1;
  else return 0;
}


Queue = function(){
  _que =[];
  self = this;

  this.length = function(){return _que.length;}
  this.empty = function(){
    return _que.length == 0;
  }
  this.first = function(){
    return _que[0];
  }
  this.last = function(){
    return _que[_que.length-1];
  }
  this.push = function(x){
    _que.push(x);
  }
  this.pop = function(){
    return _que.shift();
  }
}