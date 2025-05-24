import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, MapPin, Users, ArrowLeft, Download, Clock, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const UpcomingEventDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    // Simulate API fetch for a specific upcoming event
    const fetchEventDetail = async () => {
      setLoading(true);
      try {
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data - this would normally come from an API with the specific ID
        const mockEvents = [
          {
            id: 7,
            title: "Freshers' Welcome Party",
            date: "2025-06-25",
            time: "5:00 PM - 9:00 PM",
            location: "College Auditorium",
            category: "cultural",
            description: "A grand welcome ceremony for the new students joining our college this academic year. The event will include cultural performances, interactive games, and an opportunity for freshers to showcase their talents. Senior students will organize various activities to help new students feel comfortable and make new friends. The evening will conclude with a DJ night and dinner.",
            organizer: "Student Council",
            contact: "studentcouncil@university.edu",
            registration: "Mandatory for freshers",
            registrationLink: "#",
            additionalInfo: "Dress code: Semi-formal attire. Event ID cards will be distributed a week before the event."
          },
          {
            id: 8,
            title: "Tech Symposium",
            date: "2025-07-05",
            time: "10:00 AM - 4:00 PM",
            location: "IT Department",
            category: "academic",
            description: "A day-long symposium featuring technical paper presentations, poster sessions, and panel discussions on emerging technologies. Students will get an opportunity to present their research work and projects to faculty members and industry experts. The symposium aims to provide a platform for academic discussion and knowledge exchange in the field of technology.",
            organizer: "IT Department",
            contact: "it.dept@university.edu",
            registration: "Required for presenters",
            registrationLink: "#",
            additionalInfo: "Participants should submit their abstract by June 15, 2025."
          },
          {
            id: 9,
            title: "Alumni Meet",
            date: "2025-07-15",
            time: "11:00 AM - 3:00 PM",
            location: "College Amphitheater",
            category: "networking",
            description: "Annual gathering of alumni from various batches to reconnect with their alma mater and fellow graduates. The event will include interactive sessions, where alumni will share their professional experiences and insights with current students. It's a great opportunity for students to build networks and learn about career opportunities from alumni working in different sectors.",
            organizer: "Alumni Association",
            contact: "alumni@university.edu",
            registration: "Open to all alumni and faculty",
            registrationLink: "#",
            additionalInfo: "Alumni are encouraged to register in advance to help with logistics planning."
          },
          {
            id: 10,
            title: "Entrepreneurship Workshop",
            date: "2025-07-25",
            time: "2:00 PM - 5:00 PM",
            location: "Business Department",
            category: "workshop",
            description: "An interactive workshop on entrepreneurship basics, business model development, and startup funding. Successful entrepreneurs will share their journey and provide guidance on turning innovative ideas into viable businesses. Participants will engage in hands-on activities to develop their business ideas and receive feedback from mentors.",
            organizer: "E-Cell",
            contact: "ecell@university.edu",
            registration: "Limited seats available",
            registrationLink: "#",
            additionalInfo: "Bring your business ideas if you have any. Laptops recommended but not mandatory."
          },
          {
            id: 11,
            title: "Hackathon 2025",
            date: "2025-08-10",
            time: "9:00 AM (24 hours)",
            location: "Computer Labs",
            category: "competition",
            description: "A 24-hour coding marathon where participants work in teams to develop innovative solutions to real-world problems. Industry partners will propose challenges for teams to solve using technology. The event will feature mentoring sessions, tech talks by industry experts, and judging rounds. Winning teams will receive prizes and potential internship opportunities with sponsoring companies.",
            organizer: "Computer Science Department & IEEE Student Branch",
            contact: "hackathon@university.edu",
            registration: "Team registration required",
            registrationLink: "#",
            additionalInfo: "Teams of 3-4 members. Participants should bring their own laptops. Food and refreshments will be provided throughout the event."
          },
        ];
        
        const foundEvent = mockEvents.find(event => event.id === parseInt(id as string));
        
        if (foundEvent) {
          setEvent(foundEvent);
        } else {
          console.error("Event not found");
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchEventDetail();
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
        ) : event ? (
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold">{event.title}</h1>
              <Badge variant="outline" className="text-primary border-primary w-fit">
                {event.category}
              </Badge>
            </div>
            
            <Card className="mb-8 overflow-hidden">
              <div className="h-64 bg-primary/10 relative flex items-center justify-center">
                <Calendar className="h-24 w-24 text-primary/30" />
                <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1.5 rounded-full">
                  Upcoming Event
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-4 mb-8 text-sm">
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                    <CalendarDays className="h-4 w-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                    <Users className="h-4 w-4" />
                    <span>{event.organizer}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold mb-4">Event Description</h2>
                <p className="text-gray-700 mb-6 whitespace-pre-line">{event.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold mb-2">Event Details</h3>
                    <ul className="space-y-2 text-sm">
                      <li><span className="text-gray-500">Date:</span> {formatDate(event.date)}</li>
                      <li><span className="text-gray-500">Time:</span> {event.time}</li>
                      <li><span className="text-gray-500">Location:</span> {event.location}</li>
                      <li><span className="text-gray-500">Category:</span> {event.category}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Contact Information</h3>
                    <ul className="space-y-2 text-sm">
                      <li><span className="text-gray-500">Organizer:</span> {event.organizer}</li>
                      <li><span className="text-gray-500">Contact:</span> {event.contact}</li>
                      <li><span className="text-gray-500">Registration:</span> {event.registration}</li>
                    </ul>
                  </div>
                </div>
                
                {event.additionalInfo && (
                  <div className="mt-6 bg-secondary/50 p-4 rounded-md">
                    <h3 className="font-semibold mb-2">Additional Information</h3>
                    <p className="text-sm">{event.additionalInfo}</p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {event.registrationLink && (
                <Button>
                  Register for this Event
                </Button>
              )}
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Add to Calendar
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Event Not Found</h2>
            <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/activities">Back to Activities</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UpcomingEventDetail;
