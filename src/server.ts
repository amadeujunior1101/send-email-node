import "dotenv/config";
import express from "express";
import UserController from "./controllers/userController";
import BullBoard from "bull-board";
import Queue from "./libs/queue";

const app = express();
BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

app.use(express.json());

app.get("/", UserController.index);
app.post("/users", UserController.store);

app.use("/admin/queues", BullBoard.UI);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
