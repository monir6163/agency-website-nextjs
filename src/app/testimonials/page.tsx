import TestimonialsList from "@/components/Testimonials/TestimonialsList";
import Breadcums from "@/components/shared/Breadcums";
import Subscribe from "@/components/shared/Subscribe";

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
