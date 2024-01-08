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

  {
    id: 4,
    name: "Roberto",
    surname: "Ferrari",
  },
  {
    id: 5,
    name: "Giovanni",
    surname: "Russo",
  },
  {
    id: 6,
    name: "Francesco",
    surname: "Esposito",
  },
  {
    id: 7,
    name: "Paolo",
    surname: "Bianchi",
  },
  {
    id: 8,
    name: "Giacomo",
    surname: "Romano",
  },
  {
    id: 9,
    name: "Gianluca",
    surname: "Gallo",
  },
  {
    id: 10,
    name: "Marco",
    surname: "Costa",
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
  res.send(users);
});

//fileupload
// Start the server
app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}`)
);
