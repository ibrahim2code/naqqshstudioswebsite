import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { OfferPage } from '@/pages/OfferPage';
import { GetStartedPage } from '@/pages/GetStartedPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <main className="min-h-screen animate-[pageIn_700ms_cubic-bezier(0.22,1,0.36,1)]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
