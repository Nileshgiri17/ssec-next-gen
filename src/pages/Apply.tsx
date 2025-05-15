import React, { useState } from 'react';
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
} from "@/components/ui/select";  // Correct import for Select components
import { Slider } from "@/components/ui/slider";
import siteData from '../data/siteData.json';
import { ArrowRight, Check, CheckCircle } from 'lucide-react';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
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
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Apply = () => {
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      age: 18,
      university: "",
      course: "",
      experience: 0,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log("Form values:", values);
    setSuccess(true);
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
              {success ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Application Submitted</h2>
                  <p className="text-gray-600">Thank you for your application. We will review your submission and contact you soon.</p>
                </div>
              ) : (
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
                    <Button type="submit">
                      Submit Application
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </form>
                </Form>
              )}
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
