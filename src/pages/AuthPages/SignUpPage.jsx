// src/pages/AuthPages/SignUpPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-nu-blue focus:ring-2 focus:ring-nu-blue/20';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - any input works
    if (firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      // Store user info in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', `${firstName} ${lastName}`);
      localStorage.setItem('userEmail', email);
      // Redirect to sign in page after sign up
      alert('Account created successfully! Please sign in.');
      navigate('/auth/signin');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
      <div className="text-center mb-6">
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-nu-blue flex items-center justify-center">
          <span className="text-2xl font-bold text-nu-gold">NU</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-nu-blue sm:text-4xl">Create Account</h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Join BulldogEx and start shopping today!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="signup-email"
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
          <label htmlFor="signup-password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            autoComplete="new-password"
            className={inputClasses}
            required
          />
          <p className="mt-2 text-xs leading-5 text-gray-500">
            Any email and password will work (demo mode)
          </p>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Create Account →
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or sign up with</span>
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
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-nu-blue transition hover:text-nu-gold">
          Sign In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;