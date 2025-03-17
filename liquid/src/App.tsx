import { Routes, Route } from "react-router";
import HomeBeforeLogin from "./pages/HomeBeforeLogin";
import AfterLogin from "./pages/AfterLogin";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomeBeforeLogin />} />
      <Route path="/AfterLogin" element={<AfterLogin />} />
    </Routes>
  );
}

export default App;
