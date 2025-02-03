// src/app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to SendFIL!</h1>
      <p className="mb-6">Your one-stop solution for batch Filecoin transactions.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Connect Wallet
      </button>
    </main>
  );
}