import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import AccommodationPage from './pages/AccommodationPage';
import DressCodePage from './pages/DressCodePage';

function App() {
  return (
    <div>
      {/* Navbar will be shown on all pages */}
      <Navbar />

      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/dress-code" element={<DressCodePage />} />
      </Routes>
    </div>
  );
}

export default App;