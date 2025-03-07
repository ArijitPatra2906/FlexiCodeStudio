import HeaderProfileBtn from '@/app/(root)/_components/HeaderProfileBtn'
import { APP_NAME } from '@/lib/constants'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { Blocks, Code2, Codesandbox, MessageCircle, Share2 } from 'lucide-react'
import Link from 'next/link'

function Header() {
  return (
    <div className='sticky top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-xl backdrop-saturate-150'>
      <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5' />
      <div className='max-w-7xl mx-auto px-1 md:px-4'>
        <div className='relative h-16 flex items-center justify-between'>
          <div className='flex items-center gap-8'>
            {/* Logo */}
            <Link href='/' className='flex items-center gap-3 group relative'>
              {/* logo hover effect */}
              <div
                className='absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 
              group-hover:opacity-100 transition-all duration-500 blur-xl'
              />

              {/* Logo */}
              <div className='relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all'>
                <Blocks className='w-6 h-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500' />
              </div>

              <div className='relative'>
                <span
                  className='block text-lg font-semibold bg-gradient-to-r
                 from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text'
                >
                  {APP_NAME}
                </span>
                <span className='block text-xs text-blue-400/60 font-medium'>
                  Interactive Code Editor
                </span>
              </div>
            </Link>
          </div>

          {/* right rection */}
          <div className='flex items-center mt-2 gap-1 md:gap-4'>
            <SignedIn>
              <Link href='/code-editor'>
                <button
                  className='hidden md:flex relative group items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
              border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden'
                >
                  <Codesandbox className='w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform' />
                  <span className='text-sm font-medium relative z-10 group-hover:text-white transition-colors'>
                    Code Editor
                  </span>
                </button>
                <button
                  className='md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 active:bg-gray-600 text-gray-300 transition-all duration-200 shadow-md'
                  aria-label='Open Code Editor'
                >
                  <Codesandbox className='h-5 w-5 text-gray-300' />
                </button>
              </Link>
            </SignedIn>

            <Link href='/community'>
              <button
                className='hidden relative group md:flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
              border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden'
              >
                <MessageCircle className='w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform' />
                <span className='text-sm font-medium relative z-10 group-hover:text-white transition-colors'>
                  Community
                </span>
              </button>
              <button
                className='md:hidden p-2 rounded-lg bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-gray-200 transition-all duration-200 shadow-md'
                aria-label='Open Snippets'
              >
                <MessageCircle className='h-5 w-5 text-gray-200' />
              </button>
            </Link>

            {/* profile button */}
            <HeaderProfileBtn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
