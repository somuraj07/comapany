"use client";
import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

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

const socialLinks = [
  { Icon: Facebook, href: "https://facebook.com/shraddha" },
  { Icon: Twitter, href: "https://twitter.com/shraddha" },
  { Icon: Linkedin, href: "https://linkedin.com/company/shraddha" },
  { Icon: Instagram, href: "https://instagram.com/shraddha" },
];

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-700 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-orange-200/20 to-orange-300/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Column 1: Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <img src="/logo1.png" alt="Shraddha Logo" className="w-32 h-auto mb-4" />

            <p className="text-sm text-gray-600 leading-relaxed">
              Delivering innovative software solutions that drive business growth and technological excellence.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow hover:scale-110 hover:bg-[#F54E02] transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-[#F54E02] hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#F54E02] transition-all duration-200 hover:underline underline-offset-4"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#F54E02] transition-all duration-200 hover:underline underline-offset-4"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-3 rounded-xl bg-white shadow hover:shadow-lg transition-all duration-300">
                <MapPin className="w-5 h-5 text-[#F54E02] mt-1" />
                <span className="text-sm leading-relaxed">123 Tech Park Ave, Silicon City</span>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-xl bg-white shadow hover:shadow-lg transition-all duration-300">
                <Phone className="w-5 h-5 text-[#F54E02]" />
                <a href="tel:+1234567890" className="text-sm hover:text-[#F54E02]">(123) 456-7890</a>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-xl bg-white shadow hover:shadow-lg transition-all duration-300">
                <Mail className="w-5 h-5 text-[#F54E02]" />
                <a href="mailto:info@shraddha.com" className="text-sm hover:text-[#F54E02]">info@shraddha.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shraddha. All rights reserved. |
            <a href="#privacy" className="ml-1 hover:text-[#F54E02]">Privacy Policy</a> |
            <a href="#terms" className="ml-1 hover:text-[#F54E02]">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
