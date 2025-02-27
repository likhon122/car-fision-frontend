import CategoryItem from "../../components/ui/CategoryItem";

const Sedan = () => {
  return (
    <div className="py-24 bg-[#F9F9FB] ">
      <div className="container mx-auto px-4">
        <h1 className="text-[20px] font-bold text-center !mb-10">All Sedan</h1>
        <CategoryItem item="Sedan" />
      </div>
    </div>
  );
};

export default Sedan;
