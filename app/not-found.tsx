// app/not-found.tsx
'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-700">
          Oops! The page you are looking for does not exist.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-800"
          >
            <ArrowLeft size={18} />
            Go back home
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          If you think this is a mistake, please contact support.
        </p>
      </div>
    </main>
  );
}
