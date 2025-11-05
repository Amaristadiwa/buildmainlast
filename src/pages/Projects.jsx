import React, { useState } from 'react';
import { Star, Calendar, MapPin, Eye } from 'lucide-react';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'New Build'];

  const projects = [
    {
      id: 1,
      title: 'Modern Cottage Build - Borrowdale, Harare',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        'A stunning modern cottage featuring contemporary design elements with traditional comfort. This project showcases exceptional craftsmanship in residential construction.',
      details: {
        location: 'Borrowdale, Harare',
        duration: '6 months',
        size: '2,500 sq ft',
        bedrooms: '4',
        bathrooms: '3',
      },
      contractor: 'Premium Builders Ltd',
      rating: 5.0,
      featured: true,
    },
    {
      id: 2,
      title: 'Modern Cottage Build - Borrowdale, Harare',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Contemporary family home with open-plan living spaces and premium finishes throughout.',
      details: {
        location: 'Borrowdale, Harare',
        duration: '5 months',
        size: '2,200 sq ft',
        bedrooms: '3',
        bathrooms: '2',
      },
      contractor: 'Elite Construction',
      rating: 4.9,
      featured: true,
    },
    {
      id: 3,
      title: 'Modern Cottage Build - Borrowdale, Harare',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Luxury residential project featuring modern architecture and sustainable building practices.',
      details: {
        location: 'Borrowdale, Harare',
        duration: '7 months',
        size: '3,000 sq ft',
        bedrooms: '5',
        bathrooms: '4',
      },
      contractor: 'Master Builders Co',
      rating: 5.0,
      featured: true,
    },
    {
      id: 4,
      title: 'Modern Cottage Build - Borrowdale, Harare',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1396128/pexels-photo-1396128.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Elegant cottage design with modern amenities and traditional charm.',
      details: {
        location: 'Borrowdale, Harare',
        duration: '4 months',
        size: '1,800 sq ft',
        bedrooms: '3',
        bathrooms: '2',
      },
      contractor: 'Artisan Builders',
      rating: 4.8,
      featured: false,
    },
    {
      id: 5,
      title: 'Modern Cottage Build - Borrowdale, Harare',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1396130/pexels-photo-1396130.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Commercial office space with modern design and energy-efficient systems.',
      details: {
        location: 'Borrowdale, Harare',
        duration: '8 months',
        size: '5,000 sq ft',
        floors: '2',
        parking: '20 spaces',
      },
      contractor: 'Commercial Builders Inc',
      rating: 4.9,
      featured: false,
    },
    {
      id: 6,
      title: 'Modern Cottage Build - Borrowdale, Harare',
      category: 'Renovation',
      image: 'https://images.pexels.com/photos/1396134/pexels-photo-1396134.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete home renovation transforming a classic property into a modern masterpiece.',
      details: {
        location: 'Borrowdale, Harare',
        duration: '3 months',
        size: '2,000 sq ft',
        bedrooms: '4',
        bathrooms: '3',
      },
      contractor: 'Renovation Experts',
      rating: 4.7,
      featured: false,
    },
    {
      id: 7,
      title: 'Modern Cottage Build - Borrowdale, Harare',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1396136/pexels-photo-1396136.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Luxury family home with premium materials and exceptional attention to detail.',
      details: {
        location: 'Borrowdale, Harare',
        duration: '6 months',
        size: '2,800 sq ft',
        bedrooms: '4',
        bathrooms: '3',
      },
      contractor: 'Luxury Homes Ltd',
      rating: 5.0,
      featured: false,
    },
    {
      id: 8,
      title: 'Modern Cottage Build - Borrowdale, Harare',
      category: 'New Build',
      image: 'https://images.pexels.com/photos/1396138/pexels-photo-1396138.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Brand new construction featuring cutting-edge design and smart home technology.',
      details: {
        location: 'Borrowdale, Harare',
        duration: '9 months',
        size: '3,500 sq ft',
        bedrooms: '5',
        bathrooms: '4',
      },
      contractor: 'Future Homes',
      rating: 4.9,
      featured: false,
    },
    {
      id: 9,
      title: 'Modern Cottage Build - Borrowdale, Harare',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1396140/pexels-photo-1396140.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Contemporary cottage with sustainable features and modern living spaces.',
      details: {
        location: 'Borrowdale, Harare',
        duration: '5 months',
        size: '2,300 sq ft',
        bedrooms: '3',
        bathrooms: '2',
      },
      contractor: 'Green Build Solutions',
      rating: 4.8,
      featured: false,
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Latest <span className="text-blue-500">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of completed construction projects showcasing quality craftsmanship and
              innovative design solutions across residential and commercial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Eye className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.details.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      Duration: {project.details.duration}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{project.contractor}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{project.rating}</span>
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
              See More
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Construction Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            See Our Gallery <span className="text-blue-400">With Our Project</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the quality and craftsmanship that goes into every project we complete
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
            View Gallery
          </button>
        </div>
      </section>

      {/* Load More Projects */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center space-x-2 mx-auto">
            <span>Load More</span>
            <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
