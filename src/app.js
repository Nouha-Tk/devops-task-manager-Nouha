const express = require('express');
const app = express();
app.use(express.json());

const { MongoClient } = require('mongodb');
const tasksRouter = require('./routes/tasks');

const url = process.env.MONGO_URL || "mongodb://localhost:27017";
const client = new MongoClient(url);

app.get('/', (req, res) => {

  res.json({ message: "Welcome from FEATURE branch" });

});

app.use('/tasks', tasksRouter);

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("tasksdb");
    app.locals.db = db;

    app.listen(3000, () => {
      console.log("API running on port 3000");
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

if (require.main === module){
  startServer();
}
module.exports = app;

