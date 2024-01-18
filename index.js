const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(
  cors({
    origin: ['http://localhost:5173', ''],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@cluster0.bvbzn4c.mongodb.net/?retryWrites=true&w=majority`;

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
    const courseCollection = client.db('courseDB').collection('courses');
    const enrollCollection = client.db('courseDB').collection('enrollments');

    // course api
    app.get('/courses', async (req, res) => {
      const cursor = courseCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/courses/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await courseCollection.findOne(query);
      res.send(result);
    });

    // enroll api
    app.get('/enrollments/:email', async (req, res) => {
      const email = req.params.email;
      const userEmail = { email: email };
      const result = await enrollCollection.find(userEmail).toArray();
      // console.log(result);
      res.send(result);
    });

    app.get('/enrollments', async (req, res) => {
      const cursor = enrollCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post('/enrollments', async (req, res) => {
      const enrolledItem = req.body;
      // console.log(enrolledItem);
      const result = await enrollCollection.insertOne(enrolledItem);
      res.send(result);
    });

    app.get('/enrollments/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await enrollCollection.findOne(query);
      res.send(result);
    });

    app.delete('/enrollments/:id', async (req, res) => {
      const id = req.params?.id;
      const query = { _id: new ObjectId(id) };
      const result = await enrollCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('sc is running');
});

app.listen(port, () => {
  console.log(`sc is listening on port: ${port}`);
});
