"use client";
import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

// Define the structure for the footer links
const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Careers", href: "#careers" },
  { name: "Blog", href: "#blog" },
  { name: "Our Team", href: "#team" },
];

const serviceLinks = [
  { name: "Web Development", href: "#web-dev" },
  { name: "Mobile Apps", href: "#mobile-apps" },
  { name: "Cloud Services", href: "#cloud" },
  { name: "Digital Marketing", href: "#digital" },
];

// Reusable social media links (use actual URLs in a real project)
const socialLinks = [
  { Icon: Facebook, href: "https://facebook.com/shraddha" },
  { Icon: Twitter, href: "https://twitter.com/shraddha" },
  { Icon: Linkedin, href: "https://linkedin.com/company/shraddha" },
  { Icon: Instagram, href: "https://instagram.com/shraddha" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Column 1: Logo and Company Description */}
          <div className="col-span-2 md:col-span-2">
            {/* Logo: Matches the Navbar structure */}
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo1.png" alt="Shraddha Logo S" className="w-30 h-8" />
             
            </div>
            <p className="text-sm">
              Delivering innovative software solutions that drive business growth and technological excellence.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ Icon, href }, index) => (
                <a 
                  key={index} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-orange-500" />
                <span>123 Tech Park Ave, Suite 400, Silicon City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-orange-500" />
                <a href="tel:+1234567890" className="hover:text-orange-500">(123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-orange-500" />
                <a href="mailto:info@shraddha.com" className="hover:text-orange-500">info@shraddha.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Divider and Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-300 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shraddha. All rights reserved. | 
            <a href="#privacy" className="ml-1 hover:text-orange-500 transition-colors">Privacy Policy</a> |
            <a href="#terms" className="ml-1 hover:text-orange-500 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}