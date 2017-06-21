Array.prototype.reverseArray = function(){
	var temp = []; // Temporary array
	for(var i = this.length - 1; i >= 0; i--){ // Loop over the main array backwards
		temp.push(this[i]); // Push each element from the main array to the temporary array in reverse order
		this.cut(i); // Get rid of each element added to the temporary array from the main array
	}
	return this.concat(temp); // Join the arrays and return
}
