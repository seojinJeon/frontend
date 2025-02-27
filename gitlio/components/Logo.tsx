import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <div className="flex-col justify-center">
      <Link
        href={'/'}
        className="font-bold h-full text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer"
      >
        gitlio
      </Link>
    </div>
  );
}
