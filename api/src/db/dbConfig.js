const { MongoClient, ServerApiVersion } = require("mongodb");

const URL = "mongodb+srv://user-123:user-123@mini-mern-tut.llitt.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: {
        version: ServerApiVersion.v1,
    }
})

module.exports = {client, URL}
