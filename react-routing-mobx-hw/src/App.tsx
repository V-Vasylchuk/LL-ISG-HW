import { Route, Routes } from "react-router-dom";

import './App.css';
import { Login } from "./components";
import { Home } from "./pages";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
