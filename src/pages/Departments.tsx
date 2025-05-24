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
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  ArrowRight, 
  Check, 
  ChevronRight 
} from 'lucide-react';

interface Department {
  id: number;
  name: string;
  shortName: string;
  description: string;
  image: string;
  courses: string[];
  highlights: string[];
  hod: string;
  facultyCount: number;
  studentCount: number;
  labs: string[];
}

const Departments = () => {
  const departments: Department[] = [
    {
      id: 1,
      name: "Computer Science Engineering",
      shortName: "CSE",
      description: "The Department of Computer Science Engineering aims to prepare students for leadership roles in research, academia and industry. The department offers a comprehensive curriculum covering various aspects of computer science.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      courses: ["B.Tech in Computer Science", "M.Tech in Computer Science"],
      highlights: [
        "Modern computing labs with latest software and hardware",
        "Industry-focused curriculum updated regularly",
        "Research opportunities in emerging technologies",
        "Regular workshops and seminars by industry experts"
      ],
      hod: "Dr. Rajesh Kumar",
      facultyCount: 12,
      studentCount: 240,
      labs: ["Programming Lab", "Database Lab", "AI/ML Lab", "Networking Lab"]
    },
    {
      id: 2,
      name: "Information Technology",
      shortName: "IT",
      description: "The Department of Information Technology focuses on information systems, software development, and network technologies. Our curriculum emphasizes practical skills along with theoretical knowledge.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      courses: ["B.Tech in Information Technology", "M.Tech in Information Systems"],
      highlights: [
        "Specialized labs for web technologies and system administration",
        "Focus on full-stack development skills",
        "Regular industry projects and internships",
        "Emphasis on emerging IT trends"
      ],
      hod: "Dr. Priya Singh",
      facultyCount: 10,
      studentCount: 200,
      labs: ["Web Technologies Lab", "System Administration Lab", "Software Engineering Lab"]
    },
    {
      id: 3,
      name: "AI & Machine Learning",
      shortName: "AIML",
      description: "The Department of AI & Machine Learning prepares students to be at the forefront of artificial intelligence revolution. The curriculum covers both traditional AI and cutting-edge machine learning techniques.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      courses: ["B.Tech in AI & Machine Learning", "M.Tech in Data Science"],
      highlights: [
        "State-of-the-art GPU labs for deep learning",
        "Research collaborations with leading AI companies",
        "Hands-on projects with real-world applications",
        "Regular hackathons and AI competitions"
      ],
      hod: "Prof. Amit Sharma",
      facultyCount: 8,
      studentCount: 160,
      labs: ["Deep Learning Lab", "Computer Vision Lab", "Natural Language Processing Lab"]
    },
    {
      id: 4,
      name: "Electronics & Systems Engineering",
      shortName: "ESE",
      description: "The Department of Electronics & Systems Engineering focuses on electronic systems, embedded technology, and hardware design. The curriculum balances theoretical concepts with practical applications.",
      image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&q=80",
      courses: ["B.Tech in Electronics & Systems", "M.Tech in Embedded Systems"],
      highlights: [
        "Well-equipped electronics and circuits labs",
        "Industry-standard tools for system design",
        "IoT and embedded systems specialization",
        "Hardware projects with industrial applications"
      ],
      hod: "Dr. Sneha Patel",
      facultyCount: 9,
      studentCount: 180,
      labs: ["Electronics Lab", "Embedded Systems Lab", "IoT Lab", "VLSI Design Lab"]
    }
  ];

  return (
    <Layout>
      <section className="bg-gray-50 py-16 md:py-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Departments</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our academic departments offering cutting-edge programs designed
              to prepare students for successful careers in engineering and technology.
            </p>
          </div>

          <div className="space-y-16">
            {departments.map((dept, index) => (
              <div 
                key={dept.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in`}
              >
                <div className="md:w-2/5 relative">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">{dept.shortName}</h3>
                      <p className="text-white/80">{dept.name}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl md:text-3xl text-primary">
                      Department of {dept.name}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {dept.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Key Highlights</h4>
                      <ul className="space-y-2">
                        {dept.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check size={16} className="mr-2 text-green-500 mt-1 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="flex justify-center mb-2">
                          <Users size={24} className="text-primary" />
                        </div>
                        <p className="text-2xl font-bold text-primary">{dept.facultyCount}</p>
                        <p className="text-sm text-gray-600">Faculty Members</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="flex justify-center mb-2">
                          <GraduationCap size={24} className="text-primary" />
                        </div>
                        <p className="text-2xl font-bold text-primary">{dept.studentCount}</p>
                        <p className="text-sm text-gray-600">Students</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="flex justify-center mb-2">
                          <BookOpen size={24} className="text-primary" />
                        </div>
                        <p className="text-2xl font-bold text-primary">{dept.labs.length}</p>
                        <p className="text-sm text-gray-600">Specialized Labs</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-0 pt-4">
                    <Link to={`/courses?dept=${dept.shortName}`}>
                      <Button className="flex items-center">
                        Explore Programs <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Departments;