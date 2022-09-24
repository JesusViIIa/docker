const mongoose = require("mongoose");

const uri =
  "mongodb+srv://dockerapi:1iM82tSgxJXskuUR@cluster0.2dpva.mongodb.net/docker?retryWrites=true&w=majority";
mongoose
  .connect(uri)
  .then((db) => console.log(`database :${db.connection.name}`))
  .catch((err) => console.error(err));

module.exports = mongoose;
