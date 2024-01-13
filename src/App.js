import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Franchise from "./pages/franchise/Franchise";
import Detail from "./pages/detail/Detail";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/list" element={<List />} />
        <Route path="list/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
