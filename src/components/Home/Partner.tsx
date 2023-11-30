async function getBrandList() {
  const res = await fetch(`${process.env.BASE_URL}/BrandList`);
  const data = await res.json();
  return data;
}
import Image from "next/image";
const Google = "/images/partner/google.png";
const Monday = "/images/partner/monday.png";
const Slack = "/images/partner/slack.png";
const Notion = "/images/partner/notion.png";
const Trello = "/images/partner/trello.png";

const Partner = async () => {
  let brandData = await getBrandList();
  return (
    <div className="w-full bg-[#F8FFF9] py-8 mt-14">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-4">
        {brandData.map((brand: any, index: any) => (
          <Image
            key={index}
            src={brand["image"]}
            alt="google"
            width={88}
            height={29}
            priority={true}
            className="object-cover self-center"
          />
        ))}
      </div>
    </div>
  );
};

export default Partner;
