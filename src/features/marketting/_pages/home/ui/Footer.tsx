import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        
        {/* Contact CTA Banner */}
        <div className="bg-orange-500 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between mb-20 shadow-xl">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Ready to start your next project?</h2>
            <p className="text-orange-100 font-medium">Get in touch with our experts for a custom quote.</p>
          </div>
          <button className="mt-6 md:mt-0 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition whitespace-nowrap shadow-md">
            Contact Us Today
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-6 text-white">STEELTECH</h2>
            <p className="text-gray-400 mb-6">Your one-stop destination for premium manufacturing and industrial steel solutions.</p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer"><Facebook size={18} /></div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer"><Twitter size={18} /></div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer"><Linkedin size={18} /></div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-500">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {['About Us', 'Products', 'Manufacturing', 'Gallery', 'Career'].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-white transition">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-500">Information</h3>
            <ul className="space-y-3 text-gray-400">
              {['Certifications', 'Clients', 'News & Events', 'Privacy Policy', 'Terms of Service'].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-white transition">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-500">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 w-5 h-5 flex-shrink-0 mt-1" />
                <span>123 Industrial Area, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-500 w-5 h-5" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-500 w-5 h-5" />
                <span>info@steeltech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Steeltech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


