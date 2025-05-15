
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';

const Apply = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    qualification: '',
    percentage: '',
    address: '',
    message: ''
  });

  const programs = ['B.Tech CSE', 'B.Tech IT', 'B.Tech AIML', 'B.Tech ESE'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Application Submitted",
      description: "Thank you for applying! We will contact you shortly.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      qualification: '',
      percentage: '',
      address: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl content-animation">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply for Admission</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Take the first step towards a successful engineering career. Fill out the application form below.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto content-animation">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold mb-6 text-primary">How to Apply</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                        <div>
                          <h3 className="font-bold mb-2">Fill the Form</h3>
                          <p className="text-gray-600 text-sm">Complete all required fields in the application form.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                        <div>
                          <h3 className="font-bold mb-2">Submit Application</h3>
                          <p className="text-gray-600 text-sm">Submit your application and wait for confirmation.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                        <div>
                          <h3 className="font-bold mb-2">Document Verification</h3>
                          <p className="text-gray-600 text-sm">Our team will contact you for document verification.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</div>
                        <div>
                          <h3 className="font-bold mb-2">Admission Confirmation</h3>
                          <p className="text-gray-600 text-sm">Receive confirmation and complete the admission process.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Application Form</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                          Program of Interest *
                        </label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          <option value="">Select Program</option>
                          {programs.map((program) => (
                            <option key={program} value={program}>
                              {program}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
                          Highest Qualification *
                        </label>
                        <input
                          type="text"
                          id="qualification"
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="percentage" className="block text-sm font-medium text-gray-700 mb-1">
                          Percentage in Qualifying Exam *
                        </label>
                        <input
                          type="text"
                          id="percentage"
                          name="percentage"
                          value={formData.percentage}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        type="submit"
                        className="btn-primary inline-flex items-center"
                      >
                        Submit Application
                        <CheckCircle size={16} className="ml-2" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
