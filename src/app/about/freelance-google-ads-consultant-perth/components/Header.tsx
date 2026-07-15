"use client";
export default function Header() {

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-end">
        <div className="font-bold text-lg tracking-tight uppercase">
          Vince Baker
        </div>
      </nav>
    </header>
  );
}
