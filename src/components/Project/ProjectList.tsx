async function getProjectList() {
  const response = await fetch(`${process.env.BASE_URL}/AllProject`);
  const data = await response.json();
  return data;
}
import AosConfig from "@/utility/AosConfig";
import Image from "next/image";
AosConfig;

const ProjectList = async () => {
  const projectList = await getProjectList();
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
              All Project
            </h4>
            <p className="text-xl lg:text-3xl lg:w-2/5 font-semibold text-black leading-10 capitalize">
              Better Agency/SEO Solution At Your Fingertips
            </p>
          </div>
        </div>
        <div className="pt-8">
          <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-2">
            {projectList.map((project: any, index: any) => (
              <div
                className="w-full bg-white rounded-lg border shadow group hover:border-green-600 transition duration-500 ease-in-out p-5"
                key={index}
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={project["image"]}
                    alt={project["title"]}
                    width={544}
                    height={472}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h5 className="text-2xl text-center font-semibold tracking-tight text-gray-900">
                    {project["title"]}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
