// src/components/ImageModal.jsx
import { useEffect } from 'react';

const ImageModal = ({ imageSrc, imageAlt, onClose }) => {
  useEffect(() => {
    // Close modal when pressing Escape key
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Close modal when clicking outside the image
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-5xl w-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-nu-gold transition text-2xl"
          aria-label="Close modal"
        >
          ✕ Close
        </button>
        
        {/* Image */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto rounded-2xl shadow-2xl"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/800x800/003C71/white?text=No+Image";
          }}
        />
        
        {/* Caption */}
        <p className="text-center text-white mt-4 text-sm">
          {imageAlt}
        </p>
      </div>
    </div>
  );
};

export default ImageModal;