let name = 'naman';
let str = '';
for(let i=name.length-1; i >= 0; i--){
  str += name[i];
};
console.log(name === str?'palindrome' : 'Not palindrome');