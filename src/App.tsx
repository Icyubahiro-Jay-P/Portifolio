import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Spinner } from "@/components/ui/spinner"
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { LazyMotion, domAnimation, AnimatePresence } from "motion/react";
import { Toaster } from './components/ui/sonner';

// Lazy pages
const Portal = lazy(() => import('./pages/Portal'));
const DevRealm = lazy(() => import('./pages/DevRealm'));
const DjRealm = lazy(() => import('./pages/DjRealm'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen text-white"><Spinner /></div>
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

export const App = () => {
  return (
    <Router>
      <SpeedInsights />
      <Analytics />
      <LazyMotion features={domAnimation}>
        <AnimatedRoutes />
      </LazyMotion>
      <Toaster theme="dark" richColors position="top-center" />
    </Router>
  );
}