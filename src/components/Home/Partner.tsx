import Image from "next/image";
const Google = "/images/partner/google.png";
const Monday = "/images/partner/monday.png";
const Slack = "/images/partner/slack.png";
const Notion = "/images/partner/notion.png";
const Trello = "/images/partner/trello.png";

const Partner = () => {
  return (
    <div className="w-full bg-[#F8FFF9] py-8 mt-14">
      <div className="flex flex-col lg:flex-row gap-2 justify-between items-center max-w-screen-xl mx-auto px-4">
        <Image
          src={Google}
          alt="google"
          width={88}
          height={29}
          priority={true}
        />

        <Image
          src={Trello}
          alt="google"
          width={88}
          height={29}
          priority={true}
        />

        <Image
          src={Monday}
          alt="google"
          width={88}
          height={29}
          priority={true}
        />

        <Image
          src={Notion}
          alt="google"
          width={88}
          height={29}
          priority={true}
        />

        <Image
          src={Slack}
          alt="google"
          width={88}
          height={29}
          priority={true}
        />
      </div>
    </div>
  );
};

export default Partner;
