"use client";
import ScrollToTop from "@/utility/ScrollToTop";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faLocation } from "@fortawesome/free-solid-svg-icons/faLocation";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const AppFooter = () => {
  return (
    <>
      <div className="w-full bg-black pt-20">
        <div className="flex flex-col max-w-screen-xl mx-auto px-4 lg:flex-row justify-between gap-4">
          <div className="">
            <span className="text-orange-600 text-4xl font-bold font-['Poppins']">
              Design
            </span>{" "}
            <span className="text-white text-4xl font-bold font-['Poppins']">
              Agency
            </span>
            <div className="lg:w-80 pt-4 text-white text-xl font-normal font-['Avenir']">
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </div>
            <div className="mt-4 ">
              <div className="flex gap-3">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-teal-600 transition-all ease-in duration-500"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-xl text-white"
                  />
                </Link>
                <Link
                  href="https://www.twitter.com/"
                  target="_blank"
                  className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-teal-600 transition-all ease-in duration-500"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-xl text-white"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-teal-600 transition-all ease-in duration-500"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-xl text-white"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-teal-600 transition-all ease-in duration-500"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-xl text-white"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white mb-4 font-semibold text-xl">
              Quick Links
            </h3>
            <ul className="text-white text-base font-normal font-['Avenir']">
              <li className="py-1 hover:text-teal-600 transition-all ease-in duration-500">
                <Link href="#">
                  <FontAwesomeIcon icon={faArrowRight} /> Home
                </Link>
              </li>
              <li className="py-1 hover:text-teal-600 transition-all ease-in duration-500">
                <Link href="#">
                  <FontAwesomeIcon icon={faArrowRight} /> Team
                </Link>
              </li>
              <li className="py-1 hover:text-teal-600 transition-all ease-in duration-500">
                <Link href="#">
                  <FontAwesomeIcon icon={faArrowRight} /> Service
                </Link>
              </li>
              <li className="py-1 hover:text-teal-600 transition-all ease-in duration-500">
                <Link href="#">
                  <FontAwesomeIcon icon={faArrowRight} /> Projects
                </Link>
              </li>
              <li className="py-1 hover:text-teal-600 transition-all ease-in duration-500">
                <Link href="#">
                  <FontAwesomeIcon icon={faArrowRight} /> Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-4 font-semibold text-xl">Address</h3>
            <div className="text-white text-xl font-medium font-['Avenir']">
              <ul>
                <li className="py-1">
                  <FontAwesomeIcon icon={faLocation} /> 123, Main Street, Your
                  City
                </li>
                <li className="py-1 hover:text-teal-600 transition-all ease-in duration-500">
                  <FontAwesomeIcon icon={faMobile} /> 1234567890
                </li>
                <li className="py-1 hover:text-teal-600 transition-all ease-in duration-500">
                  <Link href="mailto:ex@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} /> ex@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-white py-10">
          <span className="text-base font-['Avenir']">
            © Design Agency {new Date().getFullYear().toString()}. All rights
            reserved.
          </span>
        </div>
        <a className="fixed bottom-4 right-4">
          <ScrollToTop />
        </a>
      </div>
    </>
  );
};

export default AppFooter;
