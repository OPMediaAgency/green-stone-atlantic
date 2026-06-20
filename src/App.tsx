/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';
import { Quote } from './pages/Quote';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CarWash } from './pages/CarWash';
import { HomeP } from './pages/HomeP';
import { Car } from 'lucide-react';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="quote" element={<Quote />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            {/* <Route path="carwash" element={<CarWash />} /> */}
<Route path="landscaping-lawn-care-halifax" element={<HomeP />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
