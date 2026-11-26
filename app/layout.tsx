import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rishav Agrawal | Data Science & AI Portfolio',
  description:
    'Portfolio of Rishav Agrawal - Aspiring Data Scientist, Machine Learning Practitioner, and DSA Learner specializing in Predictive Analytics and RAG AI Systems.',
  keywords: [
    'Rishav Agrawal',
    'Data Science',
    'Machine Learning',
    'RAG',
    'Generative AI',
    'DSA',
    'Portfolio',
    'Next.js',
  ],
  authors: [{ name: 'Rishav Agrawal' }],
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
