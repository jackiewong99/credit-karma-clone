import './globals.css';

export const metadata = {
  title: 'Free Credit Scores - Credit Karma',
  description: 'A clone of the Credit Karma landing page built on Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
