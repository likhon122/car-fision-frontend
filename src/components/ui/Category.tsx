import { Link } from "react-router-dom";
import { convertible, coupe, sedan, suv, truck } from "../../assets/images";

const categories = [
  { id: 1, image: sedan, label: "Sedan", path: "/sedan" },
  { id: 2, image: suv, label: "SUV", path: "/suv" },
  { id: 3, image: truck, label: "Truck", path: "/truck" },
  {
    id: 4,
    image: coupe,
    label: "Coupe",
    path: "/coupe"
  },
  {
    id: 5,
    image: convertible,
    label: "Convertible",
    path: "/convertible"
  }
];

const Category = () => {
  return (
    <div className="py-18 bg-[#F9F9FB] ">
      <div className="container mx-auto px-4">  
        <div className="!mb-10 ">
          <h1 className="!text-4xl font-bold text-center mb-2">
            Featured Category
          </h1>
          <p className="text-[15px] text-center">
            Get Your Desired car from Featured Category!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={category.path}>
              <div
                className="flex flex-col cursor-pointer  items-center text-center bg-white h-full transition-transform hover:scale-105 rounded-lg p-4"
                style={{
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                }}
              >
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-[269px] rounded-lg mb-4 max-h-[170px] h-full"
                />
                <p className="text-lg font-medium">{category.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
