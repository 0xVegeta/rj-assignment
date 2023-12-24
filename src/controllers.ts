import { Request, Response } from "express";
import { products, Product } from "./db";

// Get all products
const getAllProducts = (req: Request, res: Response): void => {
	try {
		// Return all products as JSON
		res.status(200).json(products);
	} catch (error) {
		// Handle errors and return a 500 Internal Server Error
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// Get a product by ID
const getProductById = (req: Request, res: Response): void => {
	try {
		// Parse the product ID from request parameters
		const productId: number = parseInt(req.params.id, 10);
		// Find the product in the array
		const product = products.find((p) => p.id === productId);

		// If the product is not found, return a 404 Not Found response
		if (!product) {
			res.status(404).json({ error: "Product not found" });
			return;
		}

		// Return the found product as JSON
		res.json(product);
	} catch (error) {
		// Handle errors and return a 500 Internal Server Error
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// Create a new product
const createProduct = (req: Request, res: Response): void => {
	try {
		// Extract the new product from the request body
		const newProduct: Product = req.body;

		// Validate the new product data
		if (!newProduct.id || !newProduct.productName || !newProduct.price) {
			res.status(400).json({ error: "Invalid product data" });
			return;
		}

		// Add the new product to the array
		products.push(newProduct);

		// Return the newly created product as JSON
		res.status(201).json(newProduct);
	} catch (error) {
		// Handle errors and return a 500 Internal Server Error
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// Update a product by ID
const updateProduct = (req: Request, res: Response): void => {
	try {
		// Parse the product ID from request parameters
		const productId: number = parseInt(req.params.id, 10);
		// Extract the updated product data from the request body
		const updatedProduct: Product = req.body;

		// Find the index of the product in the array
		const index = products.findIndex((p) => p.id === productId);

		// If the product is not found, return a 404 Not Found response
		if (index === -1) {
			res.status(404).json({ error: "Product not found" });
			return;
		}

		// Update the product with the new data
		products[index] = { ...products[index], ...updatedProduct };

		// Return the updated product as JSON
		res.json(products[index]);
	} catch (error) {
		// Handle errors and return a 500 Internal Server Error
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// Delete a product by ID
const deleteProduct = (req: Request, res: Response): void => {
	try {
		// Parse the product ID from request parameters
		const productId: number = parseInt(req.params.id, 10);

		// Find the index of the product in the array
		const index = products.findIndex((p) => p.id === productId);

		// If the product is not found, return a 404 Not Found response
		if (index === -1) {
			res.status(404).json({ error: "Product not found" });
			return;
		}

		// Remove the product from the array and return it as JSON
		const deletedProduct = products.splice(index, 1)[0];
		res.json(deletedProduct);
	} catch (error) {
		// Handle errors and return a 500 Internal Server Error
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// Export the functions for use in other modules
export {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
