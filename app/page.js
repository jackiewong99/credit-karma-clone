import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import HeroContent from '../components/HeroContent';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroContent />
      </main>
    </main>
  );
}
