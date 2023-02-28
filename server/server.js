import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

// main request
app.get("/", async (req, res) => {
  res.send(`Hello World`);
});

// authenticate request
app.post("/authenticate", async (req, res) => {
  // code
  //   get username from body
  const { username } = req.body;
  //   get or create user on chat engine server
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: {
          "Private-Key": "926dc95f-f913-4349-8004-d9723285e68c",
        },
      }
    );
    return res.send(response.data);
  } catch (e) {
    return res.status(404).json(e.response.data);
  }
});

app.listen(3000, () => {
  console.log(`Server is Running on http://localhost:3000`);
});
