import React from 'react';

export const Textarea = React.forwardRef(
  ({ className = '', ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed resize-none ${className}`}
      {...props}
    />
  )
);

Textarea.displayName = 'Textarea';
