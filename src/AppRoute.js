import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/dashboard/components/LandingPage";
import RegisterUser from "./pages/authentication/components/RegisterUser";
import LoginUser from "./pages/authentication/components/LoginUser";
import SelectProfileImage from "./pages/dashboard/components/SelectProfileImage";
import LoadingPageToHomePage from "./pages/dashboard/components/LoadingPageToHomePage";

function AppRoute() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/register" element={<RegisterUser/>} />
          <Route path="/login" element={<LoginUser/>} />
          <Route path="/profile-picture" element={<SelectProfileImage/>} />
          <Route path="/home" element={<LoadingPageToHomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoute;
