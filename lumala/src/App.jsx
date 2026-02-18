import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";

import Dashboard from "./pages/Dashboard";
import Podcast from "./pages/Podcast";
import Flashcards from "./pages/Flashcards";
import Video from "./pages/Video";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/video" element={<Video />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
