import { FEATURES } from "../pricing/_constants";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import UpgradeButton from "../pricing/_components/UpgradeButton";

async function Pricing() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  const user = await currentUser();

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  });

  if (convexUser?.isPro) return null;

  return (
    <div className="bg-[#0B0E14]/50 backdrop-blur-sm py-20 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white sm:text-5xl mb-8">
          Get Started with Our Pro Plan
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Unlock all premium features and tools to accelerate your development
          process.
        </p>

        {/* Enlarged Pricing Card */}
        <div className="p-10 rounded-xl border border-gray-800 hover:border-blue-500 bg-[#0B0E14]/50 backdrop-blur-sm transition-all max-w-2xl w-full mx-auto">
          <h3 className="text-3xl font-semibold text-white mb-6">
            One-Time Plan
          </h3>
          <p className="text-gray-400 text-lg mb-6">
            For developers who want multiple language support with seamless code
            execution.
          </p>
          <div className="text-5xl font-semibold text-blue-400 mb-6">₹999</div>

          <h4 className="text-2xl font-semibold text-white mt-8 mb-6">
            Included Features
          </h4>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-400 mb-8">
            {/* Development */}
            <div>
              <h5 className="font-semibold text-blue-500 text-lg">
                Development
              </h5>
              <ul>
                {FEATURES.development.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <span className="text-blue-400 mr-3 text-xl">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaboration */}
            <div>
              <h5 className="font-semibold text-blue-500 text-lg">
                Collaboration
              </h5>
              <ul>
                {FEATURES.collaboration.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <span className="text-blue-400 mr-3 text-xl">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Deployment */}
            <div>
              <h5 className="font-semibold text-blue-500 text-lg">
                Deployment
              </h5>
              <ul>
                {FEATURES.deployment.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <span className="text-blue-400 mr-3 text-xl">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="inline-block">
            <UpgradeButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
