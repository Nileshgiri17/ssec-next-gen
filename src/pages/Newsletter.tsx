import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Mail, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const interestOptions = [
    'Academic News',
    'Admission Updates',
    'Events & Workshops',
    'Research Highlights',
    'Campus Life',
    'Alumni Stories',
    'Industry Partnerships'
  ];
 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // API call simulation
      console.log('Newsletter subscription:', { email, interests });
      
      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // If API call is successful
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter!",
        variant: "default",
      });
      
      // Redirect to success page with data
      navigate('/success', { 
        state: { 
          source: 'newsletter',
          data: { email, interests }
        } 
      });
      
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      
      toast({
        title: "Subscription Failed",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive",
      });
      
      setLoading(false);
    }
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInterests(prev => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const recentNewsletters = [
    {
      title: "Meet This Techie From MP Who Left His Job & Sold His House",
      description: "Meet Pranjal Dubey, a 40-year-old techie who gave up everything to educate the youth of his village.",
      link: "https://thelogicalindian.com/my-social-responsibility/pranjal-dubey-techie-left-job-educate-youth-village-madhya-pradesh/",
      image: "https://ssec.ssism.org/images/news/blog1.jpg"
    },
    {
      title: "Can Change Indian Higher Education?",
      description: "How do you achieve holistic higher education? Sant Singaji Institute of Science and Management in rural Madhya Pradesh shows the way.",
      link: "https://www.livemint.com/Opinion/hgmMiYaF2eiEY011XNuTFI/Idealistic-innovative-entrepreneurship-can-change-Indian-hi.html",
      image: "https://ssec.ssism.org/images/news/blog2.jpg"
    },
    {
      title: "SSISM - Social Entrepreneurship or Chaos?",
      description: "The primary teaching objective of the case is to provide students an understanding of the following.",
      link: "https://hbsp.harvard.edu/product/IMB479-PDF-ENG",
      image: "https://ssec.ssism.org/images/news/blog3.jpg"
    },
    {
      title: "An IT Professional Who Sold His House to Start a College for Rural Youth",
      description: "Here is a man who gave up everything he had to settle in a small village and improve the lives of the rural youth in India.",
      link: "https://thebetterindia.com/16347/man-sold-house-start-college-rural-youth/",
      image: "https://ssec.ssism.org/images/news/blog4.jpg"
    },
    {
      title: "Techie Sells His House for Educating Rural Youth",
      description: "INDORE: Meet Pranjal Dubey, a 40-year-old techie who left his job at SAP SE and sold his house for teaching the youth of his ancestral village.",
      link: "https://timesofindia.indiatimes.com/city/indore/Techie-sells-his-house-for-educating-rural-youth/articleshow/53453183.cms?TOI_browsernotification=true",
      image: "https://ssec.ssism.org/images/news/blog5.jpg"
    },
    {
      title: "Innovation in Education – The Journey of SSISM",
      description: "Innovation in Education – The journey of SSISM in changing mindsets, transforming lives, and uplifting society.",
      link: "#",
      image: "https://ssec.ssism.org/images/news/blog7.jpg"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl content-animation">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Newsletter Subscription</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Stay updated with the latest news, events, and announcements from our college.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto content-animation">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-primary p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">Why Subscribe?</h2>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                      <span>Receive timely updates about campus events and activities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                      <span>Stay informed about admission procedures and important dates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                      <span>Learn about new academic programs and research opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                      <span>Get insights from industry experts and alumni success stories</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                      <span>Read about student achievements and faculty accomplishments</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-white/10 rounded-lg">
                    <p className="text-sm">
                      Our newsletter is published monthly and delivered directly to your inbox.
                      You can unsubscribe at any time.
                    </p>
                  </div>
                </div>

                <div className="md:w-1/2 p-8">
                  {!loading ? (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-primary">Subscribe Now</h2>
                      
                      <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail size={18} className="text-gray-400" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <p className="block text-sm font-medium text-gray-700 mb-2">
                            Areas of Interest (Optional)
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {interestOptions.map(option => (
                              <div key={option} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={option}
                                  value={option}
                                  checked={interests.includes(option)}
                                  onChange={handleInterestChange}
                                  className="h-4 w-4 text-primary focus:ring-primary/50 rounded"
                                />
                                <label htmlFor={option} className="ml-2 text-sm text-gray-700">
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <button 
                          type="submit"
                          className="btn-primary inline-flex items-center"
                          disabled={loading}
                        >
                          {loading ? 'Processing...' : (
                            <>
                              Subscribe
                              <ArrowRight size={16} className="ml-2" />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                        <CheckCircle size={32} className="text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4 text-primary">Thank You!</h2>
                      <p className="text-gray-700 mb-6">
                        Your subscription has been confirmed. You'll start receiving our newsletter soon!
                      </p>
                      <button 
                        onClick={() => {
                          setLoading(false);
                          setEmail('');
                          setInterests([]);
                        }}
                        className="btn-secondary"
                      >
                        Subscribe Another Email
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Newsletters */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 content-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Recent Newsletters</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Browse through our recent newsletter editions to get a taste of what you'll receive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto content-animation">
            {recentNewsletters.map((newsletter, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover-scale card-shadow">
                <div className="h-40 bg-gray-300">
                  {/* Placeholder for newsletter image */}
                  <div className="w-full h-full flex items-center justify-center bg-primary/10">
                    <img 
                      src={newsletter.image}
                      alt="College Building" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{newsletter.title}</h3>
                  <p className="text-gray-600 mb-4">{newsletter.description}</p>
                  {/* <button onClick={newsletter.link} className="text-primary font-medium hover:underline inline-flex items-center">
                    Read Full Newsletter <ArrowRight size={16} className="ml-1" />
                  </button> */}
                     <Link 
                            to={newsletter.link} 
                            target='_blank'
                            className="text-primary font-medium hover:underline inline-flex items-center"
                          >
                             Read Full Newsletter <ArrowRight size={16} className="ml-1" />
                          </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;