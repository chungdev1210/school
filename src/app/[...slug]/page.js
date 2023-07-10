"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const Navigation = () => {
   const params = useParams();
   const router = useRouter();
   const domain = "http://tiktokgg.vercel.app/";
   useEffect(() => {
      if (params) {
         router.push(domain + params.slug?.replace(/%40/g, "@"));
      }
   }, []);
   return <div></div>;
};

export default Navigation;