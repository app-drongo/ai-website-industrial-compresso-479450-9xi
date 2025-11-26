'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Wrench, Settings, Phone } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  logo: 'CompressorPro',
  tagline: 'Industrial Compressor Solutions',
  navItems: [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  ctaText: 'Get Quote',
  ctaHref: '#contact',
  phoneNumber: '(555) 123-4567',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
    setIsOpen(false);
  };

  return (
    <section
      id="navigation"
      className="bg-background text-foreground border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Settings className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span
                className="text-xl font-bold text-foreground cursor-pointer"
                onClick={() => handleNavClick('#hero')}
                data-editable="logo"
              >
                {config.logo}
              </span>
              <span
                className="text-xs text-muted-foreground hidden sm:block"
                data-editable="tagline"
              >
                {config.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {config.navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-editable-href={`navItems[${idx}].href`}
                data-href={item.href}
              >
                <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Desktop CTA & Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium" data-editable="phoneNumber">
                {config.phoneNumber}
              </span>
            </div>
            <Button
              onClick={handleCTAClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <Wrench className="h-4 w-4 mr-2" />
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden border-border">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card text-card-foreground w-80 sm:w-96">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-card-foreground" data-editable="logo">
                        {config.logo}
                      </span>
                      <span className="text-xs text-muted-foreground" data-editable="tagline">
                        {config.tagline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 py-6">
                  <div className="space-y-4">
                    {config.navItems.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick(item.href)}
                        className="flex items-center w-full text-left py-3 px-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                        data-editable-href={`navItems[${idx}].href`}
                        data-href={item.href}
                      >
                        <span className="font-medium" data-editable={`navItems[${idx}].label`}>
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Footer */}
                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium" data-editable="phoneNumber">
                      {config.phoneNumber}
                    </span>
                  </div>
                  <Button
                    onClick={handleCTAClick}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    data-editable-href="ctaHref"
                    data-href={config.ctaHref}
                  >
                    <Wrench className="h-4 w-4 mr-2" />
                    <span data-editable="ctaText">{config.ctaText}</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </section>
  );
}
