// components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t-2 border-nu-gold/30 bg-nu-blue">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-3">
            <p className="text-xl font-bold text-white">BulldogEx Shop</p>
            <p className="text-sm text-blue-200 leading-relaxed">
              National University campus essentials delivered with simplicity and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-blue-200 transition hover:text-nu-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-blue-200 transition hover:text-nu-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-blue-200 transition hover:text-nu-gold">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold mb-4">
              Account
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/auth/signin" className="text-sm text-blue-200 transition hover:text-nu-gold">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/auth/signup" className="text-sm text-blue-200 transition hover:text-nu-gold">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold mb-4">
              Campus Pickup
            </h3>
            <p className="text-sm text-blue-200 leading-relaxed">
              Monday - Friday: 9AM - 5PM<br />
              Student Union Building<br />
              National University<br />
              contact@bulldogex.shop
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-blue-700 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-300">
            © {currentYear} BulldogEx Shop. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/products" className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-300 transition hover:text-nu-gold">
              Products
            </Link>
            <Link to="/cart" className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-300 transition hover:text-nu-gold">
              Cart
            </Link>
            <Link to="/auth/signin" className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-300 transition hover:text-nu-gold">
              Pickup
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;