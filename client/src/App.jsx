import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import QuizPage from './Pages/QuizPage';


function App() {
  return(
    <Router>
    <Routes>
  <Route />
  <Route path='/Quiz' element={<QuizPage />} />
  <Route />
    </Routes>
  </Router>
)
}

export default App
