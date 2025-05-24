import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, MapPin, Users, ArrowLeft, Download } from 'lucide-react';

const ActivityDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState<any>(null);

  useEffect(() => {
    // Simulate API fetch for a specific activity
    const fetchActivityDetail = async () => {
      setLoading(true);
      try {
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data - this would normally come from an API with the specific ID
        const mockActivities = [
          {
            id: 1,
            title: "Annual Science Exhibition",
            date: "2025-06-15",
            category: "academic",
            description: "Students from all departments will showcase their innovative projects and research work. The exhibition will feature projects from various disciplines including computer science, physics, chemistry, and biology. This is a great opportunity for students to demonstrate their technical skills and creative thinking. Industry experts will be invited to judge the projects and provide feedback to the participants.",
            location: "Main Campus, Science Block",
            time: "10:00 AM - 4:00 PM",
            organizer: "Science Department",
            contact: "science.dept@university.edu",
            registration: "Required",
            registrationLink: "#",
            image: "/science-exhibition.jpg",
            additionalInfo: "Participants should bring their own laptops and necessary equipment."
          },
          {
            id: 2,
            title: "Cultural Fest 'Harmony'",
            date: "2025-05-28",
            category: "cultural",
            description: "A three-day cultural extravaganza featuring music, dance, and theatrical performances from students representing diverse cultural backgrounds. The fest aims to celebrate unity in diversity and promote cultural exchange among students. Various competitions like singing, dancing, fashion show, and drama will be organized throughout the event. Food stalls representing different cuisines will be set up to provide a complete cultural experience.",
            location: "College Auditorium",
            time: "5:00 PM - 9:00 PM",
            organizer: "Cultural Committee",
            contact: "cultural@university.edu",
            registration: "Open to all",
            registrationLink: "#",
            image: "/cultural-fest.jpg",
            additionalInfo: "Participants should register their performances at least one week before the event."
          },
          {
            id: 3,
            title: "Workshop on AI and Machine Learning",
            date: "2025-06-05",
            category: "workshop",
            description: "Industry experts will conduct hands-on sessions on the latest AI and ML technologies. This workshop will cover fundamental concepts of artificial intelligence and machine learning, followed by practical implementation of algorithms. Participants will learn about neural networks, deep learning, natural language processing, and computer vision. The workshop will conclude with a hackathon where participants can apply their newly acquired knowledge.",
            location: "Computer Science Department",
            time: "9:00 AM - 5:00 PM",
            organizer: "CS Department & IEEE Student Branch",
            contact: "cs.dept@university.edu",
            registration: "Limited seats available",
            registrationLink: "#",
            image: "/ai-workshop.jpg",
            additionalInfo: "Basic knowledge of Python programming is required. Participants should bring their own laptops with Python installed."
          },
          {
            id: 4,
            title: "Annual Sports Meet",
            date: "2025-07-10",
            category: "sports",
            description: "Inter-college sports competition featuring various indoor and outdoor games including cricket, football, basketball, volleyball, chess, and table tennis. The sports meet aims to promote sportsmanship and physical fitness among students. Colleges from across the region will participate in this prestigious event. Winners will be awarded trophies and certificates in a grand ceremony on the final day.",
            location: "College Sports Ground",
            time: "8:00 AM - 6:00 PM",
            organizer: "Sports Department",
            contact: "sports@university.edu",
            registration: "Team registration required",
            registrationLink: "#",
            image: "/sports-meet.jpg",
            additionalInfo: "Teams should report at least 30 minutes before their scheduled match time."
          },
          {
            id: 5,
            title: "Career Counseling Session",
            date: "2025-06-20",
            category: "career",
            description: "Guidance on career opportunities, resume building, and interview preparation from industry professionals. The session will cover career paths in various fields, skill development strategies, and job market trends. Mock interviews will be conducted to help students improve their interview skills. HR professionals from top companies will share insights on what employers look for in candidates and how to stand out in the job market.",
            location: "Placement Cell",
            time: "11:00 AM - 2:00 PM",
            organizer: "Career Counseling Cell",
            contact: "careers@university.edu",
            registration: "Mandatory for final year students",
            registrationLink: "#",
            image: "/career-counseling.jpg",
            additionalInfo: "Students should bring their updated resumes for review."
          },
          {
            id: 6,
            title: "Literary Club Poetry Reading",
            date: "2025-05-25",
            category: "club",
            description: "An evening of poetry reading and literary discussions featuring works of renowned poets as well as original compositions by students. The event aims to foster a love for literature and provide a platform for students to showcase their creative writing skills. The session will include recitation of poems in various languages, followed by a discussion on literary techniques and themes. Guest poets will share their experiences and provide guidance to aspiring writers.",
            location: "College Library",
            time: "4:00 PM - 6:00 PM",
            organizer: "Literary Club",
            contact: "litclub@university.edu",
            registration: "Open to all",
            registrationLink: "#",
            image: "/poetry-reading.jpg",
            additionalInfo: "Participants who wish to present their original work should submit it two days before the event."
          },
        ];
        
        const foundActivity = mockActivities.find(activity => activity.id === parseInt(id as string));
        
        if (foundActivity) {
          setActivity(foundActivity);
        } else {
          console.error("Activity not found");
        }
      } catch (error) {
        console.error("Error fetching activity details:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchActivityDetail();
    }
  }, [id]);

  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Link to="/activities" className="inline-flex items-center gap-2 mb-6 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Activities
        </Link>
        
        {loading ? (
          <div className="max-w-4xl mx-auto">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-8 animate-pulse"></div>
            <div className="h-64 bg-gray-200 rounded mb-6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded mb-6 animate-pulse"></div>
          </div>
        ) : activity ? (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{activity.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-8 text-sm">
              <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                <CalendarDays className="h-4 w-4" />
                <span>{formatDate(activity.date)} • {activity.time}</span>
              </div>
              <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                <MapPin className="h-4 w-4" />
                <span>{activity.location}</span>
              </div>
              <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                <Users className="h-4 w-4" />
                <span>{activity.organizer}</span>
              </div>
            </div>
            
            <Card className="mb-8 overflow-hidden">
              <div className="h-80 bg-gray-200 relative">
                {/* Placeholder for activity image */}
                <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-bl">
                  {activity.category}
                </div>
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  {/* This would normally be an image */}
                  <div className="text-6xl font-bold text-primary/30">{activity.title.charAt(0)}</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Event Description</h2>
                <p className="text-gray-700 mb-6 whitespace-pre-line">{activity.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold mb-2">Event Details</h3>
                    <ul className="space-y-2 text-sm">
                      <li><span className="text-gray-500">Date:</span> {formatDate(activity.date)}</li>
                      <li><span className="text-gray-500">Time:</span> {activity.time}</li>
                      <li><span className="text-gray-500">Location:</span> {activity.location}</li>
                      <li><span className="text-gray-500">Category:</span> {activity.category}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Contact Information</h3>
                    <ul className="space-y-2 text-sm">
                      <li><span className="text-gray-500">Organizer:</span> {activity.organizer}</li>
                      <li><span className="text-gray-500">Contact:</span> {activity.contact}</li>
                      <li><span className="text-gray-500">Registration:</span> {activity.registration}</li>
                    </ul>
                  </div>
                </div>
                
                {activity.additionalInfo && (
                  <div className="mt-6 bg-secondary/50 p-4 rounded-md">
                    <h3 className="font-semibold mb-2">Additional Information</h3>
                    <p className="text-sm">{activity.additionalInfo}</p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {activity.registrationLink && (
                <Button>
                  Register for this Event
                </Button>
              )}
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Event Details
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Activity Not Found</h2>
            <p className="mb-6">The activity you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/activities">Back to Activities</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ActivityDetail;