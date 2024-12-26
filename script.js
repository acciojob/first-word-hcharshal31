function firstWord(s) {
	if(s.split(" ").length >= 2){
	  return s.trim().split(/\s+/)[0];
	}else {
		return s;
	}
}

// Do not change the code below
console.log(firstWord('see and stop'));
console.log(firstWord(' Hello World!')firstWord('12345'));
console.log(firstWord('12345'));
console.log(firstWord(''));
// const s = prompt("Enter String:");
// alert(firstWord(s));
