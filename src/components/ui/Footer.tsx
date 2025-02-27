import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#001845] text-white py-8 px-6 md:px-40">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Welcome to <strong>CarFision</strong>, your trusted destination for
            finding the perfect car online. We specialize in offering a wide
            range of high-quality vehicles tailored to your needs, whether
            you're looking for a family car, luxury vehicle, or an eco-friendly
            option. Owned by <strong>Likhon Islam</strong>, we are proud to
            serve customers from Dhaka, Bangladesh (1208). Our commitment is to
            provide an effortless, convenient, and reliable online car-buying
            experience for every customer.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/sedan"
                className="text-gray-300 text-sm hover:text-yellow-400 transition"
              >
                Sedan
              </Link>
            </li>
            <li>
              <Link
                to="/suv"
                className="text-gray-300 text-sm hover:text-yellow-400 transition"
              >
                SUV
              </Link>
            </li>
            <li>
              <Link
                to="/truck"
                className="text-gray-300 text-sm hover:text-yellow-400 transition"
              >
                Truck
              </Link>
            </li>
            <li>
              <Link
                to="/coupe"
                className="text-gray-300 text-sm hover:text-yellow-400 transition"
              >
                Coupe
              </Link>
            </li>
            <li>
              <Link
                to="/convertible"
                className="text-gray-300 text-sm hover:text-yellow-400 transition"
              >
                Convertible
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-300 text-sm">
              <span className="font-semibold">Email:</span>{" "}
              md.likhonislam2x@gmail.com
            </li>
            <li className="text-gray-300 text-sm">
              <span className="font-semibold">Phone:</span> +880 1622422800
            </li>
            <li className="text-gray-300 text-sm">
              <span className="font-semibold">Dhaka, Bangladesh (1208)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} CarFision. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/mdlikhon.islam.3975012"
            className="text-gray-400 hover:text-yellow-400 transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://x.com/MDLikhon694258"
            className="text-gray-400 hover:text-yellow-400 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/imd.likhon/"
            className="text-gray-400 hover:text-yellow-400 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/likhon-islam-919438255"
            className="text-gray-400 hover:text-yellow-400 transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
