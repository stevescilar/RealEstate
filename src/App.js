import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from "./pages/Home";
import Profile  from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Offers  from "./pages/Offers";
import ForgotPassword  from "./pages/ForgotPassword";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
 