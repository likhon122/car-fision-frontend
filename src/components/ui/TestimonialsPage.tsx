import { Card } from "antd";

const testimonials = [
  {
    id: 1,
    name: "MST Bristy",
    role: "Car Enthusiast",
    testimonial:
      "I found my dream car at this showroom. The online buying experience was seamless and fast. Highly recommend!",
    image:
      "https://images.unsplash.com/photo-1561643241-9abf82d76a68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "First-Time Buyer",
    testimonial:
      "This showroom made purchasing my first car a breeze. The customer support was top-notch, and the car arrived exactly as described.",
    image:
      "https://images.unsplash.com/photo-1547280552-243a8c441672?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Michael Davis",
    role: "Family Man",
    testimonial:
      "I bought an SUV from this car showroom, and it was the perfect fit for my growing family. The buying process was smooth, and delivery was prompt.",
    image:
      "https://images.unsplash.com/photo-1524538198441-241ff79d153b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Sophia Martinez",
    role: "Business Professional",
    testimonial:
      "As a busy professional, the online shopping experience here was exactly what I needed. I was able to choose a sleek sedan and have it delivered right to my door.",
    image:
      "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "David Miller",
    role: "Car Collector",
    testimonial:
      "I have a collection of luxury cars, and this showroom has some of the finest vehicles. I was impressed with the variety and quality of cars available.",
    image:
      "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Olivia White",
    role: "New Car Owner",
    testimonial:
      "This showroom made my first car purchase effortless. The process was straightforward, and I’m thrilled with my new car!",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    name: "William Brown",
    role: "Tech Enthusiast",
    testimonial:
      "I was impressed by how easy it was to compare cars and features on the website. The virtual showroom is fantastic, and the delivery was timely and professional.",
    image:
      "https://plus.unsplash.com/premium_photo-1661266906739-429a936075cd?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    name: "SK King",
    role: "Eco-Conscious Buyer",
    testimonial:
      "I purchased an electric car from this showroom. The experience was smooth, and I’m happy to have made a sustainable choice for my family and the planet.",
    image:
      "https://images.unsplash.com/photo-1563351672-62b74891a28a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="py-18">
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">What People Say</h1>
          <p className="text-gray-600 mt-2">
            Hear from our happy readers and customers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-full mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="shadow-sm p-6 rounded-lg bg-white text-center  transition-transform hover:scale-105 border border-black/20"
              // bordered={false}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-20 w-20 rounded-full mx-auto mb-4 border-4 border-gray-200"
              />
              <h3 className="text-lg font-bold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="mt-4 text-gray-600 italic">
                "{testimonial.testimonial}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
