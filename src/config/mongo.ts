import mongoose from "mongoose";

const connect = async () => {
  try {
    // const url = process.env.MONGO_URL!;
    const url = `${process.env.MONGO_PROTOCOL}://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`;
    mongoose.connect(url);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default connect;
