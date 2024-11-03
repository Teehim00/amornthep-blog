import { NavBar} from "../components/NavBar";

import { Footer } from "../components/Footer";

export default function Signup() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign up</h1>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input className="w-full px-3 py-2 border rounded" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input className="w-full px-3 py-2 border rounded" type="text" />
          </div>
          <div classNames="mb-4">
            <label className="block text-gray-700">Email</label>
            <input className="w-full px-3 py-2 border rounded" type="email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="password"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Sign up
          </button>
          <span class="flex items-center justify-center space-x-1">
            <span>Already have an account?</span>
            <p class="text-blue-500 cursor-pointer">Log in</p>
          </span>
        </form>
      </div>
      <Footer />
    </div>
  );
}
