import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Seared Scallops',
        description: 'Pan-seared U-10 scallops with cauliflower purée and pancetta',
        price: '$18',
        image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Tuna Tartare',
        description: 'Fresh yellowfin tuna with avocado, citrus, and sesame crisps',
        price: '$16',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Burrata Caprese',
        description: 'Creamy burrata with heirloom tomatoes, basil oil, and aged balsamic',
        price: '$14',
        image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Duck Confit Croquettes',
        description: 'Crispy duck confit with cherry gastrique and microgreens',
        price: '$15',
        image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    mains: [
      {
        name: 'Wagyu Beef Tenderloin',
        description: 'Premium 8oz cut with truffle reduction, roasted fingerling potatoes, and seasonal vegetables',
        price: '$45',
        image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Pan-Seared Salmon',
        description: 'Fresh Atlantic salmon with lemon herb butter, quinoa pilaf, and grilled asparagus',
        price: '$28',
        image: 'https://images.pexels.com/photos/1516909/pexels-photo-1516909.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Lobster Risotto',
        description: 'Creamy arborio rice with fresh Maine lobster, asparagus, and aged parmesan',
        price: '$36',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Rack of Lamb',
        description: 'Herb-crusted New Zealand lamb with rosemary jus and garlic mashed potatoes',
        price: '$38',
        image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Wild Mushroom Ravioli',
        description: 'House-made pasta with wild mushrooms, truffle cream sauce, and aged pecorino',
        price: '$24',
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Duck Breast',
        description: 'Roasted Muscovy duck breast with cherry glaze, wild rice, and baby vegetables',
        price: '$32',
        image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    desserts: [
      {
        name: 'Chocolate Soufflé',
        description: 'Warm dark chocolate soufflé with vanilla bean ice cream',
        price: '$12',
        image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar and fresh berries',
        price: '$10',
        image: 'https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Tiramisu',
        description: 'Traditional Italian dessert with espresso-soaked ladyfingers and mascarpone',
        price: '$11',
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Lemon Tart',
        description: 'Tart lemon curd in buttery pastry shell with candied lemon zest',
        price: '$9',
        image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    beverages: [
      {
        name: 'Wine Selection',
        description: 'Curated collection of premium wines from around the world',
        price: '$8-$15',
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Craft Cocktails',
        description: 'Handcrafted cocktails using premium spirits and fresh ingredients',
        price: '$12-$16',
        image: 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Artisan Coffee',
        description: 'Single-origin beans roasted to perfection, served with housemade pastries',
        price: '$4-$6',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Fresh Juices',
        description: 'Freshly squeezed seasonal fruit and vegetable juices',
        price: '$5-$8',
        image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl md:text-2xl font-light">Culinary excellence in every dish</p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`mx-2 mb-4 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Note */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Chef's Special Menu</h3>
          <p className="text-gray-600 mb-4">
            Our chef creates unique seasonal dishes featuring the finest local ingredients. 
            Ask your server about today's special offerings.
          </p>
          <p className="text-sm text-gray-500">
            Prices subject to change based on market availability. Please inform us of any food allergies or dietary restrictions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;