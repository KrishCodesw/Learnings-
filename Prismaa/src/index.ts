import { PrismaClient } from "./generated/prisma";

const Client = new PrismaClient;

async function CreateUSer () {
    await Client.user.create({
        data:{
            username:"krish",
            password:"kjbsfqkjv",
            age:25,
            city:"jhfb"
        }
    })
}