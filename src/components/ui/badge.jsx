export function Badge({ children, className = '', ...props }) {
  return <span className={`inline-block px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-semibold ${className}`} {...props}>{children}</span>;
}
