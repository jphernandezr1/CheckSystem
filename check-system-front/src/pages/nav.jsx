import React from 'react';

export default function Nav() {
  return (
    <nav className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
            <a href="/" className="font-bold text-red-500 text-3xl">SplitMyBill</a>
            <a
                href="/"
                className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
            >
                Create Report
            </a>
        </div>
    </nav>
  );
}