import { Route, Routes, Navigate, Link } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import Destination from "./pages/Destination.jsx";
import Planner from "./pages/Planner.jsx";
import TravelDNA from "./pages/TravelDNA.jsx";
import About from "./pages/About.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      {/* Root redirects to Login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Authentication Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Main Application Routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/destinations"
        element={
          <ProtectedRoute>
            <Destinations />
          </ProtectedRoute>
        }
      />
      <Route
        path="/destination/:name"
        element={
          <ProtectedRoute>
            <Destination />
          </ProtectedRoute>
        }
      />
      <Route
        path="/planner"
        element={
          <ProtectedRoute>
            <Planner />
          </ProtectedRoute>
        }
      />
      <Route
        path="/travel-dna"
        element={
          <ProtectedRoute>
            <TravelDNA />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dna"
        element={
          <ProtectedRoute>
            <TravelDNA />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />

      {/* Fallback 404 Page */}
      <Route
        path="*"
        element={
          <div className="min-h-screen bg-slate-50 dark:bg-[#050505] flex flex-col items-center justify-center p-8 text-center text-slate-900 dark:text-white transition-colors duration-300">
            <div className="bg-white dark:bg-[#0F0F0F] border border-slate-200 dark:border-[#262626] p-10 rounded-3xl max-w-md w-full shadow-xl">
              <span className="text-5xl">🧭</span>
              <h2 className="text-2xl font-bold mt-4 text-slate-900 dark:text-white">Page Not Found</h2>
              <p className="text-slate-600 dark:text-[#9CA3AF] text-xs mt-2 leading-relaxed">
                The destination or page you are looking for does not exist or has been relocated.
              </p>
              <Link
                to="/home"
                className="mt-6 inline-block bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 px-5 py-2.5 rounded-xl font-bold text-xs transition-colors"
              >
                Return Home
              </Link>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
