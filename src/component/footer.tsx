import Logo from "../assets/logo-text.png";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] text-[#64748B] mt-20">

      {/* Main Footer */}
      <div className="container mx-auto px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.7fr] gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">

            <img
              src={Logo}
              alt="DevStack"
              className="w-32"
            />

            <p className="text-[#64748B] mt-4 leading-7 max-w-xl">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-[#334155] transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-[#334155] transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-[#334155] transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>


          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-black">
              Product
            </h3>

            <ul className="space-y-3 text-[#64748B]">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>
            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-black">
              Company
            </h3>

            <ul className="space-y-3 text-[#64748B]">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>


          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-black">
              Legal
            </h3>

            <ul className="space-y-3 text-[#64748B]">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-[#e0e3e7]">

        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-sm text-[#64748B] text-center md:text-left">
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-[#64748B]">
            <a
              href="#"
              className="hover:text-white transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Terms
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;