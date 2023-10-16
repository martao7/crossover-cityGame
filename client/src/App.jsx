import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import QuizPage from "./Pages/QuizPage";
import FinalPage from "./Pages/FinalPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Quiz" element={<QuizPage />} />
          <Route path="/Final" element={<FinalPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
