import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  {
    href: "https://www.facebook.com/steeltechltd",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://twitter.com/steeltechltd1",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/steeltechltd/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/8742169",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@steeltechltd1",
    icon: Youtube,
    label: "YouTube",
  },
];

const contactItems = [
  {
    icon: MapPin,
    content: (
      <a
        href="https://www.google.com/maps/place/Steeltech+Industries+Ltd-+Head+Office/@23.7933149,90.4012929,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c7ba2af41493:0x5ffd5a4522c182ae!8m2!3d23.7933149!4d90.4034816"
        target="_blank"
        rel="noopener noreferrer"
        className="leading-7 hover:text-white transition-colors"
      >
        Rangs Paramount, Plot 11, Road 17
        <br />
        Banani C/A, Dhaka 1213
      </a>
    ),
  },
  {
    icon: Phone,
    content: (
      <a
        href="tel:+8802222297927"
        className="hover:text-white transition-colors"
      >
        +8802222297927
      </a>
    ),
  },
  {
    icon: Printer,
    content: <span>880-2222285489</span>,
  },
  {
    icon: Mail,
    content: (
      <a
        href="mailto:info@steeltech-bd.com"
        className="hover:text-white transition-colors"
      >
        info@steeltech-bd.com
      </a>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      id="contact-us"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(237,140,47,0.08),_transparent_25%),linear-gradient(180deg,#04122a_0%,#061833_100%)] text-white pt-10 pb-6 px-4 sm:px-6 md:px-8"
    >
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <div className="h-full rounded-[20px] sm:rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-4 sm:p-5 flex flex-col">
              {/* Header */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold tracking-wide text-[#ed8c2f]">
                  Steeltech Industries Ltd.
                </h2>

                <p className="mt-3 text-sm sm:text-[15px] md:text-base leading-7 text-gray-300">
                  Premium stainless steel solutions for industrial and
                  construction sectors across Bangladesh.
                </p>

                {/* Social */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-6">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/90 transition-all duration-300 hover:bg-[#ed8c2f]"
                    >
                      <Icon size={16} className="sm:size-[18px]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="mt-6 sm:mt-7 flex flex-col gap-3 sm:gap-4">
                {contactItems.map(({ icon: Icon, content }, index) => (
                  <div
                    key={index}
                    className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-3 sm:py-4 text-gray-300 transition hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 ">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#ed8c2f]" />
                      <div className="text-sm sm:text-base leading-6 sm:leading-7">
                        {content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="lg:col-span-6">
            <div className="h-full rounded-[20px] sm:rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-4 sm:p-5 flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-4 sm:mb-5">
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-[#ed8c2f]">
                  FIND US HERE
                </h2>

                <a
                  href="https://www.google.com/maps/place/Steeltech+Industries+Ltd-+Head+Office/@23.7933149,90.4012929,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#ed8c2f] hover:text-white"
                >
                  Open in Google Maps
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="relative flex-1 min-h-[260px] sm:min-h-[300px] md:min-h-[360px] overflow-hidden rounded-[16px] sm:rounded-[20px] border border-white/10 bg-[#0a1c38]">
                <iframe
                  src="https://www.google.com/maps?q=23.7933149,90.4034816&z=17&output=embed"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-[#04122a]/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 sm:mt-8 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-gray-400">
          <p>© 2026 Steeltech Industries Ltd. All rights reserved.</p>
          <p>
            Developed by{" "}
            <span className="text-[#ed8c2f] font-semibold">Ongshak</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
