async function TestimonialsDataList() {
  const res = await fetch(`${process.env.BASE_URL}/TestimonialList`);
  const data = await res.json();
  return data;
}
import AosConfig from "@/utility/AosConfig";
import Image from "next/image";
AosConfig;

const TestimonialsList = async () => {
  const testimonialsList = await TestimonialsDataList();
  return (
    <div className="bg-white">
      <div
        className="max-w-screen-xl mx-auto px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="pt-16">
          <div>
            <h4 className="font-medium text-lg text-green-600 uppercase mb-4">
              Testimonial List
            </h4>
            <p className="text-xl lg:text-3xl lg:w-2/5 font-semibold text-black leading-10 capitalize">
              Better Agency/SEO Solution At Your Fingertips
            </p>
          </div>
        </div>
        <div className="pt-8">
          <div className="grid grid-cols-1 justify-items-stretch gap-5 lg:grid-cols-3">
            {testimonialsList.map((testimonial: any, index: any) => (
              <div
                className="max-w-2xl bg-white rounded-lg border shadow group hover:border-green-600 transition duration-500 ease-in-out"
                key={index}
              >
                <div className="flex justify-center items-center pt-10">
                  <Image
                    src={testimonial["image"]}
                    width={96}
                    height={96}
                    alt=""
                    className="rounded-lg mx-auto w-24 h-24"
                  />
                </div>
                <div className="p-5 pt-10">
                  <h5 className="mb-2 text-sm text-center tracking-tight text-gray-900 capitalize leading-relaxed">
                    {testimonial["msg"]}
                  </h5>
                  <h3 className="text-2xl pt-5 text-center font-semibold tracking-tight text-gray-900">
                    {testimonial["name"]}
                  </h3>
                  <p className="text-sm pt-3 text-gray-500 text-center">
                    {testimonial["designation"]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsList;
