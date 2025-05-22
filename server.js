const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.NAME}:${process.env.PASS}@cluster0.f1kjav4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const groups = client.db("groupdb").collection("groups");

    app.post("/groups", async (req, res) => {
      const result = await groups.insertOne(req.body);
      res.send(result);
    });
    app.put("/groups/:id", async (req, res) => {
      const query = {_id:new ObjectId(req.params.id)}
      const update={$set:req.body}
      const result = await groups.updateOne(query,update);
      res.send(result);
    });

    app.get("/groups", async (req, res) => {
      const result = await groups.find().toArray();
      res.send(result);
    });

    app.get("/groups/:id", async (req, res) => {
      const query = new ObjectId(req.params.id);
      const result = await groups.findOne(query);
      res.send(result);
    });

    app.delete("/groups/:id", async (req, res) => {
      const query = {_id:new ObjectId(req.params.id)}
      const result = await groups.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
