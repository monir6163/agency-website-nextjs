"use client";
import { usePathname } from "next/navigation";

const PageTitle = ({ pagetitle }: any) => {
  const pathName = usePathname();
  return (
    <>
      {pagetitle ? (
        <span className="text-gray-900">{pagetitle}</span>
      ) : (
        <span className="text-gray-900">
          {pathName === "/" ? "Home" : pathName}
        </span>
      )}
    </>
  );
};

export default PageTitle;
