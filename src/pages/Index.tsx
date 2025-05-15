
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import siteData from '../data/siteData.json';
import { ArrowRight, ChevronRight, Book, Calendar, CheckCircle, GraduationCap, Users, Building, Medal } from 'lucide-react';

// Card component for announcements
const AnnouncementCard = ({ announcement }: { announcement: any }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-1">
    <div className="flex items-center mb-4 text-primary">
      <Calendar size={18} className="mr-2" />
      <span className="text-sm font-medium">{announcement.date}</span>
    </div>
    <h3 className="font-bold text-lg mb-2 text-gray-800">{announcement.title}</h3>
    <p className="text-gray-600 mb-4">{announcement.content}</p>
    <Link 
      to={announcement.link} 
      className="flex items-center text-primary font-medium hover:underline group"
    >
      Read More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

// Card component for programs
const ProgramCard = ({ program }: { program: any }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
    <div className="h-48 bg-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/70 to-primary/30 flex items-center justify-center">
        <Book size={48} className="text-white" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-primary">{program}</h3>
      <p className="text-gray-600 mb-4">
        Bachelor of Technology in {program}
      </p>
      <Link 
        to="/courses" 
        className="flex items-center text-primary font-medium hover:underline group"
      >
        Learn More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
);

// Stat card component
const StatCard = ({ icon, number, text, delay }: { icon: any, number: string, text: string, delay: string }) => (
  <div 
    className={`p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in`} 
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center mb-3">
      {icon}
    </div>
    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
      {number}
    </div>
    <div className="text-gray-700">{text}</div>
  </div>
);

const Index = () => {
  const { heroSection, announcements } = siteData;
  const programs = ['Computer Science Engineering', 'Information Technology', 'AI & Machine Learning', 'Electronics & Systems Engineering'];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl content-animation">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {heroSection.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              {heroSection.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to={heroSection.ctaLink}
                className="bg-white text-primary px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/90 transition-all transform hover:scale-105"
              >
                {heroSection.cta}
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link 
                to="/courses"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition-colors"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,229.3C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 content-animation">
            <StatCard 
              icon={<GraduationCap className="h-8 w-8 text-primary" />} 
              number={heroSection.highlights[0].number} 
              text={heroSection.highlights[0].text} 
              delay="0s"
            />
            <StatCard 
              icon={<Users className="h-8 w-8 text-primary" />} 
              number={heroSection.highlights[1].number} 
              text={heroSection.highlights[1].text} 
              delay="0.1s"
            />
            <StatCard 
              icon={<Building className="h-8 w-8 text-primary" />} 
              number={heroSection.highlights[2].number} 
              text={heroSection.highlights[2].text} 
              delay="0.2s"
            />
            <StatCard 
              icon={<Medal className="h-8 w-8 text-primary" />} 
              number={heroSection.highlights[3].number} 
              text={heroSection.highlights[3].text} 
              delay="0.3s"
            />
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
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are a premier engineering institution dedicated to providing quality education 
                and fostering innovation. With state-of-the-art facilities and experienced faculty, 
                we prepare students to meet the challenges of the technological world.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our mission is to shape future engineers who can contribute meaningfully to society
                and lead technological advancements in their respective fields.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center text-white bg-primary px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-all transform hover:scale-105"
              >
                Discover More About Us
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="md:w-1/2 content-animation">
              <div className="rounded-lg overflow-hidden shadow-xl bg-white border border-gray-100">
                <div className="relative aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="College campus" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <p className="text-white font-medium">Experience our modern campus facilities</p>
                    </div>
                  </div>
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
              className="inline-flex items-center bg-white border-2 border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/5 transition-colors"
            >
              View All Programs
              <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 content-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our college offers unique advantages that prepare students for successful careers in engineering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary">Expert Faculty</h3>
              <p className="text-gray-700">
                Learn from industry professionals and academic experts with extensive experience in their fields
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Building size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary">Modern Facilities</h3>
              <p className="text-gray-700">
                Access state-of-the-art labs, smart classrooms, and research facilities designed for optimal learning
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary">Industry Connections</h3>
              <p className="text-gray-700">
                Benefit from our strong industry partnerships for internships and job placement opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 md:py-24">
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
          
          <div className="text-center mt-10">
            <Link 
              to="/newsletter"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View All Announcements <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary py-16 md:py-20 text-white relative">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10 content-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Engineering Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join our community of future engineers and innovators. Apply now for the upcoming academic session.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/apply"
              className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
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
