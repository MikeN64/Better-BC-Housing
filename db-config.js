const testMongo = {
    "dbname": "HackathonDB",
    "collection" : "collection1",
    "uri" : "mongodb://rooterbuster:root1999@cluster0-shard-00-00-gleoi.mongodb.net:27017,cluster0-shard-00-01-gleoi.mongodb.net:27017,cluster0-shard-00-02-gleoi.mongodb.net:27017/TestDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
}

module.exports = {
  mongoDB: testMongo
};

