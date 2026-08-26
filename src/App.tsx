import { lazy, Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import LandingPage from './pages/LandingPage';

// Lazy load detail pages
const BeritaDetailPage = lazy(() => import('./pages/BeritaDetailPage'));

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'berita/:id',
        element: (
          <Suspense fallback={<div className="min-h-screen bg-brand-bg flex items-center justify-center text-brand-navy">Loading...</div>}>
            <BeritaDetailPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
