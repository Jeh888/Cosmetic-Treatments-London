import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cosmetic Treatments London | Compare Top Providers | Free Quotes',
  description: 'Compare cosmetic treatment providers across London. Get free quotes for teeth whitening, Invisalign, Botox, dermal fillers, veneers, and more from verified practitioners.',
  keywords: 'cosmetic treatments London, teeth whitening London, Invisalign London, Botox London, dermal fillers London, veneers London, cosmetic dentist London',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
