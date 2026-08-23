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
          <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 text-center text-slate-800">
            <span className="text-5xl">🧭</span>
            <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
            <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
            <Link
              to="/home"
              className="mt-6 bg-sky-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-sky-700 transition-colors"
            >
              Return Home
            </Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
