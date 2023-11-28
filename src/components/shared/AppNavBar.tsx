"use client";
const Logo = "/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const AppNavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathName]);

  return (
    <nav className="fixed w-full h-16 z-50">
      <div className="max-w-screen-xl h-full mx-auto px-4">
        <div className="flex items-center justify-between h-full">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              width={150}
              height={40}
              priority={true}
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`md:flex items-center hidden ${
              isMobileMenuOpen ? "md:hidden" : ""
            }`}
          >
            <li className="mx-4">
              <Link
                href={"/"}
                className="text-gray-900 hover:text-teal-600 font-medium text-base"
              >
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href={"/team"}
                className="text-gray-900 hover:text-teal-600 font-medium text-base"
              >
                Team
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href={"/service"}
                className="text-gray-900 hover:text-teal-600 font-medium text-base"
              >
                Service
              </Link>
            </li>

            <li className="mx-4">
              <Link
                href={"/project"}
                className="text-gray-900 hover:text-teal-600 font-medium text-base"
              >
                Projects
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href={"/testimonials"}
                className="text-gray-900 hover:text-teal-600 font-medium text-base"
              >
                Testimonial
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href={"#"}
                className="text-gray-900 hover:text-teal-600 font-medium text-base px-8 p-3 rounded-lg border-[1px] border-[#20B15A]"
              >
                Login
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href={"#"}
                className="text-white font-medium text-base px-8 p-[14.2px] rounded-lg bg-[#20B15A]"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Responsive menu for mobile */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } transition-all ease-in-out duration-300`}
      >
        <ul className="flex flex-col items-center py-8 space-y-4 mt-4 bg-[#D7F5DC] shadow rounded-l-xl">
          <li className="mx-4">
            <Link
              href={"/"}
              className="text-gray-900 hover:text-teal-600 font-medium text-base"
            >
              Home
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href={"/team"}
              className="text-gray-900 hover:text-teal-600 font-medium text-base"
            >
              Team
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href={"/service"}
              className="text-gray-900 hover:text-teal-600 font-medium text-base"
            >
              Service
            </Link>
          </li>

          <li className="mx-4">
            <Link
              href={"/project"}
              className="text-gray-900 hover:text-teal-600 font-medium text-base"
            >
              Projects
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href={"/testimonials"}
              className="text-gray-900 hover:text-teal-600 font-medium text-base"
            >
              Testimonial
            </Link>
          </li>
          <div className="flex pt-4">
            <li className="mx-4">
              <Link
                href={"#"}
                className="text-gray-900 hover:text-teal-600 font-medium text-base px-8 p-3 rounded-lg border-[1px] border-[#20B15A]"
              >
                Login
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href={"#"}
                className="text-white font-medium text-base px-8 p-[14.2px] rounded-lg bg-[#20B15A]"
              >
                Register
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default AppNavBar;
