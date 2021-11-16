import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./container/login";
import Register from "./container/register";
import Home from "./container/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
