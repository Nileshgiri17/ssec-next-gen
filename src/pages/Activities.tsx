
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CalendarDays, Users, Award, BookOpen, Download, ArrowRight, Home } from 'lucide-react';

const Activities = () => {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    // Simulate API fetch
    const fetchActivities = async () => {
      setLoading(true);
      try {
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockActivities = [
          {
            id: 1,
            title: "Annual Science Exhibition",
            date: "2025-06-15",
            category: "academic",
            description: "Students from all departments will showcase their innovative projects and research work.",
            location: "Main Campus, Science Block",
            image: "/science-exhibition.jpg"
          },
          {
            id: 2,
            title: "Cultural Fest 'Harmony'",
            date: "2025-05-28",
            category: "cultural",
            description: "A three-day cultural extravaganza featuring music, dance, and theatrical performances.",
            location: "College Auditorium",
            image: "/cultural-fest.jpg"
          },
          {
            id: 3,
            title: "Workshop on AI and Machine Learning",
            date: "2025-06-05",
            category: "workshop",
            description: "Industry experts will conduct hands-on sessions on the latest AI and ML technologies.",
            location: "Computer Science Department",
            image: "/ai-workshop.jpg"
          },
          {
            id: 4,
            title: "Annual Sports Meet",
            date: "2025-07-10",
            category: "sports",
            description: "Inter-college sports competition featuring various indoor and outdoor games.",
            location: "College Sports Ground",
            image: "/sports-meet.jpg"
          },
          {
            id: 5,
            title: "Career Counseling Session",
            date: "2025-06-20",
            category: "career",
            description: "Guidance on career opportunities, resume building, and interview preparation.",
            location: "Placement Cell",
            image: "/career-counseling.jpg"
          },
          {
            id: 6,
            title: "Literary Club Poetry Reading",
            date: "2025-05-25",
            category: "club",
            description: "An evening of poetry reading and literary discussions.",
            location: "College Library",
            image: "/poetry-reading.jpg"
          },
        ];
        
        setActivities(mockActivities);
      } catch (error) {
        console.error("Error fetching activities:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchActivities();
  }, []);

  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return <BookOpen className="h-5 w-5" />;
      case 'cultural':
        return <Users className="h-5 w-5" />;
      case 'sports':
        return <Award className="h-5 w-5" />;
      default:
        return <CalendarDays className="h-5 w-5" />;
    }
  };

  // Filter activities by category
  const getActivitiesByCategory = (category: string) => {
    if (category === 'all') {
      return activities;
    }
    return activities.filter(activity => activity.category === category);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Campus Activities</h1>
            <p className="text-xl text-white/90 animate-fade-in delay-100">
              Stay updated with the latest events, workshops, and activities happening around our campus.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Browse Activities</h2>
                <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="cultural">Cultural</TabsTrigger>
                  <TabsTrigger value="workshop">Workshops</TabsTrigger>
                  <TabsTrigger value="sports">Sports</TabsTrigger>
                  <TabsTrigger value="club">Clubs</TabsTrigger>
                </TabsList>
              </div>

              {/* All Activities */}
              <TabsContent value="all" className="mt-0">
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <Card key={i} className="animate-pulse">
                        <div className="h-48 bg-gray-200"></div>
                        <CardHeader>
                          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </CardHeader>
                        <CardContent>
                          <div className="h-4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((activity) => (
                      <Card key={activity.id} className="overflow-hidden hover-scale">
                        <div className="h-48 bg-gray-200 relative">
                          <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-bl">
                            {activity.category}
                          </div>
                          {/* Placeholder for activity image */}
                          <div className="w-full h-full flex items-center justify-center bg-primary/10">
                            {getCategoryIcon(activity.category)}
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>{activity.title}</CardTitle>
                          <CardDescription>
                            <div className="flex items-center gap-2">
                              <CalendarDays className="h-4 w-4" /> 
                              {formatDate(activity.date)}
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 line-clamp-3">
                            {activity.description}
                          </p>
                          <div className="mt-4 text-xs text-gray-500">
                            Location: {activity.location}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                            <ArrowRight className="ml-2" size={14} />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Category-specific tabs */}
              {['academic', 'cultural', 'workshop', 'sports', 'club'].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getActivitiesByCategory(category).length ? (
                      getActivitiesByCategory(category).map((activity) => (
                        <Card key={activity.id} className="overflow-hidden hover-scale">
                          <div className="h-48 bg-gray-200 relative">
                            {/* Placeholder for activity image */}
                            <div className="w-full h-full flex items-center justify-center bg-primary/10">
                              {getCategoryIcon(activity.category)}
                            </div>
                          </div>
                          <CardHeader>
                            <CardTitle>{activity.title}</CardTitle>
                            <CardDescription>
                              <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" /> 
                                {formatDate(activity.date)}
                              </div>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 line-clamp-3">
                              {activity.description}
                            </p>
                            <div className="mt-4 text-xs text-gray-500">
                              Location: {activity.location}
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm" className="w-full">
                              View Details
                              <ArrowRight className="ml-2" size={14} />
                            </Button>
                          </CardFooter>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-3 text-center py-12">
                        <p>No activities found in this category.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events Calendar</h2>
            <p className="text-gray-600">
              Here's a preview of our upcoming events and activities. Mark your calendar and don't miss out!
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="text-center py-10">
              <p className="text-gray-600 mb-4">
                Full calendar view coming soon. In the meantime, check out our activities listing above.
              </p>
              <Button>
                View All Events
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
