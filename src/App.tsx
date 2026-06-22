import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { SpeedInsights } from "@vercel/speed-insights/react";
import { LazyMotion, domAnimation, AnimatePresence } from "motion/react";
import { Toaster } from './components/ui/sonner';

// Lazy pages
const Portal = lazy(() => import('./pages/Portal'));
const DevRealm = lazy(() => import('./pages/DevRealm'));
const DjRealm = lazy(() => import('./pages/DjRealm'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={
        <div className="flex min-h-screen items-center justify-center text-white">Loading...</div>
      }>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Portal />} />
          <Route path="/dev" element={<DevRealm />} />
          <Route path="/dj" element={<DjRealm />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <Router>
      <SpeedInsights />
      <LazyMotion features={domAnimation}>
        <AnimatedRoutes />
      </LazyMotion>
      <Toaster theme="dark" richColors position="top-center" />
    </Router>
  );
}