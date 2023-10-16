import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateUser from "./Pages/CreateUser";

function App() {
  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route />
        <Route />
      </Routes>
      {/* </Router> */}
      {/* <EnterYourNameModule /> */}
    </>
  );
}

export default App;
