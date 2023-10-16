import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import QuizPage from "./Pages/QuizPage";
import FinalPage from "./Pages/FinalPage";
import Leaderboard from "./Pages/Leaderboard"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Quiz" element={<QuizPage />} />
          <Route path="/Final" element={<FinalPage />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;
