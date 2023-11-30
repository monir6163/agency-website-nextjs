import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`${
        isVisible ? "block" : "hidden"
      }   animate-bounce  w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all ease-in duration-500`}
    >
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={faArrowUp} className="text-xl text-white" />
      </div>
    </button>
  );
};

export default ScrollToTop;
