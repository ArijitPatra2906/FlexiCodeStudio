import {
  Blocks,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Twitter,
} from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="w-full text-center">
          <div className="w-full text-center space-y-4">
            <Link
              href="/"
              className="flex flex-col items-center gap-3 group relative"
            >
              {/* logo hover effect */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 
                group-hover:opacity-100 transition-all duration-500 blur-xl"
              />

              {/* Logo */}
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                <Blocks className="w-6 h-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
              </div>

              <div className="relative">
                <span
                  className="block text-lg font-semibold bg-gradient-to-r
                 from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text"
                >
                  FlexiCodeStudio
                </span>
                <span className="block text-xs text-blue-400/70 font-medium">
                  Interactive Code Editor
                </span>
              </div>
            </Link>
            <p className="text-gray-400">
              A powerful code editor that supports multiple languages and
              seamless code sharing.
            </p>
            <div className="flex w-full items-center justify-center space-x-4">
              {[
                {
                  icon: (
                    <Github className="text-blue-600 hover:text-blue-700" />
                  ),
                  href: "https://github.com/ArijitPatra2906",
                },
                {
                  icon: (
                    <Linkedin className="text-blue-700 hover:text-blue-800" />
                  ),
                  href: "https://www.linkedin.com/in/arijitpatra2906",
                },
                {
                  icon: (
                    <Twitter className="text-blue-500 hover:text-blue-600" />
                  ),
                  href: "https://x.com/arijitpatra2000?t=S_XYgvVLY4MoPMd4MmGJ_w&s=09",
                },

                {
                  icon: (
                    <MessageCircle className="text-green-500 hover:text-green-600" />
                  ),
                  href: "https://wa.me/6291273442",
                },
                {
                  icon: (
                    <Instagram className="text-pink-500 hover:text-pink-600" />
                  ),
                  href: "https://www.instagram.com/arijit_patra29",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="hover:bg-gray-100 p-2 rounded-full transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} FlexiCodeStudio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
