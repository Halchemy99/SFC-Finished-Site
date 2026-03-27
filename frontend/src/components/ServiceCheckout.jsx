import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useToast } from '../hooks/use-toast';

const ServiceCheckout = ({ service, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email (in production, this would call an API)
    const emailBody = `
New Service Purchase Request

Service: ${service.name}
Price: ${service.price}

Customer Details:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Requirements:
${formData.requirements}
    `;

    console.log('Email to send:', emailBody);
    
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your order.",
    });
    
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
          <CardTitle className="text-2xl">Order {service.name}</CardTitle>
          <CardDescription>
            <div className="mt-4">
              <div className="text-3xl font-bold text-[#22C55E] mb-4">{service.price}</div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Service Scope:</h4>
                <p className="text-sm text-gray-700 mb-3">{service.detailedDescription}</p>
                <ul className="space-y-2">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Ltd"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Requirements <span className="text-red-500">*</span>
              </label>
              <Textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Please describe your specific requirements, timeline, and any additional details..."
                className="resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Be as detailed as possible to help us understand your needs
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>Next Steps:</strong> After submitting, we'll review your requirements and send you a detailed quote with timeline within 24 hours.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCheckout;
