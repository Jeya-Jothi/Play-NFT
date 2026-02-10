import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PageShell from "../Components/layout/PageShell.jsx";
import ErrorBoundary from "../Components/ErrorBoundary";

const HomePage = lazy(() => import("../Pages/HomePage.jsx"));
function Loader() {
  return (
    <div
      className="h-screen flex items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <svg
        width="80"
        height="24"
        viewBox="0 0 80 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g fill="currentColor">
          <circle cx="12" cy="12" r="6">
            <animate
              attributeName="cy"
              values="12;4;12"
              dur="0.6s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="r"
              values="6;4;6"
              dur="0.6s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="opacity"
              values="1;0.6;1"
              dur="0.6s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>

          <circle cx="40" cy="12" r="6">
            <animate
              attributeName="cy"
              values="12;4;12"
              dur="0.6s"
              repeatCount="indefinite"
              begin="0.12s"
            />
            <animate
              attributeName="r"
              values="6;4;6"
              dur="0.6s"
              repeatCount="indefinite"
              begin="0.12s"
            />
            <animate
              attributeName="opacity"
              values="1;0.6;1"
              dur="0.6s"
              repeatCount="indefinite"
              begin="0.12s"
            />
          </circle>

          <circle cx="68" cy="12" r="6">
            <animate
              attributeName="cy"
              values="12;4;12"
              dur="0.6s"
              repeatCount="indefinite"
              begin="0.24s"
            />
            <animate
              attributeName="r"
              values="6;4;6"
              dur="0.6s"
              repeatCount="indefinite"
              begin="0.24s"
            />
            <animate
              attributeName="opacity"
              values="1;0.6;1"
              dur="0.6s"
              repeatCount="indefinite"
              begin="0.24s"
            />
          </circle>
        </g>
      </svg>
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
