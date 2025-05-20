
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import siteData from '../data/siteData.json';
import { ArrowRight, Check, CheckCircle, Reset } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Enhanced FormSchema with new validations
const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  mobile: z.string().min(10, {
    message: "Mobile number must be at least 10 digits.",
  }).max(10, {
    message: "Mobile number must not exceed 10 digits.",
  }).refine(val => /^\d+$/.test(val), {
    message: "Mobile number must contain only digits.",
  }),
  whatsapp: z.string().min(10, {
    message: "WhatsApp number must be at least 10 digits.",
  }).max(10, {
    message: "WhatsApp number must not exceed 10 digits.",
  }).refine(val => /^\d+$/.test(val), {
    message: "WhatsApp number must contain only digits.",
  }),
  age: z.number().min(18, {
    message: "You must be at least 18 years old to apply.",
  }).max(60, {
    message: "You must be under 60 years old to apply."
  }),
  university: z.string().min(2, {
    message: "University name must be at least 2 characters.",
  }),
  course: z.string().min(2, {
    message: "Course must be at least 2 characters.",
  }),
  experience: z.number().min(0, {
    message: "Experience must be a positive number.",
  }).max(10, {
    message: "Experience must be less than 10 years."
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
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      whatsapp: "",
      age: 18,
      university: "",
      course: "",
      experience: 0,
      priority1: "",
      priority2: "",
      priority3: "",
      message: "",
    },
  });

  // Get current values to implement the priority selection logic
  const priority1Value = form.watch("priority1");
  const priority2Value = form.watch("priority2");
  const priority3Value = form.watch("priority3");

  // Available priorities options - updated to match the provided values
  const priorityOptions = [
    { value: "B.Tech(CS)", label: "CS" },
    { value: "B.Tech(IT)", label: "IT" },
    { value: "B.Tech(AIML)", label: "AI/ML" },
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

  async function onSubmit(values: z.infer<typeof FormSchema>) {
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
      <section className="bg-white py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Apply Now</CardTitle>
              <CardDescription>
                Fill out the form below to start your application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="mobile"
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
                    
                    <FormField
                      control={form.control}
                      name="whatsapp"
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
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="Enter your age" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="university"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>University</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your university" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your course" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience (years)</FormLabel>
                        <FormControl>
                          <Slider
                            defaultValue={[field.value]}
                            max={10}
                            step={1}
                            onValueChange={(value) => field.onChange(value[0])}
                          />
                        </FormControl>
                        <FormDescription>
                          Specify your years of experience.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Select your priorities</h3>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={resetPriorities} 
                        className="flex items-center gap-1"
                      >
                        <Reset className="h-4 w-4" />
                        Reset Priorities
                      </Button>
                    </div>
                    
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
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about yourself"
                            className="resize-none"
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
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                {siteData.siteInfo.name} Application Form
              </div>
              <div>
                {new Date().getFullYear()}
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
