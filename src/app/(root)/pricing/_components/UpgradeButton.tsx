import { Zap } from "lucide-react";
import Link from "next/link";

export default function UpgradeButton() {
  const CHEKOUT_URL = process.env.LEMON_SQUEEZY_URL!;

  return (
    <Link
      href={CHEKOUT_URL}
      className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
              border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
}
