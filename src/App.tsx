import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation } from
'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Portal } from './pages/Portal';
import { DevRealm } from './pages/DevRealm';
import { DjRealm } from './pages/DjRealm';
import { Toaster } from './components/ui/sonner';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Portal />} />
        <Route path="/dev" element={<DevRealm />} />
        <Route path="/dj" element={<DjRealm />} />
      </Routes>
    </AnimatePresence>);

}
export function App() {
  return (
    <Router>
      <AnimatedRoutes />
      <Toaster theme="dark" richColors position='top-center'/>
      <SpeedInsights />
    </Router>
  );
}