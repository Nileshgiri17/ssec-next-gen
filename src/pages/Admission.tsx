
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import admissionData from '../data/admissionData.json';
import { ArrowRight, CheckCircle, Calendar, FileText } from 'lucide-react';

const Admission = () => {
  const { 
    pageTitle, 
    pageDescription, 
    mainContent, 
    eligibilityRequirements, 
    admissionProcess, 
    importantDates,
    documents,
    feeStructure,
    scholarships
  } = admissionData;

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
                <h3 className="text-2xl font-bold mb-6">Eligibility Requirements</h3>
                
                <div className="space-y-6">
                  {eligibilityRequirements.map((req, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg mb-2">{req.title}</h4>
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
                <h3 className="text-2xl font-bold mb-6">Important Dates</h3>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
          
          <div className="max-w-4xl mx-auto content-animation">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary transform -translate-x-1/2"></div>
              
              {/* Process steps */}
              {admissionProcess.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Number */}
                  <div className="w-16 h-16 flex-shrink-0 bg-primary text-white rounded-full flex items-center justify-center z-10 font-bold text-xl">
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-grow ${
                    index % 2 === 0 
                      ? 'ml-6 md:ml-0 md:mr-8 md:text-right' 
                      : 'ml-6 md:ml-8'
                  }`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover-scale card-shadow">
                      <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-16"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto content-animation">
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Required Documents</h2>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <ul className="space-y-3">
                    {documents.map((doc, index) => (
                      <li key={index} className="flex items-start">
                        <FileText size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Scholarships</h2>
                
                <div className="space-y-6">
                  {scholarships.map((scholarship, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-scale card-shadow">
                      <h4 className="font-bold text-lg mb-2">{scholarship.name}</h4>
                      <div className="mb-2">
                        <span className="font-medium">Eligibility:</span> {scholarship.eligibility}
                      </div>
                      <div>
                        <span className="font-medium">Benefit:</span> {scholarship.benefit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 content-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Fee Structure</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Find detailed information about tuition and other fees for our B.Tech programs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto content-animation overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 text-left">Program</th>
                  <th className="py-3 px-4 text-left">Tuition Fee</th>
                  <th className="py-3 px-4 text-left">Development Fee</th>
                  <th className="py-3 px-4 text-left">Exam Fee</th>
                  <th className="py-3 px-4 text-left">Total Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-t border-gray-200 font-medium">{fee.program}</td>
                    <td className="py-3 px-4 border-t border-gray-200">{fee.tuitionFee}</td>
                    <td className="py-3 px-4 border-t border-gray-200">{fee.developmentFee}</td>
                    <td className="py-3 px-4 border-t border-gray-200">{fee.examFee}</td>
                    <td className="py-3 px-4 border-t border-gray-200 font-bold">{fee.totalFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-6">
              * Additional hostel and mess fees applicable for residential students.
            </p>
            <Link 
              to="/apply" 
              className="btn-primary inline-flex items-center"
            >
              Apply Now <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;
