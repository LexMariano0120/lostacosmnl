import React from 'react';
import { Award, Heart, Leaf, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl font-light">Our passion for culinary excellence</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, Bella Vista began as a dream to create a dining destination where 
                culinary artistry meets warm hospitality. Our journey started with a simple vision: 
                to craft exceptional dining experiences that celebrate both local ingredients and 
                international culinary traditions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a small neighborhood restaurant has grown into a celebrated culinary 
                destination, earning recognition from food critics and loyal patrons alike. Yet at 
                our core, we remain committed to the same principles that guided us from day one: 
                quality, creativity, and genuine hospitality.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, Bella Vista continues to evolve while staying true to our founding mission of 
                creating memorable dining experiences that bring people together around exceptional food.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">10</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Chef */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Executive Chef
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Executive Chef Marco Rodriguez"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Chef Marco Rodriguez
              </h3>
              <p className="text-xl text-amber-600 mb-6">Executive Chef & Culinary Director</p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 15 years of culinary experience spanning Michelin-starred restaurants 
                across Europe and America, Chef Marco brings a unique perspective to contemporary 
                American cuisine. His approach combines classical French techniques with modern 
                innovation and a deep respect for seasonal, locally-sourced ingredients.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Before joining Bella Vista, Chef Marco honed his skills at renowned establishments 
                including Le Bernardin in New York and L'Ambroisie in Paris. His dedication to 
                culinary excellence has earned him numerous accolades, including a James Beard 
                Award nomination.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                "Cooking is about more than technique—it's about creating memories and bringing 
                joy to people's lives. Every dish we serve tells a story of passion, craftsmanship, 
                and our commitment to excellence."
              </p>
              <div className="flex space-x-8">
                <div>
                  <div className="text-2xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">3</div>
                  <div className="text-sm text-gray-600">Michelin Stars</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">12+</div>
                  <div className="text-sm text-gray-600">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Bella Vista
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Excellence',
                description: 'We pursue perfection in every dish, every service interaction, and every detail of the dining experience.'
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: 'Hospitality',
                description: 'Genuine warmth and attentive service create the foundation of memorable dining experiences.'
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: 'Sustainability',
                description: 'We partner with local farmers and suppliers to support our community and minimize our environmental impact.'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Community',
                description: 'We believe in building lasting relationships with our guests, staff, and the local community we serve.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-amber-100 group-hover:bg-amber-200 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <div className="text-amber-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals who make Bella Vista exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'General Manager',
                description: 'Sarah oversees all operations with 12 years of hospitality experience.',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
              },
              {
                name: 'James Wilson',
                role: 'Sous Chef',
                description: 'James brings creativity and precision to our culinary team daily.',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
              },
              {
                name: 'Maria Garcia',
                role: 'Sommelier',
                description: 'Maria curates our wine program and provides expert pairing guidance.',
                image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're honored to be recognized by the culinary community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: '2024',
                award: 'Michelin Guide Recommended',
                description: 'Featured in the prestigious Michelin Guide for exceptional cuisine and service.'
              },
              {
                year: '2023',
                award: 'Wine Spectator Award',
                description: 'Recognized for our outstanding wine program and expert curation.'
              },
              {
                year: '2022',
                award: 'James Beard Nomination',
                description: 'Chef Marco Rodriguez nominated for Outstanding Chef award.'
              },
              {
                year: '2022',
                award: 'OpenTable Diners\' Choice',
                description: 'Voted as one of the top restaurants by OpenTable diners.'
              },
              {
                year: '2021',
                award: 'Food & Wine Best New Chef',
                description: 'Chef Marco featured as one of Food & Wine\'s Best New Chefs.'
              },
              {
                year: '2020',
                award: 'AAA Four Diamond',
                description: 'Awarded AAA Four Diamond rating for exceptional dining experience.'
              }
            ].map((recognition, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-lg">
                <div className="text-2xl font-bold text-amber-600 mb-2">{recognition.year}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{recognition.award}</h3>
                <p className="text-gray-600">{recognition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;