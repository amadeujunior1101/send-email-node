import "dotenv/config";
import express from "express";
import UserController from "./controllers/userController";
const app = express();

app.use(express.json());

app.get("/", UserController.index);
app.post("/users", UserController.store);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
