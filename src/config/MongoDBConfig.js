const MongoDBConfig = mongoose.connect('mongodb://localhost/ecommerce', {
    serverSelectionTimeoutMS: 1000,
  })

export { MongoDBConfig }