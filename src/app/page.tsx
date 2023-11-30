import FeauterProject from "@/components/Home/FeauterProject";
import HeroList from "@/components/Home/HeroList";
import WorkList from "@/components/Home/WorkList";
import Subscribe from "@/components/shared/Subscribe";

export default function Home() {
  return (
    <main>
      <div className="bg-[#D7F5DC] py-6">
        <HeroList />
      </div>
      <WorkList />
      <FeauterProject />
      <Subscribe />
    </main>
  );
}
