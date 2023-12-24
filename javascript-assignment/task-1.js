// Task 1: Write a javascript function that takes an array as an input and returns
//  a new array containing only unique elements in the original array (without using any built-in functions)

// I have provided below, two approach to solve this problem

// Approach 1: I have not used any inbuilt function include  indexOf or includes
// Time Complexity: O(n^2)

function getUniqueElements(arr) {
	const uniqueArray = [];

	for (let i = 0; i < arr.length; i++) {
		let isUnique = true;

		for (let j = 0; j < uniqueArray.length; j++) {
			if (arr[i] === uniqueArray[j]) {
				isUnique = false;
				break;
			}
		}

		if (isUnique) {
			uniqueArray.push(arr[i]);
		}
	}

	return uniqueArray;
}





// Approach 2: I have optimized the above solution by using object to keep track of unique elements
// Time Complexity: O(n)

function findUniqueElements(arr) {
	const uniqueArray = [];
	const uniqueMap = {};

	for (let i = 0; i < arr.length; i++) {
		if (!uniqueMap[arr[i]]) {
			uniqueMap[arr[i]] = true;
			uniqueArray.push(arr[i]);
		}
	}

	return uniqueArray;
}


console.log(getUniqueElements([2,4,3,5,6,4,3]))     // [ 2, 4, 3, 5, 6 ]
console.log(findUniqueElements([1,1,1,3,4,5,3]))   // [ 1, 3, 4, 5 ]

