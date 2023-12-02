import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./components/Auth/Authentication";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={true ? <HomePage /> : <Authentication />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
