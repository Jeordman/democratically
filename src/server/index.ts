import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const { PORT } = process.env;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
