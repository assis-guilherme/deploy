const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://localhost:27017/reactgram"
    );

    console.log("Conectado no MongoDB");

    return connect;
  } catch (error) {
    console.log(`Error => ${error}`);
  }
};

connectionDB();

module.exports = connectionDB;
