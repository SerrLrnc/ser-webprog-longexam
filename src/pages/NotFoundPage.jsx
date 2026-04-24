// pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Error 404
          </p>
          <h1 className="text-7xl font-bold leading-tight text-zinc-900 sm:text-8xl">
            Page Not Found
          </h1>
          <div className="my-6 h-px w-16 bg-zinc-300 mx-auto" />
          <p className="mt-4 text-lg leading-7 text-zinc-600 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved to a new location.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button to="/">Back Home</Button>
            <Button to="/products" variant="primary">Browse Products</Button>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Quick Navigation
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Where would you like to go?</h2>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/" className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 transition hover:bg-zinc-200">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-50 text-lg font-bold">
                  🏠
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 group-hover:underline">Homepage</h3>
                  <p className="text-sm text-zinc-600">Return to the main page</p>
                </div>
              </div>
            </Link>
            
            <Link to="/products" className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 transition hover:bg-zinc-200">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-50 text-lg font-bold">
                  🛍️
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 group-hover:underline">Products</h3>
                  <p className="text-sm text-zinc-600">Browse all available items</p>
                </div>
              </div>
            </Link>

            <Link to="/about" className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 transition hover:bg-zinc-200">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-50 text-lg font-bold">
                  📖
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 group-hover:underline">About Us</h3>
                  <p className="text-sm text-zinc-600">Learn more about our store</p>
                </div>
              </div>
            </Link>

            <Link to="/auth/signin" className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 transition hover:bg-zinc-200">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-50 text-lg font-bold">
                  🔑
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 group-hover:underline">Sign In</h3>
                  <p className="text-sm text-zinc-600">Access your account</p>
                </div>
              </div>
            </Link>

            <Link to="/auth/signup" className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 transition hover:bg-zinc-200">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-50 text-lg font-bold">
                  ✨
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 group-hover:underline">Sign Up</h3>
                  <p className="text-sm text-zinc-600">Create a new account</p>
                </div>
              </div>
            </Link>

            <Link to="/products" className="group rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 transition hover:bg-zinc-200">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-50 text-lg font-bold">
                  🛒
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 group-hover:underline">Shop Now</h3>
                  <p className="text-sm text-zinc-600">Start shopping today</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;