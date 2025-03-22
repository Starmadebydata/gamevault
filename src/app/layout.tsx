import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GameVault - Online Games Platform',
  description: 'Free online gaming platform with various HTML5 browser games',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 