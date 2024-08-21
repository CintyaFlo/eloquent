// Your code here.
function deepEqual(x, y) {

	// Check if both x and y are objects and not null
	if (typeof x == "object" && x != null) {
	
		// If y is not an object or is null, return false
		if (typeof y != "object" || y == null) {
			return false;
		}
		// Get the properties of x and y as arrays of keys

		let propertiesX = Object.keys(x);
		let propertiesY = Object.keys(y);
        
		// If the objects do not have the same number of properties, return false
		if (propertiesX.length != propertiesY.length) {
			return false;
		}
        // Check if both objects have the same properties

		let haveSameProps = true;
		for (let prop of propertiesX) {
			let hasProp = y.hasOwnProperty(prop); // Check if y has the same property as x
			haveSameProps = haveSameProps && hasProp; // Ensure all properties match
		}
		// If they do not have the same properties, return false
		if (!haveSameProps) {
			return false;
		}
        
		// Check if the values of these properties are the same using a recursive call to deepEqual
		let haveSameValues = true;
		for (let prop of propertiesX) {
			let sameValue = deepEqual( x[prop] , y[prop]);// Recursively compare property values
			haveSameValues = haveSameValues && sameValue; // Ensure all values match
		}
        // Return true if both properties and values are identical
		return haveSameValues;
	} else {
        // If x and y are not objects, compare them directly
		return x == y;
	}
}



let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true