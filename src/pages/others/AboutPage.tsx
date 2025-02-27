import { Card } from "antd";
import { Link } from "react-router-dom";
import {
  TeamOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  CarOutlined
} from "@ant-design/icons";
import { banner2, profile } from "../../assets/images";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-[#3989d8] to-[#0047BB]">
        <div className="absolute inset-0 bg-opacity-90 bg-black/30">
          <div className="container mx-auto px-6 md:px-32 lg:px-48 xl:px-60 pt-24 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              CarFision Excellence
            </h1>
            <div className="h-1 w-24 bg-white rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Redefining Automotive Experiences in Dhaka Since 2023
            </p>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-32 lg:px-48 xl:px-60 lg:-mt-24">
        {/* Founder Card */}
        <Card className="rounded-2xl shadow-xl mb-16 border-0">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8">
            <div className="w-48 h-48 rounded-full bg-gray-100 overflow-hidden border-4 border-[#0047BB]">
              <img
                src={profile}
                alt="Likhon Islam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Likhon Islam
              </h2>
              <p className="text-lg text-[#0047BB] font-semibold mb-4">
                Founder & CEO
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of automotive industry experience, Likhon
                established CarFision to bring world-class vehicle solutions to
                Bangladesh. His vision combines technological innovation with
                uncompromising quality standards.
              </p>
            </div>
          </div>
        </Card>

        {/* Mission Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-[#0047BB]">
            <CarOutlined className="text-4xl text-[#0047BB] mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Commitment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every vehicle undergoes a 360° certification process including:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center text-gray-600">
                <SafetyCertificateOutlined className="text-[#0047BB] mr-2" />
                150-Point Mechanical Inspection
              </li>
              <li className="flex items-center text-gray-600">
                <TeamOutlined className="text-[#0047BB] mr-2" />
                Authenticity Verification
              </li>
              <li className="flex items-center text-gray-600">
                <GlobalOutlined className="text-[#0047BB] mr-2" />
                Global Quality Standards
              </li>
            </ul>
          </div>

          <div className="bg-[#0047BB] p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose CarFision?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-xl">🏆</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Award-Winning Service</h4>
                  <p className="text-gray-200 text-sm">
                    Recognized as Best Auto Dealer 2023
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-xl">🔧</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Comprehensive Warranty</h4>
                  <p className="text-gray-200 text-sm">
                    2-Year Certified Protection Plan
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Corporate Solutions</h4>
                  <p className="text-gray-200 text-sm">
                    Fleet Management & Leasing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="mb-24">
          <div className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12">
                <h2 className="text-3xl font-bold mb-6">
                  Premium Showroom Experience
                </h2>
                <div className="h-1 w-16 bg-[#0047BB] rounded-full mb-8"></div>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Visit our state-of-the-art facility in Dhaka 1208 featuring:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0047BB] rounded-full flex items-center justify-center">
                        <span className="text-white">✔</span>
                      </div>
                      <span>Virtual Reality Configurator</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0047BB] rounded-full flex items-center justify-center">
                        <span className="text-white">✔</span>
                      </div>
                      <span>Digital Test Drive Booking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0047BB] rounded-full flex items-center justify-center">
                        <span className="text-white">✔</span>
                      </div>
                      <span>VIP Client Lounge</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`bg-gray-800 h-96 `}
                style={{
                  backgroundImage: `url(${banner2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-2xl border-t-8 border-[#0047BB]">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Journey
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Whether you're buying your first car or upgrading your fleet,
              we're here to guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact-us" className="flex-1 max-w-xs">
                <button
                  className="w-full bg-[#0047BB] hover:bg-[#003399] !text-white px-8 py-4 rounded-xl 
                                    transition-all duration-300 transform hover:scale-105 text-lg font-semibold 
                                    flex items-center justify-center gap-2 cursor-pointer"
                >
                  📞 Book Consultation
                </button>
              </Link>
              <Link to="/all-cars" className="flex-1 max-w-xs">
                <button
                  className="w-full bg-white border-2 border-[#0047BB] text-[#0047BB] 
                                    hover:bg-[#0047BB] hover:!text-white px-8 py-4 rounded-xl transition-all 
                                    duration-300 transform hover:scale-105 text-lg font-semibold 
                                    flex items-center justify-center gap-2  cursor-pointer"
                >
                  🚗 View Cars
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
