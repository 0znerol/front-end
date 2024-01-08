import express from "express";
import cors from "cors";

const app = express();
const PORT = 7000;
const users = [
  {
    id: 1,
    name: "Mario",
    surname: "Rossi",
  },
  {
    id: 2,
    name: "Luigi",
    surname: "Verdi",
  },
  {
    id: 3,
    name: "Giuseppe",
    surname: "Bianchi",
  },
];

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.get("/users", (req, res) => {
  res.send(JSON.stringify(users));
});

//fileupload
// Start the server
app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}`)
);
