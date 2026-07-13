import Logo from "../navbar/Logo";
import {
  LuAArrowDown,
  LuCalendar,
  LuFacebook,
  LuGithub,
  LuNewspaper,
  LuYoutube,
} from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="py-16 px-6  border-t border-border">
      <div className="max-w-7xl mx-auto  grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st Part */}
        <div>
          <Logo />

          <p className="mt-6 text-sm text-black dark:text-gray-300 leading-6 font-semibold">
            Condition Terms of Use, Our Features, Services, Guest List, Team
            List and more.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mt-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-black dark:text-gray-300 hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(32,178,166,0.2)] transition-all duration-300 cursor-pointer">
              <LuFacebook />
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-black dark:text-gray-300 hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(32,178,166,0.2)] transition-all duration-300 cursor-pointer">
              <LuYoutube />
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-black dark:text-gray-300 hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(32,178,166,0.2)] transition-all duration-300 cursor-pointer">
              <LuGithub />
            </div>
          </div>
        </div>

        {/* 2nd Part */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-semibold text-black dark:text-gray-300">Address</h1>

          <div className="mt-8 space-y-5">
            <div className="flex items-center space-x-4">
              <LuNewspaper className="w-5 h-5 text-primary" />
              <p className="text-sm text-black dark:text-gray-300">
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>

        {/* 3rd Part */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-semibold text-black dark:text-gray-300">
            More Services
          </h1>

          <div className="mt-8 space-y-3">
            <div className="flex items-center">
              <LuAArrowDown className="w-5 h-5 text-primary mr-2" />
              <p className="text-sm text-black dark:text-gray-300">UI Design</p>
            </div>

            <div className="flex items-center">
              <LuAArrowDown className="w-5 h-5 text-primary mr-2" />
              <p className="text-sm text-black dark:text-gray-300">UX Design</p>
            </div>

            <div className="flex items-center">
              <LuAArrowDown className="w-5 h-5 text-primary mr-2" />
              <p className="text-sm text-black dark:text-gray-300">Web Design</p>
            </div>

            <div className="flex items-center">
              <LuAArrowDown className="w-5 h-5 text-primary mr-2" />
              <p className="text-sm text-black dark:text-gray-300">Web Application</p>
            </div>
          </div>
        </div>

        {/* 4th Part */}
        <div>
          <h1 className="text-lg font-semibold text-black dark:text-gray-300">Newsletter</h1>

          <div className="mt-8">
            <p className="text-sm text-black dark:text-gray-300  leading-6">
              It is a long established fact that a reader will be distracted by
              the readable content.
            </p>

            <div className="mt-5 flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/60"
                alt="newsletter"
                className="w-14 h-14 rounded-lg object-cover"
              />

              <div>
                <div className="flex items-center">
                  <LuCalendar className="text-amber-300 w-5 h-5 mr-2" />
                  <p className="text-sm text-black dark:text-gray-300">
                    25 October, 2026
                  </p>
                </div>

                <h2 className="mt-2 text-black dark:text-gray-300 font-semibold">
                  The Standard Chunk
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="col-span-full border-t border-gray-700 pt-6 mt-8">
          <p className="text-center text-black dark:text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} TaskZen. All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;