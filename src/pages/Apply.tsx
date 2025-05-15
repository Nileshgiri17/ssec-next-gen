
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Mail, 
  Phone, 
  CheckCircle, 
  School, 
  MapPin, 
  RotateCcw,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/dropdown-menu';

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  whatsappNumber: z.string().min(10, "WhatsApp number must be at least 10 digits"),
  schoolName: z.string().min(2, "School name is required"),
  twelfthScore: z.string().optional(),
  jeeScore: z.string().optional(),
  district: z.string().min(1, "Please select a district"),
  villageCity: z.string().min(1, "Village/City is required"),
  track: z.string().min(1, "Please select a track"),
  priority1: z.string().min(1, "Please select your first priority"),
  priority2: z.string().min(1, "Please select your second priority"),
  priority3: z.string().min(1, "Please select your third priority"),
  localAddress: z.string().min(5, "Local address is required"),
});

const Apply = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      whatsappNumber: '',
      schoolName: '',
      twelfthScore: '',
      jeeScore: '',
      district: '',
      villageCity: '',
      track: '',
      priority1: '',
      priority2: '',
      priority3: '',
      localAddress: '',
    },
  });
  
  const districts = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Kolkata", "Chennai"];
  const tracks = ["Engineering", "Medical", "Commerce", "Arts"];
  const branches = ["B.Tech CSE", "B.Tech IT", "B.Tech AIML", "B.Tech ESE"];
  
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data);
      toast({
        title: "Application Submitted",
        description: "Thank you for applying! We will contact you shortly.",
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };
  
  const resetPriorities = () => {
    form.setValue('priority1', '');
    form.setValue('priority2', '');
    form.setValue('priority3', '');
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

      {/* Registration Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-2 text-primary text-center">Registration Form</h2>
              <p className="text-center mb-8 text-gray-600">
                1) रजिस्ट्रेशन करने के लिए ऑनलाइन रजिस्ट्रेशन शुल्क 3000 रुपए जमा करना अनिवार्य है।
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            First Name <span className="text-red-500 ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            Last Name <span className="text-red-500 ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            Email <span className="text-red-500 ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            Phone <span className="text-red-500 ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* WhatsApp and School */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="whatsappNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            WhatsApp Number <span className="text-red-500 ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your WhatsApp number" type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="schoolName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            School Name <span className="text-red-500 ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your school name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Score Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="twelfthScore"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>12th Score (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your 12th score" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="jeeScore"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>JEE Score (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your JEE score" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* District and Village/City */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="district"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            District <span className="text-red-500 ml-1">*</span>
                          </FormLabel>
                          <select 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                            {...field}
                          >
                            <option value="">Select</option>
                            {districts.map((district) => (
                              <option key={district} value={district}>
                                {district}
                              </option>
                            ))}
                          </select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="villageCity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            Village/City <span className="text-red-500 ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your village or city" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Track */}
                  <FormField
                    control={form.control}
                    name="track"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Track (Choose your nearest track)</FormLabel>
                        <select 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          {...field}
                        >
                          <option value="">Select</option>
                          {tracks.map((track) => (
                            <option key={track} value={track}>
                              {track}
                            </option>
                          ))}
                        </select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Branch Preferences */}
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold mb-4">Branch Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="priority1"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Priority 1 <span className="text-red-500 ml-1">*</span>
                            </FormLabel>
                            <select 
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                              {...field}
                            >
                              <option value="">Select</option>
                              {branches.map((branch) => (
                                <option key={branch} value={branch}>
                                  {branch}
                                </option>
                              ))}
                            </select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="priority2"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Priority 2 <span className="text-red-500 ml-1">*</span>
                            </FormLabel>
                            <select 
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                              {...field}
                            >
                              <option value="">Select</option>
                              {branches.map((branch) => (
                                <option key={branch} value={branch}>
                                  {branch}
                                </option>
                              ))}
                            </select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="priority3"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Priority 3 <span className="text-red-500 ml-1">*</span>
                            </FormLabel>
                            <select 
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                              {...field}
                            >
                              <option value="">Select</option>
                              {branches.map((branch) => (
                                <option key={branch} value={branch}>
                                  {branch}
                                </option>
                              ))}
                            </select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="mt-4">
                      <Button 
                        type="button" 
                        onClick={resetPriorities}
                        variant="outline" 
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Reset Priorities
                      </Button>
                    </div>
                  </div>
                  
                  {/* Local Address */}
                  <FormField
                    control={form.control}
                    name="localAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          Local Address <span className="text-red-500 ml-1">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter your local address" 
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md text-lg font-medium"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Submit & Pay <Send className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
      
      {/* How to Apply Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-primary text-center">How to Complete Your Application</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="flex items-start mb-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Complete Registration Form</h3>
                  <p className="text-gray-700">Fill out all required fields in the registration form above with accurate information.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="flex items-start mb-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Pay Registration Fee</h3>
                  <p className="text-gray-700">Complete the payment of ₹3000 registration fee through our secure payment gateway.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="flex items-start mb-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Document Verification</h3>
                  <p className="text-gray-700">Our team will contact you for verification of your documents and credentials.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="flex items-start mb-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Admission Confirmation</h3>
                  <p className="text-gray-700">Upon successful verification, you will receive admission confirmation for your preferred branch.</p>
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
