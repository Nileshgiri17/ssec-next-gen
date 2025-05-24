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
  Send,
  ArrowRight
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Mobile number must be at least 10 digits.",
  }).max(10, {
    message: "Mobile number must not exceed 10 digits.",
  }).refine(val => /^\d+$/.test(val), {
    message: "Mobile number must contain only digits.",
  }),
  whatsappNumber: z.string().min(10, {
    message: "WhatsApp number must be at least 10 digits.",
  }).max(10, {
    message: "WhatsApp number must not exceed 10 digits.",
  }).refine(val => /^\d+$/.test(val), {
    message: "WhatsApp number must contain only digits.",
  }),
  schoolName: z.string().min(2, {
    message: "University name must be at least 2 characters.",
  }),
  twelfthScore: z.string().optional(),
  jeeScore: z.string().optional(),
  district: z.string().min(1,{
    message: "Please select a district",
  }),
  villageCity: z.string().min(1, {
    message: "Village/City is required",
  }),
  track: z.string().min(1, {
    message: "Please select a track",
  }),
 priority1: z.string().min(1, {
    message: "Please select Priority 1.",
  }),
  priority2: z.string().min(1, {
    message: "Please select Priority 2.",
  }),
  priority3: z.string().min(1, {
    message: "Please select Priority 3.",
  }),
  localAddress: z.string().min(5,{
    message: "Local address is required",
  }),
}).refine(
  (data) => data.priority1 !== data.priority2, 
  {
    message: "Priority 1 and Priority 2 cannot be the same",
    path: ["priority2"],
  }
).refine(
  (data) => data.priority2 !== data.priority3,
  {
    message: "Priority 2 and Priority 3 cannot be the same",
    path: ["priority3"],
  }
).refine(
  (data) => data.priority1 !== data.priority3,
  {
    message: "Priority 1 and Priority 3 cannot be the same",
    path: ["priority3"],
  }
);

const Apply = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
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
  
const districts = [
  "Agar Malwa",
  "Alirajpur",
  "Anuppur",
  "Ashoknagar",
  "Balaghat",
  "Barwani",
  "Betul",
  "Bhind",
  "Bhopal",
  "Burhanpur",
  "Chhatarpur",
  "Chhindwara",
  "Damoh",
  "Datia",
  "Dewas",
  "Dhar",
  "Dindori",
  "Guna",
  "Gwalior",
  "Harda",
  "Hoshangabad (Narmadapuram)",
  "Indore",
  "Jabalpur",
  "Jhabua",
  "Katni",
  "Khandwa",
  "Khargone",
  "Mandla",
  "Mandsaur",
  "Morena",
  "Narsinghpur",
  "Neemuch",
  "Panna",
  "Raisen",
  "Rajgarh",
  "Ratlam",
  "Rewa",
  "Sagar",
  "Satna",
  "Sehore",
  "Seoni",
  "Shahdol",
  "Shajapur",
  "Sheopur",
  "Shivpuri",
  "Sidhi",
  "Singrauli",
  "Tikamgarh",
  "Ujjain",
  "Umaria",
  "Vidisha",
  "other"
];

  const tracks = [ "Khategaon",
  "Harda",
  "Kannod",
  "Nasrullaganj",
  "Gopalpur",
  "Nemawar",
  "Satwas-Kantaphod",
  "other"];
  // Get current values to implement the priority selection logic
  const priority1Value = form.watch("priority1");
  const priority2Value = form.watch("priority2");
  const priority3Value = form.watch("priority3");

    const priorityOptions = [
    { value: "B.Tech(CS)", label: "CS" },
    { value: "B.Tech(IT)", label: "IT" },
    { value: "B.Tech(AIML)", label: "AIML" },
    { value: "B.Tech(ECE)", label: "ECE" }
  ];

    // Handle number input for mobile and whatsapp
  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow digits and limit to 10 characters
    if (/^\d*$/.test(value) && value.length <= 10) {
      return value;
    }
    return e.target.value.slice(0, -1);
  };

    // Reset priorities function
  const resetPriorities = () => {
    form.setValue("priority1", "");
    form.setValue("priority2", "");
    form.setValue("priority3", "");
    
    toast({
      title: "Priorities Reset",
      description: "Priority selections have been cleared.",
      variant: "default",
    });
  };
  
   async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    
    try {
      // API call simulation
      console.log("Submitting application:", values);
      
      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // If API call is successful
      toast({
        title: "Application Submitted",
        description: "Your application has been successfully submitted!",
        variant: "default",
      });
      
      // Redirect to success page with data
      navigate('/success', { 
        state: { 
          source: 'apply',
          data: values
        } 
      });
      
    } catch (error) {
      console.error("Error submitting application:", error);
      
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
      
      setLoading(false);
    }
  }

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
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="10 digit mobile number" 
                              maxLength={10}
                              onInput={(e) => {
                                const target = e.target as HTMLInputElement;
                                const value = target.value.replace(/\D/g, "");
                                field.onChange(value);
                                target.value = value;
                              }}
                              {...field} 
                            />
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
                          <FormLabel>WhatsApp Number</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="10 digit WhatsApp number" 
                              maxLength={10}
                              onInput={(e) => {
                                const target = e.target as HTMLInputElement;
                                const value = target.value.replace(/\D/g, "");
                                field.onChange(value);
                                target.value = value;
                              }}
                              {...field} 
                            />
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
                          <FormLabel>Priority 1</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your first priority" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {priorityOptions.map((option) => (
                                <SelectItem 
                                  key={`p1-${option.value}`} 
                                  value={option.value}
                                  disabled={option.value === priority2Value || option.value === priority3Value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="priority2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Priority 2</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your second priority" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {priorityOptions.map((option) => (
                                <SelectItem 
                                  key={`p2-${option.value}`} 
                                  value={option.value}
                                  disabled={option.value === priority1Value || option.value === priority3Value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="priority3"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Priority 3</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your third priority" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {priorityOptions.map((option) => (
                                <SelectItem 
                                  key={`p3-${option.value}`} 
                                  value={option.value}
                                  disabled={option.value === priority1Value || option.value === priority2Value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
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
                  
                   <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2" size={16} />
                      </>
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