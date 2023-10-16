import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateUser from "./Pages/CreateUser";
import QuizPage from "./Pages/QuizPage";

function App() {
  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/game" element={<QuizPage />} />
        <Route />
      </Routes>
      {/* </Router> */}
      {/* <EnterYourNameModule /> */}
    </>
  );
}

export default App;
