import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout & Common
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { VirundhalayaaCaseStudy } from './pages/VirundhalayaaCaseStudy';
import { NexovateCaseStudy } from './pages/NexovateCaseStudy';
import { BillingSoftwareCaseStudy } from './pages/BillingSoftwareCaseStudy';
import { SmallDesignWorksCaseStudy } from './pages/SmallDesignWorksCaseStudy';
import { ProductsPage } from './pages/ProductsPage';
import { IdentityProductPage } from './pages/IdentityProductPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="custom-cursor-active min-h-screen bg-[#F7F6F1] text-[#0B1428] flex flex-col font-sans selection:bg-[#315BFF] selection:text-white">
        {/* Follower Cursor on Desktop */}
        <CustomCursor />

        {/* Navigation Header */}
        <Navbar />

        {/* Dynamic Page Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/virundhalayaa" element={<VirundhalayaaCaseStudy />} />
            <Route path="/work/nexovate" element={<NexovateCaseStudy />} />
            <Route path="/work/billing-software" element={<BillingSoftwareCaseStudy />} />
            <Route path="/work/small-design-works" element={<SmallDesignWorksCaseStudy />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/identity" element={<IdentityProductPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

