async function getHeroData() {
  const res = await fetch("https://agency.teamrabbil.com/api/HeroList");
  const data = await res.json();
  return data;
}

import Image from "next/image";
import Partner from "./Partner";

const HeroList = async () => {
  let heroData = await getHeroData();
  return (
    <div className="relative w-full ">
      <div className="flex flex-col max-w-screen-xl mx-auto px-4 lg:flex-row justify-between items-center gap-10 pt-28">
        <div className="">
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
        <div className="w-full gap-10">
          <div className="flex flex-col lg:flex-row items-center justify-around gap-3 lg:mb-4">
            <Image
              className="object-cover rounded"
              src={heroData["image2"]}
              width={408}
              height={271}
              alt="Hero 1"
              priority={true}
            />
            <Image
              className="object-cover rounded"
              src={heroData["image1"]}
              width={219}
              height={219}
              alt="hero 2"
              priority={true}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-3 justify-around pt-4">
            <Image
              className="object-cover rounded"
              src={heroData["image4"]}
              width={210}
              height={210}
              alt="hero 4"
              priority={true}
            />
            <Image
              className="object-cover rounded"
              src={heroData["image3"]}
              width={408}
              height={271}
              alt="Hero 3"
              priority={true}
            />
          </div>
        </div>
      </div>
      <Partner />
    </div>
  );
};

export default HeroList;
