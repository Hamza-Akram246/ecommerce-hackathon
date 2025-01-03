
// export default Hero;
import React from "react";

const FoodMenu = () => {
  const menuItems = [
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Our Food Menu</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Varius sed pharetra dictum neque massa congue
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <nav className="space-x-4 text-lg">
            <a href="#" className="text-gray-500 hover:text-orange-500  pb-1">
              Breakfast
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              Lunch
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              Dinner
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              Dessert
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              Drink
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500">
              Snack
            </a>
          </nav>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start bg-white p-6 "
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-orange-500 mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-400 text-sm mt-1">{item.calories}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-orange-500">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
            View menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
