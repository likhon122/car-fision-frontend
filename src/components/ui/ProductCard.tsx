import { Card, message } from "antd";
import { TProduct } from "../../types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feathers/cart/cartSlice";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface ProductCardProps {
  product: TProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProductDetails = () => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!product.stock) {
      message.warning(`This item is currently out of stock.`);
      return;
    }
    dispatch(addToCart({ product, quantity: 1 }));
    message.success("Added to cart successfully!");
  };

  return (
    <Card
      hoverable
      cover={
        <div className="relative overflow-hidden group">
          <img
            src={product.photo}
            alt={product.model || "Product image"}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <button
              className="p-2 rounded-full bg-white/90 hover:bg-white cursor-pointer transition-colors shadow-lg"
              onClick={handleProductDetails}
            >
              <span>See More</span>
            </button>
          </div>
        </div>
      }
      onClick={handleProductDetails}
      className="!rounded-xl !overflow-hidden !border-1 !border-gray-200 hover:!border-blue-100 !shadow-md hover:!shadow-lg transition-all duration-300"
    >
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
          {product.inStock > 0 && (
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
              In Stock: {product.inStock}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">
            {product.brand}
          </h3>
          <p className="text-gray-500 text-sm truncate">{product.model}</p>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 min-h-[40px]">
          {product.description || "Explore this premium quality product"}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xs text-gray-500">Price</span>
            <p className="text-xl font-bold text-gray-900">
              ৳ {product.price.toFixed(2)}
            </p>
          </div>

          {product?.inStock > 0 ? (
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 cursor-pointer bg-[#0047BB] hover:bg-[#003399] !text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              <ShoppingCartOutlined />
              <span>Add to Cart</span>
            </button>
          ) : (
            <button
              disabled
              className="flex items-center gap-2 bg-gray-100 cursor-pointer !text-gray-400 px-4 py-2 rounded-lg cursor-not-allowed"
            >
              <ShoppingCartOutlined />
              <span>Out of Stock</span>
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
