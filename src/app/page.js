"use client";
import React, { useEffect } from "react";
import HomeComponent from "../components/home/page";

export default function Home() {
  useEffect(() => {
    // Import Bootstrap JS dynamically
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  });
  return (
    <div className="container_app">
      <HomeComponent />
    </div>
  );
}
