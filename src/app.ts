import express from "express";
import bodyParser from "body-parser";
import productRouter from './routes';
import logRequest from './middleware'

const app = express();
const PORT= 3000

app.use(bodyParser.json());
app.use(logRequest); 
app.use("/api", productRouter);

app.listen(PORT, () => {
	console.log(`
  =======================================================
              Server up
              on port ${PORT}
  =======================================================`);
});
