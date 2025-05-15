
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import siteData from '../data/siteData.json';
import { ArrowRight, Calendar, ChevronRight, Book } from 'lucide-react';

// Card component for announcements
const AnnouncementCard = ({ announcement }: { announcement: any }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover-scale card-shadow">
    <div className="flex items-center mb-4 text-primary/80">
      <Calendar size={18} className="mr-2" />
      <span className="text-sm">{announcement.date}</span>
    </div>
    <h3 className="font-bold text-lg mb-2">{announcement.title}</h3>
    <p className="text-gray-600 mb-4">{announcement.content}</p>
    <Link 
      to={announcement.link} 
      className="flex items-center text-primary font-medium hover:underline"
    >
      Read More <ChevronRight size={16} className="ml-1" />
    </Link>
  </div>
);

// Card component for programs
const ProgramCard = ({ program }: { program: any }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover-scale card-shadow">
    <div className="h-40 bg-gray-300">
      {/* Placeholder for program image */}
      <div className="w-full h-full flex items-center justify-center bg-primary/10">
        <Book size={48} className="text-primary/40" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-bold text-lg mb-2">{program}</h3>
      <p className="text-gray-600 mb-4">
        Bachelor of Technology in {program}
      </p>
      <Link 
        to="/courses" 
        className="flex items-center text-primary font-medium hover:underline"
      >
        Learn More <ChevronRight size={16} className="ml-1" />
      </Link>
    </div>
  </div>
);

const Index = () => {
  const { heroSection, announcements } = siteData;
  const programs = ['Computer Science Engineering', 'Information Technology', 'AI & Machine Learning', 'Electronics & Systems Engineering'];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/95 to-primary text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl content-animation">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {heroSection.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {heroSection.subtitle}
            </p>
            <Link 
              to={heroSection.ctaLink}
              className="bg-white text-primary px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/90 transition-colors"
            >
              {heroSection.cta}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center content-animation">
            {heroSection.highlights.map((highlight, index) => (
              <div key={index} className="p-6 bg-accent rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {highlight.number}
                </div>
                <div className="text-gray-700">{highlight.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 content-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Welcome to {siteData.siteInfo.name}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We are a premier engineering institution dedicated to providing quality education 
                and fostering innovation. With state-of-the-art facilities and experienced faculty, 
                we prepare students to meet the challenges of the technological world.
              </p>
              <Link 
                to="/about"
                className="btn-primary inline-flex items-center"
              >
                Discover More About Us
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="md:w-1/2 content-animation">
              <div className="rounded-lg overflow-hidden shadow-xl bg-gray-300 aspect-video">
                {/* Placeholder for about image */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-primary/40 text-lg font-medium">Campus Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 content-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Programs
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer a range of B.Tech programs designed to provide comprehensive 
              technical education and prepare students for successful careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 content-animation">
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/courses"
              className="btn-secondary inline-flex items-center"
            >
              View All Programs
              <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 content-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Latest Announcements
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Stay updated with the latest news, events, and announcements from our college.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 content-animation">
            {announcements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 text-center content-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Engineering Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join our community of future engineers and innovators. Apply now for the upcoming academic session.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/apply"
              className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors"
            >
              Apply Now
            </Link>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
