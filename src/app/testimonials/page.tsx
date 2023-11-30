import TestimonialsList from "@/components/Testimonials/TestimonialsList";
import Breadcums from "@/components/shared/Breadcums";
import Subscribe from "@/components/shared/Subscribe";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Testimonials - Agency Website Template - Next.js",
  description: "Agency Website Template. Built with Next.js.",
};

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
