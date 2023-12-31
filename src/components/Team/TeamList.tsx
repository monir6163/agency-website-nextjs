async function getTeamList() {
  const response = await fetch(`${process.env.BASE_URL}/TeamList`);
  const data = await response.json();
  return data;
}
import AosConfig from "@/utility/AosConfig";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
AosConfig;

const TeamList = async () => {
  const data = await getTeamList();
  return (
    <div className="bg-white">
      <div
        className="max-w-screen-xl mx-auto px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="pt-16">
          <div>
            <h4 className="font-medium text-lg text-green-600 uppercase mb-4">
              Our Team Member
            </h4>
            <p className="text-xl lg:text-3xl lg:w-2/5 font-semibold text-black leading-10 capitalize">
              Check our awesome team members
            </p>
          </div>
        </div>
        <div className="pt-8">
          <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-3 ">
            {data.slice(0, 3).map((item: any, index: any) => (
              <div
                className="max-w-2xl bg-white border rounded-lg shadow group relative hover:border-green-600 transition ease-in duration-500"
                key={index}
              >
                <div className="w-full p-5 ">
                  <Image
                    className="rounded-lg"
                    src={item["image"]}
                    width={500}
                    height={300}
                    alt=" image"
                  />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900">
                    {item["name"]}
                  </h5>
                  <p className="text-sm text-gray-500 text-center">
                    {item["bio"]}
                  </p>
                  <div className="absolute inset-0 justify-center hidden group-hover:flex items-center">
                    <div className="bg-white p-2 rounded-3xl shadow flex justify-around gap-3">
                      <Link
                        href={item["facebook"]}
                        className="flex items-center justify-center text-gray-500 hover:text-gray-900"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </Link>

                      {/* line divided */}
                      <div className="w-px h-6 bg-gray-200"></div>

                      <Link
                        href={item["twitter"]}
                        className="flex items-center justify-center text-gray-500 hover:text-gray-900"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                      <div className="w-px h-6 bg-gray-200"></div>
                      <Link
                        href={item["instagram"]}
                        className="flex items-center justify-center text-gray-500 hover:text-gray-900"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
