import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useToast } from '@/hooks/use-toast';
import siteData from '../data/siteData.json';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll respond shortly.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const departments = [
    {
      name: "Admissions Office",
      email: "admissions@engineeringcollege.edu",
      phone: "+1 (123) 456-7890",
      timings: "Monday to Friday: 9:00 AM - 5:00 PM"
    },
    {
      name: "Academic Affairs",
      email: "academics@engineeringcollege.edu",
      phone: "+1 (123) 456-7891",
      timings: "Monday to Friday: 9:00 AM - 4:00 PM"
    },
    {
      name: "Placement Cell",
      email: "placements@engineeringcollege.edu",
      phone: "+1 (123) 456-7892",
      timings: "Monday to Friday: 10:00 AM - 4:00 PM"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl content-animation">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Get in touch with us for admissions, academic inquiries, or any other information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto content-animation">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale card-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="mb-2">
                  <a 
                    href={`mailto:${siteData.siteInfo.email}`} 
                    className="text-primary hover:underline"
                  >
                    {siteData.siteInfo.email}
                  </a>
                </p>
                <p className="text-sm text-gray-600">For general inquiries</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale card-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Phone</h3>
                <p className="mb-2">
                  <a 
                    href={`tel:${siteData.siteInfo.phone}`} 
                    className="text-primary hover:underline"
                  >
                    {siteData.siteInfo.phone}
                  </a>
                </p>
                <p className="text-sm text-gray-600">Monday-Friday, 9am-5pm</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale card-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Address</h3>
                <p className="mb-2">{siteData.siteInfo.address}</p>
                <p className="text-sm text-gray-600">Visit our campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto content-animation">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
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
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="btn-primary inline-flex items-center"
                    >
                      Send Message
                      <Send size={16} className="ml-2" />
                    </button>
                  </form>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Our Location</h2>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
                  <div className="aspect-video bg-gray-300">
                    {/* Placeholder for map */}
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <span className="text-primary/40 text-lg font-medium">College Location Map</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700">
                      <strong>Address:</strong> {siteData.siteInfo.address}
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Contact Specific Departments</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-bold mb-2">{dept.name}</h4>
                      <div className="flex items-center mb-1">
                        <Mail size={16} className="text-primary mr-2" />
                        <a href={`mailto:${dept.email}`} className="text-primary hover:underline">{dept.email}</a>
                      </div>
                      <div className="flex items-center mb-1">
                        <Phone size={16} className="text-primary mr-2" />
                        <a href={`tel:${dept.phone}`} className="text-primary hover:underline">{dept.phone}</a>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="text-gray-500 mr-2" />
                        <span className="text-gray-500 text-sm">{dept.timings}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto content-animation">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">
                Find answers to commonly asked questions. If you can't find what you're looking for, please contact us.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">What are the admission requirements?</h3>
                <p className="text-gray-700">
                  Admission requirements include 10+2 or equivalent with Physics, Chemistry, and Mathematics 
                  as compulsory subjects with minimum 60% aggregate marks. Valid entrance exam scores may also be required.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Is there a hostel facility available?</h3>
                <p className="text-gray-700">
                  Yes, we provide well-maintained hostel facilities for both boys and girls with modern amenities, 
                  mess facilities, and 24/7 security.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">What is the placement record of the college?</h3>
                <p className="text-gray-700">
                  Our college has an excellent placement record with over 90% of eligible students getting placed 
                  in reputed companies. We have strong ties with industry leaders who recruit our students.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Are there any scholarships available?</h3>
                <p className="text-gray-700">
                  Yes, we offer various merit-based and need-based scholarships to deserving students. 
                  Additionally, students can also avail government scholarships if eligible.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-700">
                Still have questions? Feel free to contact us directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
