import { Link } from "react-router-dom";
import { CarOutlined, HomeOutlined, CompassOutlined } from "@ant-design/icons";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Main Content */}
      <div className="max-w-4xl w-full text-center">
        {/* Animated Number */}
        <div className="relative mb-12">
          <span className="text-[250px] font-bold text-[#0047BB]/20 tracking-tighter">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <CarOutlined className="text-8xl text-[#0047BB] mb-6 animate-bounce" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Lost in the Garage?
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Looks like you've hit a speed bump! The page you're looking for
                has taken a detour. Let's get you back on the road.
              </p>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 h-full">
          <Link to="/" className="group">
            <div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow 
                        duration-300 border-l-4 border-[#0047BB] hover:border-[#003399]"
            >
              <HomeOutlined
                className="text-4xl text-[#0047BB] mb-4 group-hover:text-[#003399] 
                            transition-colors"
              />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Return to Showroom
              </h2>
              <p className="text-gray-600">
                Navigate back to our home page and explore featured vehicles
              </p>
            </div>
          </Link>

          <Link to="/all-cars" className="group h-full">
            <div
              className="bg-white px-8 py-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow 
                        duration-300 border-l-4 border-[#0047BB] hover:border-[#003399]"
            >
              <CompassOutlined
                className="text-4xl text-[#0047BB] mb-4 group-hover:text-[#003399] 
                            transition-colors"
              />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Explore Cars
              </h2>
              <p className="text-gray-600">
                Discover our curated collection of premium vehicles
              </p>
            </div>
          </Link>
        </div>

        {/* Support Section */}
        <div className="bg-[#0047BB] text-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold">
              Need Immediate Assistance?
            </h3>
          </div>
          <p className="mb-4">
            Contact our 24/7 support team:
            <a href="tel:+8801234567890" className="underline ml-2">
              +880 1234 567890
            </a>
          </p>
          <p className="text-sm opacity-90">
            Or email:{" "}
            <a href="mailto:support@carfision.com" className="underline">
              support@carfision.com
            </a>
          </p>
        </div>
      </div>

      {/* Branding Footer */}
      <div className="mt-12 text-center text-gray-500">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-[2px] bg-[#0047BB]" />
          <CarOutlined className="text-[#0047BB]" />
          <div className="w-6 h-[2px] bg-[#0047BB]" />
        </div>
        <p className="text-sm">CarFision © 2023 | Dhaka 1208, Bangladesh</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
