import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { ProtectedRoute } from "../components/layout/ProtectedRoute";
import UserLayout from "../components/layout/UserLayout";
import UserCart from "../pages/user/UserCart";
import AllProduct from "../pages/product/AllProduct";
import SingleProduct from "../pages/product/SingleProduct";
import Payment from "../pages/payment/Payment";
import UserDashboard from "../pages/user/UserDashboard";
import Order from "../pages/user/Order";
import Address from "../pages/user/Address";
import ManageUser from "../pages/admin/ManageUser";
import CreateProduct from "../pages/admin/CreateProduct";
import AboutPage from "../pages/others/AboutPage";
import ContactUsPage from "../pages/others/ContactUsPage";
import BlogPage from "../pages/others/BlogPage";
import SingleBlogPage from "../pages/others/SingleBlogPage";
import { ManageProduct } from "../pages/admin/ManageProduct";
import UpdateProduct from "../pages/admin/UpdateProduct";
import ManageOrder from "../pages/admin/ManageOrder";
import Sedan from "../pages/product/Sedan";
import SUV from "../pages/product/SUV";
import Truck from "../pages/product/Truck";
import Coupe from "../pages/product/Coupe";
import Convertible from "../pages/product/Convertible";
import NotFoundPage from "../pages/others/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sedan",
        element: <Sedan />
      },
      {
        path: "/suv",
        element: <SUV />
      },
      {
        path: "/truck",
        element: <Truck />
      },
      {
        path: "/coupe",
        element: <Coupe />
      },
      {
        path: "/convertible",
        element: <Convertible />
      },
      {
        path: "/user-cart",
        element: <UserCart />
      },
      {
        path: "/all-cars",
        element: <AllProduct />
      },
      {
        path: "/product/:productId",
        element: <SingleProduct />
      },
      {
        path: "/payment",
        element: <Payment />
      },
      {
        path: "/about-us",
        element: <AboutPage />
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />
      },
      {
        path: "/blogs",
        element: <BlogPage />
      },
      {
        path: "/blog/:blogId",
        element: <SingleBlogPage />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <UserLayout />{" "}
      </ProtectedRoute>
    ),
    children: [
      {
        path: "update-Profile",
        element: <UserDashboard />
      },
      {
        path: "see-order",
        element: <Order />
      },
      {
        path: "address",
        element: <Address />
      },
      {
        path: "create-product",
        element: <CreateProduct />
      },
      {
        path: "manage-order",
        element: <ManageOrder />
      },
      {
        path: "manage-user",
        element: <ManageUser />
      },
      {
        path: "manage-product",
        element: <ManageProduct />
      },
      {
        path: "update-product/:productId",
        element: <UpdateProduct />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);

export default router;
