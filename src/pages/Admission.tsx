import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import admissionData from '../data/admissionData.json';
import { ArrowRight, CheckCircle, Calendar, FileText, GraduationCap, Award } from 'lucide-react';

const Admission = () => {
  const { 
    pageTitle, 
    pageDescription, 
    mainContent, 
    eligibilityRequirements, 
    admissionProcess, 
    importantDates,
    documents,
    scholarships
  } = admissionData;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl content-animation">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{pageTitle}</h1>
            <p className="text-xl md:text-2xl text-white/90">{pageDescription}</p>
            <div className="mt-8">
              <Link 
                to="/apply" 
                className="bg-white text-primary px-6 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/90 transition-colors"
              >
                Apply Now <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto content-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
              {mainContent.title}
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              {mainContent.description}
            </p>
            
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                  <GraduationCap className="mr-2" size={24} />
                  Eligibility Requirements
                </h3>
                
                <div className="space-y-6">
                  {eligibilityRequirements.map((req, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-lg mb-2 text-primary">{req.title}</h4>
                      <p className="text-gray-700">{req.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Link 
                    to="/apply" 
                    className="btn-primary inline-flex items-center"
                  >
                    Apply Now <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 mt-10 md:mt-0">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                  <Calendar className="mr-2" size={24} />
                  Important Dates
                </h3>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="py-3 px-4 text-left">Event</th>
                        <th className="py-3 px-4 text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {importantDates.map((date, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-3 px-4 border-t border-gray-200">{date.event}</td>
                          <td className="py-3 px-4 border-t border-gray-200">{date.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 content-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Admission Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Follow these steps to complete your admission to the Engineering College.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto content-animation">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionProcess.map((step) => (
                <div 
                  key={step.step} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-bold">
                    Step {step.step}
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold text-lg mb-3 text-primary">{step.title}</h4>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/apply" 
                className="bg-primary text-white px-8 py-4 rounded-md font-semibold inline-flex items-center hover:bg-primary/90 transition-all transform hover:scale-105"
              >
                Start Your Application <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents & Scholarships */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto content-animation">
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center">
                  <FileText className="mr-2" size={24} />
                  Required Documents
                </h2>
                
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <ul className="space-y-4">
                    {documents.map((doc, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={18} className="text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> All documents must be original with two sets of photocopies. Documents in languages other than English or Hindi must be accompanied by certified translations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center">
                  <Award className="mr-2" size={24} />
                  Scholarships
                </h2>
                
                <div className="space-y-6">
                  {scholarships.map((scholarship, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                      <h4 className="font-bold text-lg mb-3 text-primary">{scholarship.name}</h4>
                      <div className="mb-2 flex">
                        <span className="font-medium w-24">Eligibility:</span> 
                        <span className="text-gray-700">{scholarship.eligibility}</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Benefit:</span> 
                        <span className="text-gray-700">{scholarship.benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Engineering College?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards your engineering career today. Our admissions team is ready to assist you throughout the process.
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
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;