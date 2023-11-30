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
        <div className="w-full gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-2 gap-4">
            <div className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={heroData["image2"]}
                  width={358}
                  height={263}
                  style={{
                    width: "358px",
                    height: "263px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={heroData["image1"]}
                  alt=""
                  style={{
                    width: "358px",
                    height: "263px",
                    objectFit: "cover",
                  }}
                  width={358}
                  height={263}
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={heroData["image4"]}
                  width={358}
                  height={263}
                  style={{
                    width: "358px",
                    height: "263px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={heroData["image3"]}
                  alt=""
                  width={358}
                  height={263}
                  style={{
                    width: "358px",
                    height: "263px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col lg:flex-row items-center justify-around gap-3 lg:mb-4">
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
          </div> */}
        </div>
      </div>
      <Partner />
    </div>
  );
};

export default HeroList;
