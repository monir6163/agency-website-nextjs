import Image from "next/image";

async function getServiceList() {
  const response = await fetch("https://agency.teamrabbil.com/api/AllService");
  const data = await response.json();
  return data;
}
const ServiceList = async () => {
  const serviceList = await getServiceList();
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="pt-16">
          <div>
            <h4 className="font-medium text-lg text-green-600 uppercase mb-4">
              Our All Services
            </h4>
            <p className="text-xl lg:text-3xl lg:w-2/5 font-semibold text-black leading-10 capitalize">
              We Provide BestWeb design services
            </p>
          </div>
        </div>
        <div className="pt-8">
          <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-2">
            {serviceList.map((service: any, index: any) => (
              <div
                className="max-w-2xl bg-white rounded-lg border shadow group hover:border-green-600 transition duration-500 ease-in-out"
                key={index}
              >
                <div className="p-5">
                  <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900">
                    {service["title"]}
                  </h5>
                  <p className="text-sm text-gray-500 text-center">
                    {service["des"]}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 p-2 gap-4">
                  <div className="grid gap-4">
                    <div>
                      <Image
                        className="h-auto max-w-full rounded-lg"
                        src={service["image1"]}
                        width={358}
                        height={164}
                        alt=""
                      />
                    </div>
                    <div>
                      <Image
                        className="h-auto max-w-full rounded-lg"
                        src={service["image2"]}
                        alt=""
                        width={358}
                        height={263}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div>
                      <Image
                        className="h-auto max-w-full rounded-lg"
                        src={service["image3"]}
                        width={358}
                        height={263}
                        alt=""
                      />
                    </div>
                    <div>
                      <Image
                        className="h-auto max-w-full rounded-lg"
                        src={service["image4"]}
                        alt=""
                        width={358}
                        height={263}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
