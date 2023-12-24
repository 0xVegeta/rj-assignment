
const car1 = {
	brand: "Toyota",
	model: "Camry",
	year: 2022,
};

const car2 = {
	color: "Blue",
	fuelType: "Petrol",
	year: 2023,
};

function mergeCars(carA, carB) {
	return { ...carA, ...carB };
}


const mergedCar = mergeCars(car1, car2);

console.log(mergedCar);
