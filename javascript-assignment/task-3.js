// Task: 2

// Approach 1: Using brute-force approach bty comparing every  element of arr1 and arr2
// Time Complexity : O(n*m), where m and n are the length of the two arrays

function getCommonElements(arr1, arr2) {
	const commonArray = [];

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				commonArray.push(arr1[i]);
				break;
			}
		}
	}

	return commonArray;
}

// Approch 2: A more optimized approach where i am using object to keep a track of elements of arr1
// Time Complexity : O(n+m), where m and n are the length of the two arrays

function findCommonElements(arr1, arr2) {
  const commonMap = {};
  const commonArray = [];

  for (let i = 0; i < arr1.length; i++) {
    commonMap[arr1[i]] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    if (commonMap[arr2[j]]) {
			commonArray.push(arr2[j]);
			commonMap[arr2[j]] = false; // Mark the element as visited to avoid duplicates
		}
  }

  return commonArray;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findCommonElements(array1, array2)); // Output: [3, 4, 5]
console.log(getCommonElements(array1, array2)); // Output: [3, 4, 5]
