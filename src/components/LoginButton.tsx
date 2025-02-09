import { SignInButton } from "@clerk/nextjs";
import { User } from "lucide-react";

function LoginButton() {
  return (
    <SignInButton>
      <button
        className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
              border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
      >
        <User className="w-4 h-4 transition-transform" />
        <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
          Sign In
        </span>
      </button>
    </SignInButton>
  );
}
export default LoginButton;
