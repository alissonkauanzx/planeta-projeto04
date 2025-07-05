export function Avatar({ children, className = '', ...props }) {
  return <div className={`inline-flex items-center justify-center rounded-full bg-slate-700 ${className}`} {...props}>{children}</div>;
}

export function AvatarFallback({ children, className = '', ...props }) {
  return <span className={`text-white font-bold ${className}`} {...props}>{children}</span>;
}
