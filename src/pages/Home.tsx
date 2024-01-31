import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Search />
      </main>
      <Footer />
    </>
  );
};
