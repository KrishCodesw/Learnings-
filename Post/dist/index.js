"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_5wm7RZCfoEMx@ep-royal-snow-a8gqugx3-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
pgClient.connect();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const insertQuery = `INSERT INTO users (username,email,password) VALUES ('${username}','${email}','${password}')`;
        const response = yield pgClient.query(insertQuery);
        res.json({
            message: "You have signed up"
        });
    }
    catch (e) {
        res.json({
            message: "Error signing up"
        });
    }
}));
app.listen(3000);
// const pgClient2=new Client({
//   user:"neondb_owner",
//   password:"5wm7RZCfoEMx",
//   port:5432,
//   host:"ep-royal-snow-a8gqugx3-pooler.eastus2.azure.neon.tech",
//   database:"neondb",
//   ssl:true
// })
// async function main(){
//   await pgClient.connect();
//   const response=await pgClient.query("SELECT * FROM users;")
//   // const response=await pgClient.query("UPDATE users SET username='krisha' WHERE id=2;")
//   // const response=await pgClient.query("UPDATE users SET username='krisha' WHERE id=2;")
//   console.log(response);
// }
// main();
