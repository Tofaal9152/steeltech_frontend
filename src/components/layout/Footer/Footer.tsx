import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-gray-900 text-white pt-8 pb-8">
      <div className="px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide mb-6 text-[#ed8c2f]">STEELTECH</h2>

            <p className="text-gray-400 mb-6">
              Steeltech Industries Ltd. manufactures high quality stainless
              steel pipes, tubes, sheets and bars for industrial and
              construction sectors across Bangladesh.
            </p>

            {/* Social */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/steeltechltd"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ed8c2f] transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://twitter.com/steeltechltd1"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ed8c2f] transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://www.instagram.com/steeltechltd/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ed8c2f] transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/8742169"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ed8c2f] transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#ed8c2f]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <a href="/manufacturing" className="hover:text-white">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="/clients" className="hover:text-white">
                  Clients
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#ed8c2f]">
              Information
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/certificates" className="hover:text-white">
                  Certificates
                </a>
              </li>
              <li>
                <a href="/quality" className="hover:text-white">
                  Quality
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-white">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#ed8c2f]">
              Head Office
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#ed8c2f] w-5 h-5 mt-1" />
                <span>
                  Rangs Paramount, Plot 11, Road 17 Banani C/A, Dhaka 1213
                  (Behind Serena Hotel)
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-[#ed8c2f] w-5 h-5" />
                <span>+8802222297927</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-[#ed8c2f] w-5 h-5" />
                <span>info@steeltech-bd.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t flex items-center justify-between border-gray-800 pt-4 text-center text-gray-500 text-sm">
          <p>© 2026 KHAR. All rights reserved.</p>
          <p className="mt-2">
            Developed by{" "}
            <span className="text-[#ed8c2f] font-semibold">Ongshak</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
