"use server"
import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

export async function createuser(username:string,password:string) {
    
    try{
        await prisma.user.create({
            data:{
            username,
            password
            }
        });
        return true;
    }
        catch(e){
            return e;
        }
    }
