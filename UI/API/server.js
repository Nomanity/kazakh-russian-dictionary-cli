
import express from "express";
import { createRepository } from "../../infrastructure/fileDictionaryRepository.js";
import { createGetWordsRouter as getWordsRouter } from "./routes/getWordsRouter.js";


const app = express();
const repo = createRepository();

app.use(express.json());
app.use("/words", getWordsRouter(repo));

app.get("/", (req, res) => {
  res.json({
    message: "API is working",
    version: 1
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


app.listen(3000, () => {
  console.log("Server on port 3000 is running");
});