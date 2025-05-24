import React from 'react';
import Layout from '../components/Layout';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Mail, Phone, Linkedin, GraduationCap } from 'lucide-react';

interface FacultyMember {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  email: string;
  phone: string;
  education: string;
  specialization: string;
  linkedin?: string;
}

const Faculty = () => {
  // Example faculty data - this would normally come from your data file
  const facultyMembers: FacultyMember[] = [
    {
      id: 1,
      name: "Mr. Pranjal Dubey",
      position: "Chairman",
      department: "SSISM",
      image: "https://en-media.thebetterindia.com/uploads/2014/12/PranjalDubey.jpg",
      email: "pranjal@ssism.org",
      phone: "+91 999999999",
      education: "Ex-SAP, MCA MBA",
      specialization: "Machine Learning, Artificial Intelligence",
      linkedin: "https://linkedin.com/"
    },
    // {
    //   id: 2,
    //   name: "Dr. Priya Singh",
    //   position: "Associate Professor",
    //   department: "Information Technology",
    //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces&q=80",
    //   email: "priya.singh@example.edu",
    //   phone: "+91 9876543211",
    //   education: "Ph.D in Information Technology",
    //   specialization: "Data Science, Big Data Analytics"
    // },
    // {
    //   id: 3,
    //   name: "Prof. Amit Sharma",
    //   position: "Assistant Professor",
    //   department: "AI & Machine Learning",
    //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&q=80",
    //   email: "amit.sharma@example.edu",
    //   phone: "+91 9876543212",
    //   education: "M.Tech in Computer Science",
    //   specialization: "Deep Learning, Neural Networks",
    //   linkedin: "https://linkedin.com/"
    // },
    // {
    //   id: 4,
    //   name: "Dr. Sneha Patel",
    //   position: "Professor",
    //   department: "Electronics & Systems Engineering",
    //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces&q=80",
    //   email: "sneha.patel@example.edu",
    //   phone: "+91 9876543213",
    //   education: "Ph.D in Electronics Engineering",
    //   specialization: "VLSI Design, Embedded Systems"
    // },
    // {
    //   id: 5,
    //   name: "Prof. Rahul Verma",
    //   position: "Assistant Professor",
    //   department: "Computer Science Engineering",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&q=80",
    //   email: "rahul.verma@example.edu",
    //   phone: "+91 9876543214",
    //   education: "M.Tech in Computer Science",
    //   specialization: "Computer Networks, Cybersecurity",
    //   linkedin: "https://linkedin.com/"
    // },
    // {
    //   id: 6,
    //   name: "Dr. Ananya Das",
    //   position: "Associate Professor",
    //   department: "Information Technology",
    //   image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces&q=80",
    //   email: "ananya.das@example.edu",
    //   phone: "+91 9876543215",
    //   education: "Ph.D in Computer Applications",
    //   specialization: "Software Engineering, Cloud Computing"
    // },
  ];

  // Group faculty by department
  const departments = Array.from(new Set(facultyMembers.map(faculty => faculty.department)));

  return (
    <Layout>
      <section className="py-16 md:py-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Faculty</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our experienced faculty members who are dedicated to providing
              quality education and guiding students towards a successful future.
            </p>
          </div>

          {departments.map((department) => (
            <div key={department} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 border-l-4 border-primary pl-4">
                {department}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facultyMembers
                  .filter(faculty => faculty.department === department)
                  .map((faculty) => (
                    <Card key={faculty.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={faculty.image} 
                          alt={faculty.name}
                          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{faculty.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {faculty.position}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-2">
                            <GraduationCap size={16} className="text-gray-500" />
                            <span>{faculty.education}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail size={16} className="text-gray-500" />
                            <a href={`mailto:${faculty.email}`} className="hover:text-primary">
                              {faculty.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={16} className="text-gray-500" />
                            <a href={`tel:${faculty.phone}`} className="hover:text-primary">
                              {faculty.phone}
                            </a>
                          </div>
                          <div>
                            <span className="text-gray-700 font-medium">Specialization: </span>
                            <span className="text-gray-600">{faculty.specialization}</span>
                          </div>
                        </div>
                      </CardContent>
                      {faculty.linkedin && (
                        <CardFooter className="border-t pt-4">
                          <a 
                            href={faculty.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                          >
                            <Linkedin size={16} />
                            <span>LinkedIn Profile</span>
                          </a>
                        </CardFooter>
                      )}
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Faculty;