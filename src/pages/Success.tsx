import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, Home } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { source, data } = location.state || { source: 'generic', data: {} };

  const handleDownload = () => {
    // Create a simple receipt
    const receiptContent = `
      Receipt
      --------
      Date: ${new Date().toLocaleDateString()}
      Name: ${data?.name || 'User'}
      Email: ${data?.email || 'Not provided'}
      Application ID: ${Math.random().toString(36).substring(2, 10).toUpperCase()}
      
      Thank you for your application!
    `;
    
    // Create a blob and download it
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'application_receipt.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderContent = () => {
    switch (source) {
      case 'apply':
        return (
          <>
            <CardHeader>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center">Application Submitted Successfully!</CardTitle>
              <CardDescription className="text-center pt-2">
                Thank you for submitting your application. We have received your information and will review it shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6">
                <AlertTitle>Application received</AlertTitle>
                <AlertDescription>
                  An email with your application details has been sent to your registered email address.
                  Please check your inbox and spam folder.
                </AlertDescription>
              </Alert>
              
              <div className="text-center py-4">
                <p className="text-gray-600">
                  Our team will review your application and contact you within 2-3 business days.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleDownload} className="w-full sm:w-auto">
                <Download className="mr-2" size={16} />
                Download Receipt
              </Button>
              <Button onClick={() => navigate('/')} variant="outline" className="w-full sm:w-auto">
                <Home className="mr-2" size={16} />
                Return to Home
              </Button>
            </CardFooter>
          </>
        );
        
      case 'contact':
        return (
          <>
            <CardHeader>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center">Message Sent Successfully!</CardTitle>
              <CardDescription className="text-center pt-2">
                Thank you for contacting us. We have received your message and will get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <p className="text-gray-600">
                  Our team will respond to your inquiry within 24-48 hours.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={() => navigate('/')} className="w-full sm:w-auto">
                <Home className="mr-2" size={16} />
                Return to Home
              </Button>
            </CardFooter>
          </>
        );
        
      case 'newsletter':
        return (
          <>
            <CardHeader>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center">Subscription Confirmed!</CardTitle>
              <CardDescription className="text-center pt-2">
                You have successfully subscribed to our newsletter.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <p className="text-gray-600">
                  Look out for our next newsletter in your inbox. You can unsubscribe at any time.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={() => navigate('/')} className="w-full sm:w-auto">
                <Home className="mr-2" size={16} />
                Return to Home
              </Button>
            </CardFooter>
          </>
        );
        
      default:
        return (
          <>
            <CardHeader>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center">Success!</CardTitle>
              <CardDescription className="text-center pt-2">
                Your request has been processed successfully.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <p className="text-gray-600">
                  Thank you for your submission.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={() => navigate('/')} className="w-full sm:w-auto">
                <Home className="mr-2" size={16} />
                Return to Home
              </Button>
            </CardFooter>
          </>
        );
    }
  };

  return (
    <Layout>
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            {renderContent()}
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Success;