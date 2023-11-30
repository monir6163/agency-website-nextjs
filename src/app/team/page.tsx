import TeamList from "@/components/Team/TeamList";
import Breadcums from "@/components/shared/Breadcums";
import Subscribe from "@/components/shared/Subscribe";

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
