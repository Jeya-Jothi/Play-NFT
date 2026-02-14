import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PageShell from "../Components/layout/PageShell.jsx";
import ErrorBoundary from "../Components/ErrorBoundary";

const HomePage = lazy(() => import("../Pages/HomePage.jsx"));
function Loader() {
  return (
    <div
      className="h-screen flex items-center justify-center gap-3"
      role="status"
      aria-label="Loading"
    >
      <span
        className="w-4 h-4 rounded-full bg-linear-to-r from-(--color1) to-(--color3)
      animate-bounce [animation-delay:-0.2s]"
      />
      <span
        className="w-4 h-4 rounded-full bg-linear-to-r from-(--color1) to-(--color3) 
      animate-bounce [animation-delay:-0.1s]"
      />
      <span
        className="w-4 h-4 rounded-full bg-linear-to-r from-(--color1) to-(--color3)
      animate-bounce"
      />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageShell />}>
        <Route
          index
          element={
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}
