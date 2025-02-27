import CategoryItem from "../../components/ui/CategoryItem";

const Convertible = () => {
  return (
    <div className="py-24 bg-[#F9F9FB] ">
      <div className="container mx-auto px-4 ">
        <h1 className="text-[20px] font-bold text-center !mb-10">
          All Convertible
        </h1>
        <CategoryItem item="Convertible" />
      </div>
    </div>
  );
};

export default Convertible;
