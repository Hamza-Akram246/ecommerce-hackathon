import Link from "next/link";
import Navbar from "../components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";


export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative bg-black">
      
      <Navbar/>
      
      {/* Background Image */}
 <section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
   <div className='container mx-auto px-4'>
     <div className='flex flex-col items-center'>
       {/* Page Title */}
       <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
       Sign In
       </h1>
       {/* Breadcrumb Navigation */}
       <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
         {/* Link to Home */}
         <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
           Home
         </Link>
         {/* Divider */}
         <span className='text-white'>/</span>
         {/* Link to Blog */}
         <Link href="/blog" className='text-[#FF9F0D]'>
         Sign In
         </Link>
       </div>
     </div>
   </div>
 </section>
    </header>

      {/* Signin Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign In
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
                  <FcGoogle className="h-6 mr-2" />
                     Sign in with Google
                </button>
                      {/* Apple Sign In Button */}
                <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <ImAppleinc className="h-6 mr-2" />
                      Sign in with Apple
            </button>
          </div>
        </div>
      </section>
 </div>
);
}