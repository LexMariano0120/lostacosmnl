import React from 'react';
import { Users, Award, Clock, Utensils } from 'lucide-react';

const Restaurant = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Restaurant</h1>
            <p className="text-xl md:text-2xl font-light">Where elegance meets exceptional dining</p>
          </div>
        </div>
      </section>

      {/* Restaurant Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Dining Experience Like No Other
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bella Vista offers an intimate and sophisticated dining atmosphere where every detail 
                has been carefully considered. Our elegant interior design combines modern aesthetics 
                with warm, inviting elements that create the perfect backdrop for memorable dining experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're celebrating a special occasion, hosting a business dinner, or enjoying 
                an intimate evening with loved ones, our restaurant provides the perfect setting for 
                life's most important moments.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">80 Seats</h3>
                  <p className="text-sm text-gray-600">Intimate dining space</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Award Winning</h3>
                  <p className="text-sm text-gray-600">Michelin recommended</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-amber-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Open Daily</h4>
                    <p className="text-sm text-gray-600">5:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Spaces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate corners to grand dining halls, every space at Bella Vista is designed for exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Main Dining Room',
                description: 'Our elegant main dining area features floor-to-ceiling windows and contemporary décor',
                image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                title: 'Private Dining',
                description: 'Exclusive private rooms perfect for special occasions and business meetings',
                image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                title: 'Wine Cellar',
                description: 'Our temperature-controlled wine cellar houses over 300 carefully selected bottles',
                image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                title: 'Chef\'s Table',
                description: 'Experience culinary artistry up close at our exclusive chef\'s table',
                image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                title: 'Outdoor Terrace',
                description: 'Al fresco dining with stunning city views and romantic ambiance',
                image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                title: 'Bar & Lounge',
                description: 'Sophisticated cocktail lounge with craft drinks and small plates',
                image: 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              }
            ].map((space, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{space.title}</h3>
                  <p className="text-gray-600">{space.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bella Vista
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Utensils className="h-8 w-8" />,
                title: 'Exceptional Cuisine',
                description: 'Award-winning dishes crafted with the finest ingredients and expert technique'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Impeccable Service',
                description: 'Our professional staff ensures every guest receives personalized attention'
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Premium Experience',
                description: 'From ambiance to presentation, every detail is perfected for excellence'
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: 'Perfect Timing',
                description: 'Seamless service timing ensures your dining experience flows beautifully'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-amber-100 group-hover:bg-amber-200 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <div className="text-amber-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Private Dining */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Private Events & Celebrations
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Make your special occasions unforgettable with our private dining services. 
                From intimate anniversary dinners to corporate events and wedding receptions, 
                we provide customized experiences tailored to your needs.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  Wedding receptions and rehearsal dinners
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  Corporate events and business dinners
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  Birthday celebrations and anniversaries
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  Holiday parties and special occasions
                </li>
              </ul>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Plan Your Event
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Private dining room"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;