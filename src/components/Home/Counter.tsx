"use client";
import CountUp from "react-countup";

const Counter = ({ number, duration }: any) => {
  return <CountUp end={number} duration={duration} />;
};

export default Counter;
