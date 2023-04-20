import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import HeroContent from '../components/HeroContent';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>
        <HeroContent />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
