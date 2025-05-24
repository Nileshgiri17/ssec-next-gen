import React from 'react';
import Layout from '../components/Layout';

const Placement = () => {
  // Company logos organized in rows like in the image
  const companies = [
    { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
    { name: 'HSBC', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg' },
    { name: 'WIPRO', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'INFOSYS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'TCS', logo: '	https://web-api.ssism.org/uploads/tcs_908404d6f1.png' },
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
              <img src="https://web-api.ssism.org/uploads/iim_e3b21cf99c.png" 
                   alt="IIM Bangalore" className="max-h-20" />
                   
            </div>
            <div className="border border-gray-200 p-4 flex items-center justify-center bg-white">
              <img src="https://web-api.ssism.org/uploads/iimudaipur_17dc54ad56.png" 
                   alt="IIM Udaipur" className="max-h-20" />
            </div>
            <div className="border border-gray-200 p-4 flex items-center justify-center bg-white">
              <img src="https://web-api.ssism.org/uploads/iimindore_92bec135cc.png" 
                   alt="IIT Indore" className="max-h-20" />
            </div>
            <div className="border border-gray-200 p-4 flex items-center justify-center bg-white">
             <img src="https://web-api.ssism.org/uploads/parivaar_6713ffad0f.png" 
                   alt="Parivar" className="max-h-20" />
              </div>
              </div>
        </div>
      </section>
    </Layout>
  );
};

export default Placement;