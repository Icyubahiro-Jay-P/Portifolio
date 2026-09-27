import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Spinner } from "@/components/ui/spinner"
import { LazyMotion, AnimatePresence } from "motion/react";

// Animation features load async so they stay out of the entry bundle
const loadMotionFeatures = () => import('./lib/motion-features').then(m => m.default);

// Lazy pages
const Portal = lazy(() => import('./pages/Portal'));
const DevRealm = lazy(() => import('./pages/DevRealm'));
const DjRealm = lazy(() => import('./pages/DjRealm'));
const NotFound = lazy(() => import('./pages/NotFound'));
// Vercel telemetry is not needed for first paint
const SpeedInsights = lazy(() => import('@vercel/speed-insights/react').then(m => ({ default: m.SpeedInsights })));
const Analytics = lazy(() => import('@vercel/analytics/react').then(m => ({ default: m.Analytics })));
// Toasts only fire from contact forms, keep sonner off the critical path
const Toaster = lazy(() => import('./components/ui/sonner').then(m => ({ default: m.Toaster })));

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export const App = () => {
  return (
    <Router>
      <LazyMotion features={loadMotionFeatures}>
        <AnimatedRoutes />
      </LazyMotion>
      <Suspense fallback={null}>
        <Toaster theme="dark" richColors position="top-center" />
        <SpeedInsights />
        <Analytics />
      </Suspense>
    </Router>
  );
}