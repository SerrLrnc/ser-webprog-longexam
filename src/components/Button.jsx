// components/Button.jsx
import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-nu-blue text-white hover:bg-nu-dark-blue border-nu-blue',
  secondary: 'bg-white text-nu-blue hover:bg-nu-gold hover:text-nu-blue border-nu-blue',
  gold: 'bg-nu-gold text-nu-blue hover:bg-amber-400 border-nu-gold',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition duration-200',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;