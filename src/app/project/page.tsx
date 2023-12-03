import ProjectList from "@/components/Project/ProjectList";
import Breadcums from "@/components/shared/Breadcums";
import Subscribe from "@/components/shared/Subscribe";
export async function generateMetadata() {
  const res = await fetch(`${process.env.BASE_URL}/SiteMeta/projects`);
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

const page = () => {
  return (
    <main>
      <Breadcums pageName={"All Projects"} />
      <ProjectList />
      <Subscribe />
    </main>
  );
};

export default page;
