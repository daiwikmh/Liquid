import { Routes, Route } from "react-router";
import HomeBeforeLogin from "./pages/HomeBeforeLogin";
import Dashboard from "@/pages/Dashboard";
import Analytics from "./pages/Analytics";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomeBeforeLogin />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Analytics" element={<Analytics />} />
    </Routes>
  );
}

export default App;
