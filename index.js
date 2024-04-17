const express = require('express')
const app = express()
const port = process.env.PORT || 3004;

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://b022220066:Oxoby5599-@class.tdi4cxs.mongodb.net/?retryWrites=true&w=majority&appName=CLASS";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    let result = await client.db("Mlbb").collection('Heroes').find({name: 'Belerick',role:'Tank'}).toArray();
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);
