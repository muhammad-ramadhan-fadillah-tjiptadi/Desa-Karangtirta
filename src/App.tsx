import { createHashRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';

function HomePlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
        Desa Bahari Karangtirta
      </h1>
      <p className="text-lg text-slate-300 max-w-xl mb-8">
        Pesisir Mandiri, Nelayan Sejahtera, Laut Lestari.
      </p>
    </div>
  );
}

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePlaceholder />,
      },
      // Halaman lain akan ditambahkan di sini nanti
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
