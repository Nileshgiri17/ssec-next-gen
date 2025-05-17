
import React from 'react';
import Layout from '../components/Layout';

const Placement = () => {
  // Company logos organized in rows like in the image
  const companies = [
    { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
    { name: 'HSBC', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg' },
    { name: 'WIPRO', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'INFOSYS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/TCS_Logo.svg' },
    { name: 'THOUGHTWORKS', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Thoughtworks_logo_new.svg' },
    { name: 'COGNIZANT', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Cognizant_logo.svg' },
    { name: 'PEOPLEDESIGN', logo: '/placeholder.svg' },
    { name: 'ZOOL', logo: '/placeholder.svg' },
    { name: 'SUREWAVES', logo: '/placeholder.svg' },
    { name: 'INCTURE', logo: '/placeholder.svg' },
    { name: 'VINFOTETCH', logo: '/placeholder.svg' },
    { name: 'MPHASIS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Mphasis_Logo.png' },
    { name: 'SINGAJI SOTWARES', logo: '/placeholder.svg' },
    { name: 'CLOUDKITE', logo: '/placeholder.svg' },
    { name: 'GROMOR', logo: '/placeholder.svg' },
    { name: 'EDCAST', logo: '/placeholder.svg' },
    { name: 'MORENA DIGITAL', logo: '/placeholder.svg' },
    { name: 'LOGICIEL', logo: '/placeholder.svg' },
    { name: 'WISDM', logo: '/placeholder.svg' },
    { name: 'VISHM', logo: '/placeholder.svg' },
    { name: 'SAMBACODIN', logo: '/placeholder.svg' },
    { name: 'RUN FOR SEVA', logo: '/placeholder.svg' },
    { name: 'YASHIDHM', logo: '/placeholder.svg' },
    { name: 'SYNAPSEIN', logo: '/placeholder.svg' },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">PLACEMENTS</h1>
            <hr className="max-w-40 border-t-2 border-primary mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
              Since the start of the institute, our students have got placements in reputed companies, TCS, SAP Labs, HSBC, Cognizant, Infosys, Wipro. 
              These are some of the big names where our students are working.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="border border-gray-200 p-4 flex items-center justify-center aspect-square hover:shadow-md transition-shadow bg-white"
              >
                <div className="p-2 text-center">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    className="max-h-16 mx-auto mb-3"
                  />
                  <p className="text-sm font-medium text-gray-800">{company.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-8 md:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">EMPOWER RURAL YOUTH FOR A BRIGHTER FUTURE</h2>
          <button className="mt-4 bg-white text-primary px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
            DONATE
          </button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">TRAININGS</h2>
            <hr className="max-w-40 border-t-2 border-primary mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
              Our Students and faculties regularly go for trainings to Academic Institutes, NGOs, and Industries. IIM Bangalore, IIM Calcutta, IIT Indore, 
              Partner, Singaji are some of the places where we have gone and came back with lots of learnings.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="border border-gray-200 p-4 flex items-center justify-center bg-white">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/96/IIM_Bangalore_logo.svg/1200px-IIM_Bangalore_logo.svg.png" 
                   alt="IIM Bangalore" className="max-h-20" />
            </div>
            <div className="border border-gray-200 p-4 flex items-center justify-center bg-white">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Indian_Institute_of_Management_Calcutta_Logo.svg/1200px-Indian_Institute_of_Management_Calcutta_Logo.svg.png" 
                   alt="IIM Calcutta" className="max-h-20" />
            </div>
            <div className="border border-gray-200 p-4 flex items-center justify-center bg-white">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/IIT_Indore_Logo.svg/1200px-IIT_Indore_Logo.svg.png" 
                   alt="IIT Indore" className="max-h-20" />
            </div>
            <div className="border border-gray-200 p-4 flex items-center justify-center bg-white">
              <div className="text-center">
                <p className="text-lg font-bold">Partner Institute</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Placement;
