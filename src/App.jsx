import { BrowserRouter, Routes, Route } from "react-router-dom";

import FiveGSixG from "./pages/5G_6G";
import FiveGAbout from "./pages/About";
import FiveGPrograms from "./pages/Programs";
import Facilities from "./pages/Facilities";
import NewsEvent from "./pages/NewsEvent";

// hooks
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<FiveGSixG />} />
        <Route path="/COEs/5G6G/about" element={<FiveGAbout />} />
        <Route path="/COEs/5G6G/programs" element={<FiveGPrograms />} />
        <Route path="/COEs/5G6G/facilities" element={<Facilities />} />
        <Route path="/COEs/5G6G/news-event" element={<NewsEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
