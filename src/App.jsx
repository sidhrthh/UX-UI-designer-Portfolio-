import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

// Lazy load Dashboard component
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Services = lazy(() => import('./Pages/Services'));
const Portfolio = lazy(() => import('./Pages/Portfolio'));


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Suspense fallback="Loading..."><Home /></Suspense>} />
            <Route path="/about" element={<Suspense fallback="Loading..."><About /></Suspense>} />
            <Route path="/services" element={<Suspense fallback="Loading..."><Services /></Suspense>} />
            <Route path="/portfolio" element={<Suspense fallback="Loading..."><Portfolio /></Suspense>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}


export default App;
