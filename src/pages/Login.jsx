import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // For Google icon
import { FaCar } from "react-icons/fa"; // For Car icon
import { loginUser } from "../services/Auth"; // Assuming this is where the login function is defined

const LoginPage = () => {
  const [username, setUsername] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error message
  const [loading, setLoading] = useState(false); // State for loading state

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true while waiting for API response
    setError(""); // Reset previous errors

    try {
      const result = await loginUser(username, password); // Call login API
      console.log("Login successful:", result); // Handle success (e.g., save token)
      // You can store the token in localStorage, Redux, or redirect to another page
    } catch (err) {
      setError("Login failed. Please check your credentials."); // Set error if login fails
    } finally {
      setLoading(false); // Set loading to false once the request completes
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center space-x-2">
          <FaCar className="text-blue-600 text-3xl" />
          <h1 className="text-3xl font-bold text-gray-800">Automobile Portal</h1>
        </div>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update state on input change
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on input change
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            disabled={loading} // Disable the button when loading
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error if any */}
        <div className="flex justify-center pt-4">
          <button
            type="button"
            className="flex items-center px-4 py-2 space-x-2 border rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 focus:outline-none"
          >
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
