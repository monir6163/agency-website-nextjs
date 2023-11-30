import AosConfig from "@/utility/AosConfig";
import PageTitle from "@/utility/PageTitle";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
AosConfig;

const Breadcums = ({ pageName }: any) => {
  return (
    <>
      <div className="w-full h-96 bg-slate-50 relative">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div
              className="py-40"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h1 className="text-3xl font-bold text-gray-900">
                <PageTitle pagetitle={pageName} />
              </h1>

              <div className="flex items-center space-x-2 mt-4">
                <Link href={"/"} className="text-gray-900 hover:text-teal-600">
                  Home
                </Link>
                <span className="text-gray-900">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="bg-transparent text-sm"
                  />
                </span>
                <span className="text-green-500">
                  {pageName === "Team"
                    ? "Team"
                    : pageName === "Testimonial List"
                    ? "Testimonials"
                    : pageName === "Our Services"
                    ? "Services"
                    : pageName === "All Projects"
                    ? "Projects"
                    : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animate-bounce absolute -top-40 right-0 opacity-40 blur-sm bg-emerald-100 h-96 w-40 rounded-l-full"></div>
    </>
  );
};

export default Breadcums;
