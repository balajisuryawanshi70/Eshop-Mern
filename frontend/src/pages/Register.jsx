import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        alert('Registration Successful! Please check your email for the Welcome OTP.');
        login(data);
        navigate('/');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-400 py-8 px-8 text-center">
          <img
            src="/ShopNestLogo.png"
            alt="Eshop-MERN"
            className="w-20 h-20 rounded-2xl mx-auto bg-white p-2 shadow-lg"
          />

          <h1 className="text-3xl font-bold text-white mt-5">
            Create Account
          </h1>

          <p className="text-orange-100 mt-2">
            Join Eshop-MERN and start shopping today.
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a strong password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>

            {/* Password Tips */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-sm text-orange-700">
                Password should contain at least 8 characters for better security.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold text-lg transition duration-300 shadow-lg"
            >
              Create Account
            </button>

          </form>

          {/* Login Link */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-orange-500 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

          {/* Terms */}
          <p className="text-center text-xs text-gray-500 mt-6 leading-6">
            By creating an account, you agree to our{" "}
            <Link
              to="/terms"
              className="text-orange-500 hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-orange-500 hover:underline"
            >
              Privacy Policy
            </Link>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;
