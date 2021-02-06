import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Results from "./components/pages/Results";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/search">
          <Route path="/:slug" element={<Results />} />
        </Route>
      </Routes>
    </Router>
  );
}
