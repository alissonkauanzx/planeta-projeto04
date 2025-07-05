export function Label({ children, className = '', ...props }) {
  return <label className={`block mb-1 font-medium text-slate-200 ${className}`} {...props}>{children}</label>;
}
