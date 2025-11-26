'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const DEFAULT_CONTACT = {
  title: 'Contact Our Compressor Experts',
  subtitle:
    'Get professional support for your industrial compressor needs. Our certified technicians are ready to help.',
  formTitle: 'Request Service',
  formDescription: "Fill out the form below and we'll get back to you within 24 hours.",
  nameLabel: 'Full Name',
  emailLabel: 'Email Address',
  phoneLabel: 'Phone Number',
  companyLabel: 'Company Name',
  messageLabel: 'Describe Your Compressor Issue',
  submitText: 'Send Message',
  addressTitle: 'Service Center',
  address: '1234 Industrial Blvd, Manufacturing District, TX 75201',
  phoneTitle: 'Emergency Service',
  phone: '(555) 123-COMP',
  emailTitle: 'General Inquiries',
  email: 'service@compressorpro.com',
  hoursTitle: 'Service Hours',
  hours: '24/7 Emergency • Mon-Fri 7AM-6PM Regular',
  successMessage: "Thank you! We'll contact you within 24 hours.",
  namePlaceholder: 'Enter your full name',
  emailPlaceholder: 'your.email@company.com',
  phonePlaceholder: '(555) 123-4567',
  companyPlaceholder: 'Your Company Name',
  messagePlaceholder: 'Describe your compressor model, issue, and urgency level...',
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="bg-card text-card-foreground">
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">
                  <span data-editable="formTitle">{config.formTitle}</span>
                </h3>
                <p className="text-muted-foreground">
                  <span data-editable="formDescription">{config.formDescription}</span>
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <p className="text-lg font-medium text-primary">
                    <span data-editable="successMessage">{config.successMessage}</span>
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-form-id="6927901fcacb28370c13e90e"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <span data-editable="nameLabel">{config.nameLabel}</span>
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={e => handleInputChange('name', e.target.value)}
                        placeholder={config.namePlaceholder}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <span data-editable="emailLabel">{config.emailLabel}</span>
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={e => handleInputChange('email', e.target.value)}
                        placeholder={config.emailPlaceholder}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <span data-editable="phoneLabel">{config.phoneLabel}</span>
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={e => handleInputChange('phone', e.target.value)}
                        placeholder={config.phonePlaceholder}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <span data-editable="companyLabel">{config.companyLabel}</span>
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={e => handleInputChange('company', e.target.value)}
                        placeholder={config.companyPlaceholder}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <span data-editable="messageLabel">{config.messageLabel}</span>
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={e => handleInputChange('message', e.target.value)}
                      placeholder={config.messagePlaceholder}
                      rows={5}
                      required
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        <span data-editable="submitText">{config.submitText}</span>
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">
                      <span data-editable="addressTitle">{config.addressTitle}</span>
                    </h4>
                    <p className="opacity-90">
                      <span data-editable="address">{config.address}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold mb-2">
                      <span data-editable="phoneTitle">{config.phoneTitle}</span>
                    </h4>
                    <p className="text-muted-foreground">
                      <span data-editable="phone">{config.phone}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold mb-2">
                      <span data-editable="emailTitle">{config.emailTitle}</span>
                    </h4>
                    <p className="text-muted-foreground">
                      <span data-editable="email">{config.email}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">
                      <span data-editable="hoursTitle">{config.hoursTitle}</span>
                    </h4>
                    <p className="opacity-90">
                      <span data-editable="hours">{config.hours}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
