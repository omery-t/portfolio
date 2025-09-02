import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound } from "@/pages";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
