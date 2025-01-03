import Image from "next/image";

export default function MenuPage() {
  const menuItems = [
    {
      name: "Lettuce Loaf",
      price: "12.95",
      description: "Lettuce loaf served with special sauce.",
      image: "/menu1.png",
    },
    {
      name: "Glow Cheese",
      price: "12.95",
      description: "Soft cheese served with fresh veggies.",
      image: "/menu5.png",
    },
    {
      name: "Fresh Breakfast",
      description: "Authentic Italian pizza with tomato and basil.",
      price: "14.95",
      image: "/menu2.png",
    },
    {
      name: "Italian Pizza",
      description: "Authentic Italian pizza with tomato and basil.",
      price: "14.95",
      image: "/menu6.png",
    },
    {
      name: "Mild Butter",
      price: "12.5",
      description: "Classic breakfast with bread, eggs, and veggies.",
      image: "/menu3.png",
    },
    {
      name: "Silice Beefa",
      price: "12.5",
      description: "Mushroom pizza with a crispy crust.",
      image: "/menu7.png",
    },
    {
      name: "Fresh Bread",
      price: "12.95",
      description: "Homemade bread served with honey.",
      image: "/menu4.png",
    },
    {
      name: "Mushroom Pizza",
      price: "12.95",
      description: "Mushroom pizza with a crispy crust.",
      image: "/menu8.png",
    },
  ];

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-sans relative">
      {/* Background Leaves Image */}
      <div className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-8 z-10 hidden lg:block">
        <Image
          src="/leaves.png" // Add this image to the public folder
          alt="Decorative Leaves"
          width={514}
          height={406}
          className="ml-[120px] mt-[450px]"
        />
      </div>

      {/* Plate Image */}
      <div className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-8 z-10 hidden lg:block">
        <Image
          src="/plate.png" // Add this image to the public folder
          alt="Decorative Plate with Leaves"
          width={366}
          height={362}
          className="ml-[180px] mt-[450px]"
        />
      </div>

      {/* Header */}
      <header className="py-8 text-center relative z-20">
        <h2 className="text-[#FFB703] text-sm uppercase font-semibold tracking-widest">
          Classic Spirit
        </h2>
        <h1 className="text-4xl font-bold text-white mt-2">From Our Menu</h1>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center space-x-28 text-white mb-8 relative z-20">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drinks", "Snacks", "Soups"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className="text-sm uppercase hover:text-[#FFB703] transition-colors"
            >
              {item}
            </a>
          )
        )}
      </nav>

      {/* Menu Content */}
      <div className="ml-[636px] relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center space-x-4 bg-[#1A1A1A] p-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {/* Menu Item Image */}
              <div className="mb-4 md:mb-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={79}
                  className="rounded-lg object-cover"
                />
              </div>
              {/* Menu Item Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-semibold text-[#FFB703]">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                <p className="text-xl font-bold text-[#FFB703]">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
