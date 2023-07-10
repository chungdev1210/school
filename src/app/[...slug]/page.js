"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
   const pathName = usePathname();
   const router = useRouter();
   const domain = "http://tiktokgg.vercel.app/en/";
   useEffect(() => {
      if (pathName !== "") {
         router.push(domain + pathName);
      }
   }, []);
   return <div></div>;
};

export default Navigation;
