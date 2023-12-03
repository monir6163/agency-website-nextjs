async function getHeroData() {
  const res = await fetch(`${process.env.BASE_URL}/HeroList`);
  const data = await res.json();
  return data;
}

import AosConfig from "@/utility/AosConfig";
import Image from "next/image";
import Partner from "./Partner";
AosConfig;

const HeroList = async () => {
  let heroData = await getHeroData();
  return (
    <div className="relative h-auto ">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className=" max-w-screen-xl mx-auto px-4 pt-28 grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-2"
      >
        <div className="flex items-center">
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold lg:leading-[65px] mb-4 capitalize">
              {heroData["title"]}
            </h1>
            <p className="font-medium text-lg mb-8 capitalize">
              {heroData["description"]}
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-green-500 rounded-lg p-4 text-white text-lg font-semibold font-poppins hover:bg-green-600 transition-all ease-in">
              Get Started
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 justify-center items-center">
          <Image
            className="h-full md:h-72 object-cover rounded w-full md:w-full col-span-1 md:col-span-3"
            src={heroData["image1"]}
            alt="image1"
            width={408}
            height={271}
          />
          <Image
            className="w-full md:w-56 h-full object-center rounded md:h-72 col-span-2"
            src={heroData["image2"]}
            alt="image2"
            width={358}
            height={263}
          />
          <Image
            className="w-full md:w-56 h-full object-center rounded md:h-72 col-span-2"
            src={heroData["image3"]}
            alt="image3"
            width={358}
            height={263}
          />
          <Image
            className="h-full md:h-72 object-cover rounded w-full md:w-full col-span-1 md:col-span-3"
            src={heroData["image4"]}
            alt="image4"
            width={408}
            height={271}
          />
        </div>
      </div>
      <Partner />
    </div>
  );
};

export default HeroList;
