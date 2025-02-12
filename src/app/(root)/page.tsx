import Header from "@/components/Header";
import HeroSection from "./_components/hero";
import { testimonials } from "@/data";
import FAQ from "./_components/Faq";
import Link from "next/link";
import Pricing from "./_components/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen space-y-4 px-1">
      <Header />
      <HeroSection />

      {/* Features Section */}
      <div className="bg-[#0B0E14]/50 backdrop-blur-sm border-y border-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>

          {/* Section Title */}
          <div className="relative text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Powerful Code Editor Features
            </h2>
            <p className="text-gray-400 mt-2">
              Enhance your coding experience with these cutting-edge tools.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-800 hover:border-blue-500 bg-[#0B0E14]/50 backdrop-blur-sm transition-all">
              <div className="text-blue-400 text-2xl mb-4">⌨️</div>
              <h3 className="text-xl font-semibold mb-2">
                Multi-Language Support
              </h3>
              <p className="text-gray-400">
                Write code in JavaScript, Python, Java, C++, and more with
                syntax highlighting and autocompletion.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-800 hover:border-blue-500 bg-[#0B0E14]/50 backdrop-blur-sm transition-all">
              <div className="text-blue-400 text-2xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">
                Instant Code Execution
              </h3>
              <p className="text-gray-400">
                Run your code directly in the browser and see results in
                real-time.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-800 hover:border-blue-500 bg-[#0B0E14]/50 backdrop-blur-sm transition-all">
              <div className="text-blue-400 text-2xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">
                Community Collaboration
              </h3>
              <p className="text-gray-400">
                Discover, comment, and star code snippets shared by developers
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400">10k+</div>
            <div className="text-gray-400 mt-2">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">50k+</div>
            <div className="text-gray-400 mt-2">Code Snippets</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">6</div>
            <div className="text-gray-400 mt-2">Languages</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">99.9%</div>
            <div className="text-gray-400 mt-2">Uptime</div>
          </div>
        </div>
      </div>

      <Pricing />

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What Developers Say
          </h2>
          <p className="text-gray-400 mt-2">
            Hear from developers who use our platform every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-lg border border-gray-800 hover:border-blue-500 bg-[#0B0E14]/50 backdrop-blur-sm transition-all"
            >
              <p className="text-gray-300 mb-4 italic">{`"${testimonial.text}"`}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-gray-700"
                />
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
        <div className="relative text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Coding?</h2>
          <p className="text-gray-400 mb-8">
            Join thousands of developers who trust FlexiCodeStudio for their
            coding needs.
          </p>
          <Link
            href="/code-editor"
            className="px-6 py-3 bg-white rounded-lg text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Journey Today
          </Link>
        </div>
      </div>
    </div>
  );
}
