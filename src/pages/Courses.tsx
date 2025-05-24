import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import coursesData from '../data/coursesData.json';
import { ArrowRight, Book, CheckCircle, Clock } from 'lucide-react';

const CourseCard = ({ department }: { department: any }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale card-shadow">
    <div className="h-48 bg-gray-300">
      {/* Placeholder for department image */}
      <div className="w-full h-full flex items-center justify-center bg-primary/10">
         <img 
        src={department.image}
        alt="College Building" 
        className="w-full h-full object-cover" 
      />
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-bold text-xl mb-3">{department.name}</h3>
      <p className="text-gray-600 mb-6">{department.shortDescription}</p>
      
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Clock size={16} className="mr-2" />
        <span>Duration: {department.duration}</span>
      </div>
      
      <Link 
        to={`#${department.id}`}
        className="btn-primary inline-flex items-center"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById(department.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        View Details <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  </div>
);

const CourseDetails = ({ department }: { department: any }) => (
  <div id={department.id} className="scroll-mt-24 py-16 border-t border-gray-200">
    <div className="flex flex-col md:flex-row gap-10">
      <div className="md:w-2/5">
        <div className="bg-gray-300 rounded-lg overflow-hidden mb-6">
          {/* Placeholder for department detail image */}
          <div className="w-full aspect-video flex items-center justify-center bg-primary/10">
             <img 
        src={department.image}
        alt="College Building" 
        className="w-full h-full object-cover" 
      />
          </div>
        </div>
        
        <div className="bg-accent rounded-lg p-6">
          <h4 className="font-semibold text-lg mb-4">Program Highlights</h4>
          <ul className="space-y-3">
            {department.highlights.map((highlight: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="md:w-3/5">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{department.name}</h3>
        <p className="text-lg mb-6">{department.fullDescription}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Duration</h4>
            <p>{department.duration}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Eligibility</h4>
            <p>{department.eligibility}</p>
          </div>
        </div>
        
        <h4 className="font-semibold text-lg mb-3">Career Opportunities</h4>
        <p className="mb-6">{department.career}</p>
        
        <Link 
          to="/apply" 
          className="btn-primary inline-flex items-center"
        >
          Apply for this Program <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  </div>
);

const Courses = () => {
  const { pageTitle, pageDescription, departments } = coursesData;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl content-animation">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{pageTitle}</h1>
            <p className="text-xl md:text-2xl text-white/90">{pageDescription}</p>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 content-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our B.Tech Programs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our comprehensive engineering programs designed to prepare you for the challenges of tomorrow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 content-animation">
            {departments.map((department) => (
              <CourseCard key={department.id} department={department} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Course Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 content-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Details</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Learn more about the curriculum, opportunities, and outcomes of each program.
            </p>
          </div>
          
          <div className="space-y-16 content-animation">
            {departments.map((department) => (
              <CourseDetails key={department.id} department={department} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 text-center content-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Your Path to Success
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Ready to start your engineering journey? Apply now for admission to our B.Tech programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/apply"
              className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors"
            >
              Apply Now
            </Link>
            <Link 
              to="/admission"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Admission Process
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;