import mongoose from 'mongoose';

const mongoUrl = 'mongodb://127.0.0.1:27017/dataneuron';

const database = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl);

    console.log(`🔗🔗🔗🔗 MongoDB Connected: ${conn.connection.host} 🔗🔗🔗🔗`);
    console.log('Connection to the database is successful✅.');
  } catch (error:any) {
    console.error(
      `🔗‍💥🔗‍💥🔗‍💥🔗‍💥  ${error.message} 🔗‍💥🔗‍💥🔗‍💥🔗‍💥`
    );
    console.log('Could not connect to the database.', error);
    process.exit(1);
  }
};

export default database;