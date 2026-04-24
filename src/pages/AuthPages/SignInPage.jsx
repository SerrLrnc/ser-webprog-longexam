// src/pages/AuthPages/SignInPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-nu-blue focus:ring-2 focus:ring-nu-blue/20';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - any input works
    if (email.trim() !== '' && password.trim() !== '') {
      // Store user info in localStorage (optional)
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      }
      // Redirect to home page
      navigate('/');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <>
      <div className="text-center mb-6">
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-nu-blue flex items-center justify-center">
          <span className="text-2xl font-bold text-nu-gold">NU</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-nu-blue sm:text-4xl">Welcome Back!</h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Sign in to access your BulldogEx account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            className={inputClasses}
            required
          />
          <p className="mt-2 text-xs leading-5 text-gray-500">
            Any email and password will work (demo mode)
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 accent-nu-blue" 
            />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-nu-blue transition hover:text-nu-gold">
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Sign In →
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/auth/signup" className="font-semibold text-nu-blue transition hover:text-nu-gold">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;