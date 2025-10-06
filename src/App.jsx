import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with navigation */}
      <div className="bg-slate-900 sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main content pages */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
