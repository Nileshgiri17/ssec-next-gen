
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Admission from "./pages/Admission";
import Apply from "./pages/Apply";
import Newsletter from "./pages/Newsletter";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Placement from "./pages/Placement";
import Faculty from "./pages/Faculty";
import Departments from "./pages/Departments";
import Success from "./pages/Success";
import Activities from "./pages/Activities";
import ActivityDetail from "./pages/ActivityDetail";
import UpcomingEventDetail from "./pages/UpcomingEventDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/success" element={<Success />} />
          <Route path="/activities" element={<Activities />} />
           <Route path="/activities/:id" element={<ActivityDetail />} />
          <Route path="/upcoming-events/:id" element={<UpcomingEventDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;