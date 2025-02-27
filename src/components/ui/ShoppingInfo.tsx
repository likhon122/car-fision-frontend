import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { FcCollect } from "react-icons/fc";

const CarShowroomInfo = () => {
  const features = [
    {
      image: <TbTruckDelivery className="text-[90px] text-gray-600" />,
      title: "Free Delivery",
      description: "We offer free delivery to your doorstep across the region."
    },
    {
      image: <MdOutlinePayments className="text-[90px] text-gray-600" />,
      title: "Flexible Payment Options",
      description:
        "Choose from various payment methods including finance, card, or bank transfer."
    },
    {
      image: <FcCollect className="text-[90px] text-gray-600" />,
      title: "Click & Collect",
      description:
        "Order your car online and pick it up at our showroom at your convenience."
    }
  ];

  return (
    <div className=" py-18 bg-[#F9F9FB] text-center w-full ">
      <div className="container mx-auto px-4">
        <div className="mb-10 ">
          <h2 className="text-4xl font-bold text-gray-800">
            Drive Your Dream Car with Ease!
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Explore our hassle-free car buying experience today.
          </p>
        </div>
        <div className="grid grid-cols-1 w-full lg:grid-cols-3 gap-16 justify-items-center ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-2 py-3 w-full border border-black/10 rounded-lg shadow-md bg-white transition-transform duration-300 hover:scale-105"
            >
              <div className="my-10">{feature.image}</div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 mt-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarShowroomInfo;
