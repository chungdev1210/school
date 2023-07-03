"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const page = () => {
   const pathName = usePathname();
   const router = useRouter();
   const domain = "https://tikmaster.vercel.app/en/";
   useEffect(() => {
      if (pathName !== "") {
         router.push(domain + pathName);
      }
   }, []);
   return <div></div>;
};

export default page;
