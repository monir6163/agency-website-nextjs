async function getWorkListData() {
  const res = await fetch(`${process.env.BASE_URL}/WorkList`);
  const res2 = await fetch(`${process.env.BASE_URL}/StatList`);
  const data = await res.json();
  const data2 = await res2.json();
  return { data, data2 };
}
import AosConfig from "@/utility/AosConfig";
import {
  faBook,
  faSmile,
  faThumbsUp,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Counter from "./Counter";
AosConfig;

const WorkList = async () => {
  const workList = await getWorkListData();
  // console.log(parseFloat(workList.data2.followers.replace(/,/g, "")));

  return (
    <div
      className="bg-white"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
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
            <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-3">
              {workList.data.map((work: any, index: any) => (
                <div
                  className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:border-green-600 transition-all ease-in duration-500"
                  key={index}
                >
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
              ))}
            </div>
          </div>
          <div className="mt-20">
            <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-4">
              <div className="w-full h-72 p-6 bg-white hover:border flex flex-col justify-center items-center rounded-lg shadow-lg hover:border-green-600 transition-all ease-in duration-500">
                <div className="bg-[#D7F5DC] rounded p-8 mb-3 w-4 h-4 flex justify-center items-center">
                  <FontAwesomeIcon icon={faUsers} className="text-2xl" />
                </div>
                <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 ">
                  <Counter
                    number={parseFloat(
                      workList.data2.followers.replace(/,/g, "")
                    )}
                    duration={5}
                  />
                </h5>
                <p className="font-normal text-black">Followers</p>
              </div>
              <div className="w-full h-72 p-6 bg-white hover:border flex flex-col justify-center items-center rounded-lg shadow-lg hover:border-green-600 transition-all ease-in duration-500">
                <div className="bg-[#D7F5DC] rounded p-8 mb-3 w-4 h-4 flex justify-center items-center">
                  <FontAwesomeIcon icon={faThumbsUp} className="text-2xl" />
                </div>
                <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 ">
                  <Counter
                    number={parseFloat(workList.data2.solved.replace(/,/g, ""))}
                    duration={5}
                  />
                </h5>
                <p className="font-normal text-black">Solved Problems</p>
              </div>
              <div className="w-full h-72 p-6 bg-white hover:border flex flex-col justify-center items-center rounded-lg shadow-lg hover:border-green-600 transition-all ease-in duration-500">
                <div className="bg-[#D7F5DC] rounded p-8 mb-3 w-4 h-4 flex justify-center items-center">
                  <FontAwesomeIcon icon={faSmile} className="text-2xl" />
                </div>
                <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 ">
                  <Counter
                    number={parseFloat(
                      workList.data2.customers.replace(/,/g, "")
                    )}
                    duration={5}
                  />
                </h5>
                <p className="font-normal text-black">Happy Customers</p>
              </div>
              <div className="w-full h-72 p-6 bg-white hover:border flex flex-col justify-center items-center rounded-lg shadow-lg hover:border-green-600 transition-all ease-in duration-500">
                <div className="bg-[#D7F5DC] rounded p-8 mb-3 w-4 h-4 flex justify-center items-center">
                  <FontAwesomeIcon icon={faBook} className="text-2xl" />
                </div>
                <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 ">
                  <Counter
                    number={parseFloat(
                      workList.data2.projects.replace(/,/g, "")
                    )}
                    duration={5}
                  />
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
