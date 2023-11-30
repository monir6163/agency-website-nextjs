"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React from "react";

AOS.init();

export default function AosConfig({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
