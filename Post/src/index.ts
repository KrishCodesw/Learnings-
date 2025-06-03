import { Client } from "pg";
import express from "express";
const pgClient = new Client(
  "postgresql://neondb_owner:npg_5wm7RZCfoEMx@ep-royal-snow-a8gqugx3-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
);
  pgClient.connect();


const app=express();
app.use(express.json())

app.post("/signup",async(req,res)=>{
  const username=req.body.username
  const email=req.body.email
  const password=req.body.password


  try{
const insertQuery=`INSERT INTO users (username,email,password) VALUES ($1 $2 $3);`

  const response= await pgClient.query(insertQuery,[username,email,password]) ;
  res.json({
    message:"You have signed up"
  })
  }

  catch(e){
    res.json({
      message:"Error signing up"
    })
  }


  
})

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