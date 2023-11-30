async function getWorkListData() {
  const res = await fetch("https://agency.teamrabbil.com/api/WorkList");
  const data = await res.json();
  return data;
}
import {
  faBook,
  faSmile,
  faThumbsUp,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Counter from "./Counter";

const WorkList = async () => {
  const workList = await getWorkListData();
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="py-16">
          <div>
            <h4 className="font-medium text-lg text-green-600 uppercase mb-4">
              Work List
            </h4>
            <p className="text-xl lg:text-3xl lg:w-2/5 font-semibold text-black leading-10 capitalize">
              We provide the Perfect Solution to your business growth
            </p>
          </div>
          <div className="mt-10">
            <div className="flex flex-col lg:flex-row justify-around items-center gap-4">
              {workList.map((work: any, index: any) => {
                return (
                  <div key={index}>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:border-green-600 transition-all ease-in duration-500">
                      <div className="bg-[#D7F5DC] rounded-full w-5 h-5 p-8 mb-3 flex justify-center items-center">
                        <span className="text-teal-600">{work["step"]} </span>
                      </div>
                      <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 ">
                        {work["title"]}
                      </h5>
                      <p className="mb-5 font-normal text-gray-500 ">
                        {work["des"]}
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center text-black hover:underline"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="w-4 h-4 ml-1"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-20">
            <div className="flex flex-col lg:flex-row justify-around items-center gap-4">
              <div className="w-72 h-72 p-6 bg-white hover:border flex flex-col justify-center items-center border-gray-200 rounded-lg shadow hover:border-green-600 transition-all ease-in duration-500">
                <div className="bg-[#D7F5DC] rounded p-8 mb-3 w-4 h-4 flex justify-center items-center">
                  <FontAwesomeIcon icon={faUsers} className="text-2xl" />
                </div>
                <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 ">
                  <Counter number={240452} duration={5} />
                </h5>
                <p className="font-normal text-black">Followers</p>
              </div>
              <div className="w-72 h-72 p-6 bg-white hover:border flex flex-col justify-center items-center rounded-lg shadow-lg hover:border-green-600 transition-all ease-in duration-500">
                <div className="bg-[#D7F5DC] rounded p-8 mb-3 w-4 h-4 flex justify-center items-center">
                  <FontAwesomeIcon icon={faThumbsUp} className="text-2xl" />
                </div>
                <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 ">
                  <Counter number={6300} duration={5} />
                </h5>
                <p className="font-normal text-black">Solved Problems</p>
              </div>
              <div className="w-72 h-72 p-6 bg-white hover:border flex flex-col justify-center items-center  rounded-lg shadow-lg hover:border-green-600 transition-all ease-in duration-500">
                <div className="bg-[#D7F5DC] rounded p-8 mb-3 w-4 h-4 flex justify-center items-center">
                  <FontAwesomeIcon icon={faSmile} className="text-2xl" />
                </div>
                <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 ">
                  <Counter number={25000} duration={5} />
                </h5>
                <p className="font-normal text-black">Happy Customers</p>
              </div>
              <div className="w-72 h-72 p-6 bg-white  flex flex-col justify-center items-center rounded-lg shadow-lg hover:border hover:border-green-600 transition-all ease-in duration-500">
                <div className="bg-[#D7F5DC] rounded p-8 mb-3 w-4 h-4 flex justify-center items-center">
                  <FontAwesomeIcon icon={faBook} className="text-2xl" />
                </div>
                <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 ">
                  <Counter number={360452} duration={5} />
                </h5>
                <p className="font-normal text-black">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
