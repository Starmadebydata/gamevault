export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()} GameVault. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 