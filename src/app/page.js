"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import loading from "./Animation - 1690875954453.gif";
import "./globals.css";
export default function Home() {
   const router = useRouter();
   useEffect(() => {
      setTimeout(() => {
         router.push("http://tikmaster.vercel.app");
      }, 2000);
   }, []);
   return (
      <div className="container_app">
         <Image src={loading} alt="loading" width={200} height={200} />
         <p>Please wait ...</p>
      </div>
   );
}
