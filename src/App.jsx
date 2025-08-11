import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New_Arrival from "./pages/New_Arrival";
import Camera from "./pages/Camera";
import PageNotFound from "./components/PageNotfound/PageNotFound";
import SunGlassDetails from "./pages/SunGlassDetails";
import OpticalGlassDetails from "./pages/OpticalGlassDetails";
import AntiradGlassDetails from "./pages/AntiradGlassDetails";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Navbar/Nav";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./index.css";
const App = () => {
  return (
    <div className="bg-background w-full min-h-screen flex flex-col   ">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/new_Arrival" element={<New_Arrival />}></Route>
          <Route path="/camera" element={<Camera />}></Route>
          <Route path="sun" element={<SunGlassDetails />}></Route>
          <Route path="optical" element={<OpticalGlassDetails />}></Route>
          <Route path="anti-rad" element={<AntiradGlassDetails />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
