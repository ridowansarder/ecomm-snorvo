// app/loading.tsx
'use client';

export default function Loading() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />

        {/* Message */}
        <p className="text-sm text-gray-600">Loading, please wait...</p>
      </div>
    </main>
  );
}