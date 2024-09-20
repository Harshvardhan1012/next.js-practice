"use client"
import { createuser } from '@/app/actions/user';
import { useRouter } from 'next/navigation';
import React from 'react'
// import axios from "axios";
import {  useState } from "react";
// import { useRouter } from "next/navigation";

export function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router=useRouter();

    const functionnew=async()=>{
        createuser(username,password);
        setUsername("");
        setPassword("");
        router.push('/');
    }


    return(<div className='flex justify-center items-center w-screen h-screen overflow-x-hidden'>
    <div className='grid grid-rows-2 justify-center gap-4 items-center w-[400px]'>
   <div className='w-[400px]'>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required />
    </div>
    <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Passowrd" required />
    </div>
    <button onClick={functionnew}>signup</button>
    </div>
</div>)

}

// function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
//     return <div>
//         <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
//         <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
//     </div>
// }

// interface LabelledInputType {
//     label: string;
//     placeholder: string;
//     type?: string;
//     onChange: ChangeEventHandler<HTMLInputElement>
// }