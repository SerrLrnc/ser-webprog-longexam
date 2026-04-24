import { Outlet } from 'react-router-dom';
import NatUImage from '../assets/img/NatU.jpg';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="relative hidden lg:block">
          <img 
            src={NatUImage}
            alt="NU Campus" 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: '0.7' }}  // ← Lower opacity here
          />
          
          {/* Dark overlay (optional - can remove or keep) */}
          <div className="absolute inset-0 bg-gradient-to-br from-nu-blue/50 to-nu-dark-blue/60" />
          
          {/* Content on top of image - Now more visible */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center p-12 text-center text-white">
            <div className="mb-8 rounded-full border-4 border-nu-gold bg-white/10 p-4 backdrop-blur-sm">
              <span className="text-5xl font-bold text-nu-blue">NU</span>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <main className="flex items-center bg-white/50 backdrop-blur-sm px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;