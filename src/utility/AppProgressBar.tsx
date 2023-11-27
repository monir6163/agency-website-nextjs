"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const AppProgressBar = () => {
  return (
    <ProgressBar
      height="4px"
      color="#20B15A"
      options={{ showSpinner: true }}
      shallowRouting
    />
  );
};

export default AppProgressBar;
