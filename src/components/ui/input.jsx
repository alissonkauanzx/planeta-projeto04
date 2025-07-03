export function Input({ className = '', ...props }) {
  return <input className={`px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white ${className}`} {...props} />;
}
