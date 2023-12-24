import { Request, Response } from "express";
import {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
} from "../src/controllers"; 
import { products } from "../src/db";

jest.mock("../src/db", () => ({
	products: [
		{ id: 1, productName: "Product 1", price: 10.99 },
		{ id: 2, productName: "Product 2", price: 20.99 },
	],
}));


const reqMock = {} as Request;
const resMock = {
	status: jest.fn(() => resMock),
	json: jest.fn(),
} as unknown as Response;

describe("getAllProducts", () => {
	it("should return all products", () => {
		getAllProducts(reqMock, resMock);
		expect(resMock.status).toHaveBeenCalledWith(200);
		expect(resMock.json).toHaveBeenCalledWith([
			{ id: 1, productName: "Product 1", price: 10.99 },
			{ id: 2, productName: "Product 2", price: 20.99 },
		]);
	});
});

describe("getProductById", () => {
	it("should return the correct product by ID", () => {
		reqMock.params = { id: "1" };
		getProductById(reqMock, resMock);
		expect(resMock.status).toHaveBeenCalledWith(200);
		expect(resMock.json).toHaveBeenCalledWith({
			id: 1,
			productName: "Product 1",
			price: 10.99,
		});
	});

	it("should return 404 if the product is not found", () => {
		reqMock.params = { id: "3" };
		getProductById(reqMock, resMock);
		expect(resMock.status).toHaveBeenCalledWith(404);
		expect(resMock.json).toHaveBeenCalledWith({ error: "Product not found" });
	});
});

describe("createProduct", () => {
	it("should create a new product", () => {
		const newProduct = {
			id: 3,
			productName: "Product 3",
			price: 30.99,
		};
		reqMock.body = newProduct;
		createProduct(reqMock, resMock);
		expect(resMock.status).toHaveBeenCalledWith(201);
		expect(resMock.json).toHaveBeenCalledWith(newProduct);
	});

	it("should handle invalid product data when creating a new product", () => {
		const invalidProduct = {
			productName: "Invalid Product",
			price: 40.99,
		};
		reqMock.body = invalidProduct;
		createProduct(reqMock, resMock);
		expect(resMock.status).toHaveBeenCalledWith(400);
		expect(resMock.json).toHaveBeenCalledWith({
			error: "Invalid product data",
		});
	});

	it("should handle internal server error when creating a new product", () => {
		const newProduct = {
			id: 4,
			productName: "Product 4",
			price: 40.99,
		};
		reqMock.body = newProduct;
		jest.spyOn(products, "push").mockImplementation(() => {
			throw new Error("Internal Server Error");
		});
		createProduct(reqMock, resMock);
		expect(resMock.status).toHaveBeenCalledWith(500);
		expect(resMock.json).toHaveBeenCalledWith({
			error: "Internal Server Error",
		});
	});

	it("should handle empty product data when creating a new product", () => {
		const invalidProduct = {};
		reqMock.body = invalidProduct;
		createProduct(reqMock, resMock);
		expect(resMock.status).toHaveBeenCalledWith(400);
		expect(resMock.json).toHaveBeenCalledWith({
			error: "Invalid product data",
		});
	});
});

describe("updateProduct", () => {
	it("should update a product by ID", () => {
		const updatedProduct = {
			productName: "Updated Product",
			price: 50.99,
		};
		reqMock.params = { id: "1" };
		reqMock.body = updatedProduct;
		updateProduct(reqMock, resMock);
		expect(resMock.status).toHaveBeenCalledWith(200);
		expect(resMock.json).toHaveBeenCalledWith({
			id: 1,
			productName: "Updated Product",
			price: 50.99,
		});
	});

	it("should handle product not found when updating by ID", () => {
		reqMock.params = { id: "99" };
		reqMock.body = { productName: "Update" };
		updateProduct(reqMock, resMock);
		expect(resMock.status).toHaveBeenCalledWith(404);
		expect(resMock.json).toHaveBeenCalledWith({ error: "Product not found" });
	});

	it("should handle invalid product data when updating by ID", () => {
		const invalidProduct = { productName: "Invalid Update" };
		reqMock.params = { id: "1" };
		reqMock.body = invalidProduct;
		updateProduct(reqMock, resMock);
		expect(resMock.status).toHaveBeenCalledWith(400);
		expect(resMock.json).toHaveBeenCalledWith({
			error: "Invalid product data",
		});
	});

	it("should handle updating a product with empty fields", () => {
		const updatedProduct = {
			productName: "",
			price: null,
		};
		reqMock.params = { id: "1" };
		reqMock.body = updatedProduct;
		updateProduct(reqMock, resMock);
		expect(resMock.status).toHaveBeenCalledWith(200);
		expect(resMock.json).toHaveBeenCalledWith({
			id: 1,
			productName: "",
			price: null,
		});
	});
});


