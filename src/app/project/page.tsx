import ProjectList from "@/components/Project/ProjectList";
import Breadcums from "@/components/shared/Breadcums";
import Subscribe from "@/components/shared/Subscribe";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects - Agency Website Template - Next.js",
  description: "Agency Website Template. Built with Next.js.",
};

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
