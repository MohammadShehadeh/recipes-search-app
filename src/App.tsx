import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Recipe } from './components/Recipe';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="recipe/:id" element={<Recipe />} />
            <Route path="*" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

export default App;
