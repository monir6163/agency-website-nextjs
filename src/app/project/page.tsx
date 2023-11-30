import ProjectList from "@/components/Project/ProjectList";
import Breadcums from "@/components/shared/Breadcums";
import Subscribe from "@/components/shared/Subscribe";

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
