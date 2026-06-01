import React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export const Dialog = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;

export const DialogContent = React.forwardRef(
  ({ className = '', children, ...props }, ref) => (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      <RadixDialog.Content
        ref={ref}
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[90vh] w-full max-w-lg rounded-lg bg-gray-950 border border-white/10 p-6 shadow-lg focus-visible:outline-none z-50 ${className}`}
        {...props}
      >
        {children}
        <RadixDialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-gray-950 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  )
);

DialogContent.displayName = RadixDialog.Content.displayName;

export const DialogHeader = ({ className = '', ...props }) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
);

DialogHeader.displayName = 'DialogHeader';

export const DialogTitle = React.forwardRef(
  ({ className = '', ...props }, ref) => (
    <RadixDialog.Title
      ref={ref}
      className={`text-lg font-semibold leading-none tracking-tight text-white ${className}`}
      {...props}
    />
  )
);

DialogTitle.displayName = RadixDialog.Title.displayName;

export const DialogDescription = React.forwardRef(
  ({ className = '', ...props }, ref) => (
    <RadixDialog.Description
      ref={ref}
      className={`text-sm text-gray-400 ${className}`}
      {...props}
    />
  )
);

DialogDescription.displayName = RadixDialog.Description.displayName;
