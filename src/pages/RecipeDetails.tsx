import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Recipe } from '../components/Recipe';

export const RecipeDetails = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Recipe />
      </main>
      <Footer />
    </>
  );
};
