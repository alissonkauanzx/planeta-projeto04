export function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-slate-800 rounded-lg shadow ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  return <div className={`p-4 border-b border-slate-700 ${className}`} {...props}>{children}</div>;
}

export function CardTitle({ children, className = '', ...props }) {
  return <h2 className={`text-xl font-bold ${className}`} {...props}>{children}</h2>;
}

export function CardDescription({ children, className = '', ...props }) {
  return <p className={`text-slate-400 ${className}`} {...props}>{children}</p>;
}

export function CardContent({ children, className = '', ...props }) {
  return <div className={`p-4 ${className}`} {...props}>{children}</div>;
}
