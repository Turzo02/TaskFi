const Card = ({ children, className = '', elevated = false }) => {
  return (
    <div 
      className={`
        bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700
        rounded-xl
        ${elevated ? 'shadow-lg dark:shadow-slate-900/50' : 'shadow-sm'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
