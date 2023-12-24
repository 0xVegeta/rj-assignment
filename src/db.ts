

export interface Product {
	id: number;
	productName: string;
	price: number;
}
// In-memory database
export const products: Product[] = [
	{ id: 1, productName: "Laptop", price: 50000 },
	{ id: 2, productName: "Smartphone", price: 10000 },
	{ id: 3, productName: "Tablet", price: 30000 },
	{ id: 4, productName: "Headphones", price: 5000 },
	{ id: 5, productName: "Camera", price: 15000 },
	{ id: 6, productName: "Printer", price: 20000 },
	{ id: 7, productName: "Monitor", price: 25000 },
	{ id: 8, productName: "Keyboard", price: 1000 },
	{ id: 9, productName: "Mouse", price: 800 },
	{ id: 10, productName: "Speakers", price: 3000 },
	{ id: 11, productName: "External Hard Drive", price: 8000 },
	{ id: 12, productName: "Gaming Console", price: 25000 },
	{ id: 13, productName: "Fitness Tracker", price: 5000 },
	{ id: 14, productName: "Coffee Maker", price: 6000 },
	{ id: 15, productName: "Smartwatch", price: 12000 },
];
