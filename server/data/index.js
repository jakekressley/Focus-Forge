import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    nickname: "jake",
    email: "aaaaaaa@gmail.com",
    username: "testme",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    profilePicture: "p11.jpeg",
    balance: 0,
  },
  {
    _id: userIds[1],
    firstName: "John",
    lastName: "Doe",
    nickname: "jake",
    email: "johndoe@gmail.com",
    username: "johndoe",
    password: "$2b$10$dsasdgsagKXf4OAIe/X/AK9skyWUy",
    profilePicture: "p12.jpeg",
    balance: 100,
  },
  {
    _id: userIds[2],
    firstName: "Jane",
    lastName: "Doe",
    nickname: "jake",
    email: "janedoe@gmail.com",
    username: "janedoe",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXAIe/X/AK9skyWUy",
    profilePicture: "p13.jpeg",
    balance: 200,
  },
];