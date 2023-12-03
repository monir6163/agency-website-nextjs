import TestimonialsList from "@/components/Testimonials/TestimonialsList";
import Breadcums from "@/components/shared/Breadcums";
import Subscribe from "@/components/shared/Subscribe";
export async function generateMetadata() {
  const res = await fetch(`${process.env.BASE_URL}/SiteMeta/testimonials`);
  const JSON = await res.json();
  return {
    title: JSON[0]["title"]
      ? JSON[0]["title"]
      : "Projects" + " | " + "Agency Website Template - Nextjs",
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
    <>
      <Breadcums pageName={"Testimonial List"} />
      <TestimonialsList />
      <Subscribe />
    </>
  );
};

export default page;
