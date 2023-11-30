async function getProjectList() {
  const response = await fetch("https://agency.teamrabbil.com/api/AllProject");
  const data = await response.json();
  return data;
}
import Image from "next/image";

const ProjectList = async () => {
  const projectList = await getProjectList();
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
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
                className="w-full bg-white rounded-lg border shadow group hover:border-green-600 transition duration-500 ease-in-out"
                key={index}
              >
                <div className="p-5 flex justify-center items-center">
                  <Image
                    src={project["image"]}
                    alt="1"
                    width={544}
                    height={472}
                    className="rounded-lg"
                  />
                </div>

                <div className="p-5">
                  <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900">
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
