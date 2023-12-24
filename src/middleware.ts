import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

const logRequest = (req: Request, res: Response, next: NextFunction): void => {
	const timestamp = new Date().toISOString();
	const method = req.method;
	const url = req.originalUrl;
	const logMessage = `${timestamp} - ${method} ${url}`;

	console.log(logMessage);

	// Use process.cwd() to get the current working directory
	const logFilePath = path.join(process.cwd(), "log.txt");

	fs.appendFile(logFilePath, logMessage + "\n", (err) => {
		if (err) {
			console.error("Error writing to log file:", err);
		}
	});

	next();
};

export default logRequest;
