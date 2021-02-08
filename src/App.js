import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Results from "./components/Results";

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
