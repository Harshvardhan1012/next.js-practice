// "use client"
import { PrismaClient } from "@prisma/client";
// import axios from "axios";


const prisma=new PrismaClient();


async function getuserdetails() {
  const a=await prisma.user.findMany();
  console.log(a)
  return a;
}

//standard way to do data fetching in next only in server components we do this
export default async function Home() {
  const userdetails = await getuserdetails(); ///asycn operations in next only in server if this was client we cannot do this
  
  return (
    <div className="div">
      {
        userdetails.map(e=><div key={e.username}>
          {e.username}{e.password}
          </div>)
      }
    </div>
  );
}
