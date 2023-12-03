import TeamList from "@/components/Team/TeamList";
import Breadcums from "@/components/shared/Breadcums";
import Subscribe from "@/components/shared/Subscribe";
export async function generateMetadata() {
  const res = await fetch(`${process.env.BASE_URL}/SiteMeta/team`);
  const JSON = await res.json();
  return {
    title: JSON[0]["title"] + " | " + "Agency Website Template - Nextjs",
    description: JSON[0]["description"],
    keywords: JSON[0]["keywords"],
    openGraph: {
      images: [
        {
          url: "https://agency-website-nextjs.vercel.app/images/logo.png",
          width: 800,
          height: 600,
          alt: JSON[0]["title"] + " | " + "Agency Website Template - Nextjs",
        },
      ],
    },
  };
}

async function getData() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  return data;
}

const page = async () => {
  const data = await getData();
  return (
    <main>
      <Breadcums pageName={"Team"} />
      <TeamList />
      <Subscribe />
    </main>
  );
};

export default page;
