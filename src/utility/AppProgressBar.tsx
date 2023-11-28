"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const AppProgressBar = () => {
  return (
    <ProgressBar
      height="4px"
      color="#16a34a"
      options={{ showSpinner: true }}
      shallowRouting
    />
  );
};

export default AppProgressBar;
