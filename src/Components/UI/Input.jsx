import { useId } from 'react';

const Input = ({
  label,
  error,
  helper,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = true,
  className = '',
  id,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-slate-400" strokeWidth={1.75} />
          </div>
        )}
        <input
          id={inputId}
          className={`
            block w-full
            bg-white dark:bg-slate-800
            border border-slate-300 dark:border-slate-600
            rounded-lg
            px-3 py-2.5
            text-slate-900 dark:text-white
            placeholder:text-slate-400
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
            transition-all duration-200
            ${Icon && iconPosition === 'left' ? 'pl-10' : ''}
            ${Icon && iconPosition === 'right' ? 'pr-10' : ''}
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
          `}
          {...props}
        />
        {Icon && iconPosition === 'right' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-slate-400" strokeWidth={1.75} />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
      {helper && !error && (
        <p className="mt-1 text-sm text-slate-500">{helper}</p>
      )}
    </div>
  );
};

export default Input;
