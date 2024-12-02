import React, { useState } from 'react';
import { UserCircle, Building2, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const App = () => {
  const [userType, setUserType] = useState('jobseeker'); // 'jobseeker' or 'recruiter'
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginForm = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600">Login to your {userType} account</p>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setUserType('jobseeker')}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              userType === 'jobseeker' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            <UserCircle size={20} />
            Job Seeker
          </button>
          <button
            onClick={() => setUserType('recruiter')}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              userType === 'recruiter' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            <Building2 size={20} />
            Recruiter
          </button>
        </div>

        <form className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
            }}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={() => setIsLogin(false)}
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );

  const SignUpForm = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-600">Sign up as a {userType}</p>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setUserType('jobseeker')}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              userType === 'jobseeker' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            <UserCircle size={20} />
            Job Seeker
          </button>
          <button
            onClick={() => setUserType('recruiter')}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              userType === 'recruiter' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            <Building2 size={20} />
            Recruiter
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          {userType === 'recruiter' && (
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full pr-10 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
            }}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => setIsLogin(true)}
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );

  const MainPage = () => {
    const JobSeekerDashboard = () => (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Welcome, Job Seeker!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Your Profile</h3>
            <div className="space-y-2">
              <p>Complete your CV</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Applied Jobs</h3>
            <p className="text-3xl font-bold text-blue-500">12</p>
            <p className="text-gray-600">Applications</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Saved Jobs</h3>
            <p className="text-3xl font-bold text-blue-500">5</p>
            <p className="text-gray-600">Bookmarks</p>
          </div>
        </div>
      </div>
    );

    const RecruiterDashboard = () => (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Welcome, Recruiter!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Active Jobs</h3>
            <p className="text-3xl font-bold text-blue-500">8</p>
            <p className="text-gray-600">Posted Positions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Applications</h3>
            <p className="text-3xl font-bold text-blue-500">45</p>
            <p className="text-gray-600">Candidates</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Shortlisted</h3>
            <p className="text-3xl font-bold text-blue-500">15</p>
            <p className="text-gray-600">Candidates</p>
          </div>
        </div>
      </div>
    );

    return (
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-blue-500">CV Hunt</h1>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
        {userType === 'jobseeker' ? <JobSeekerDashboard /> : <RecruiterDashboard />}
      </div>
    );
  };

  return isLoggedIn ? (
    <MainPage />
  ) : isLogin ? (
    <LoginForm />
  ) : (
    <SignUpForm />
  );
};

export default App;