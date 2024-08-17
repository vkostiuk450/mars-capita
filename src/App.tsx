import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import ProfilePage from "./pages/profile.page";
import HomePage from "./pages/home.page";
import InternalLoginPage from "./pages/login/internal.page";
import UnauthorizePage from "./pages/unauthorize.page";
import RequireUser from "./components/requireUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPage from "./pages/admin.page";
import LVL1RegisterPage from "./pages/register/lvl1.page";
import LVL2RegisterPage from "./pages/register/lvl2.page";
import ProfileCustomerPage from "./pages/profile/customer.page";
import ConnectRegisterPage from "./pages/register/connect.page";

function App() {
  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<RequireUser allowedRoles={["user", "admin"]} />}>
            <Route index element={<HomePage />} />
          </Route>

          {/* Private Route */}
          <Route element={<RequireUser allowedRoles={["user", "admin"]} />}>
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route element={<RequireUser allowedRoles={["admin"]} />}>
            <Route path="admin" element={<AdminPage />} />
          </Route>
          <Route path="unauthorized" element={<UnauthorizePage />} />
        </Route>
        <Route path="login">
          <Route path="internal" element={<InternalLoginPage />} />
        </Route>
        <Route path="register">
          <Route path="lvl1" element={<LVL1RegisterPage />} />
          <Route path="lvl2/:regId" element={<LVL2RegisterPage />} />
          <Route path="connect/:regId" element={<ConnectRegisterPage />} />
        </Route>
        <Route path="profile">
          <Route path="customer" element={<ProfileCustomerPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
