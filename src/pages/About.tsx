import React from 'react';
import Layout from '../components/Layout';
import aboutData from '../data/aboutData.json';
import { CheckCircle, Clock } from 'lucide-react';

const About = () => {
  const { pageTitle, pageDescription, mainContent, timeline, facilities } = aboutData;

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

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 content-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                {mainContent.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {mainContent.description}
              </p>

              <div className="mt-10 space-y-6">
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p>{mainContent.mission}</p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p>{mainContent.vision}</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 content-animation">
              <div className="rounded-lg overflow-hidden shadow-xl bg-gray-300 aspect-video">
                {/* Placeholder for about image */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <img
                    src="https://ssec.ssism.org/images/ssism-photo-2.jpg"
                    alt="College Building"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 content-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Journey</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore the milestones that have shaped our institution over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto content-animation">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row md:flex-row-reverse'
                  }`}
              >
                <div className="w-16 flex-shrink-0 flex justify-center">
                  <div className="w-1 bg-primary relative flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary absolute top-0 flex items-center justify-center">
                      <Clock size={14} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className={`flex-grow ${index % 2 === 0 ? 'pl-6' : 'pr-6 md:pl-6 md:pr-0'
                  }`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover-scale card-shadow">
                    <div className="text-primary font-bold text-xl mb-2">{item.year}</div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 content-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Facilities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              State-of-the-art infrastructure and facilities to support learning and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 content-animation">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover-scale card-shadow"
              >
                <div className="md:w-2/5 bg-gray-300">
                  {/* Placeholder for facility image */}
                  <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-primary/10">
                    <span className="text-primary/40 text-lg font-medium">{facility.title} Image</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                  <p className="text-gray-700">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
