import ServiceList from "@/components/Service/ServiceList";
import Breadcums from "@/components/shared/Breadcums";
import Subscribe from "@/components/shared/Subscribe";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services - Agency Website Template - Next.js",
  description: "Agency Website Template. Built with Next.js.",
};
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
