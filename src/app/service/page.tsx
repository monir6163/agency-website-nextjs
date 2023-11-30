import ServiceList from "@/components/Service/ServiceList";
import Breadcums from "@/components/shared/Breadcums";
import Subscribe from "@/components/shared/Subscribe";

const page = () => {
  return (
    <div>
      <Breadcums pageName={"Our Services"} />
      <ServiceList />
      <Subscribe />
    </div>
  );
};

export default page;
