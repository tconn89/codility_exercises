
function solution(H){
  stack = new Stack();
  N = H.length;
  if(N == 1) return 1;
  stack.push(H[0]);
  blocks = 1;
  for(i=1; i< H.length; i++){
    next = H[i];
    while(!stack.empty() && stack.peek() > next){
      stack.pop();
    }
    if(!stack.empty() && stack.peek() == next ) continue;
    else blocks++;
    stack.push(next);

  }
  return blocks;

}
function Stack() {
  var _stack = [];
  var index = -1;
  this.first = function(){
    if(index > -1) return _stack[0];
  }
  this.empty = function(){
    return _stack.length == 0;
  }
  this.reset = function(){
    _stack = [];
    index = -1;
  }
  this.peek = function(){
    return _stack[index];
  }
  this.push = function(x){
    _stack.push(x);
    index++;
  }

  this.pop = function(){
    _stack.pop();
    index--;
  }
}   

a = [8, 8, 5, 7, 9, 8, 7, 4, 8];
console.log(solution(a));