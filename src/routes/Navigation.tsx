import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import {
  FormikAbstractPage,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from "../03-forms/pages";
import logo from "../assets/react.svg";

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" height={64} width={64} />

            <ul>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Register Page
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-basic"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik Basic
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-yup"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik Yup
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-components"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik Components
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-abstract"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik Abstract
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="register" element={<RegisterPage />} />
            <Route path="formik-basic" element={<FormikBasicPage />} />
            <Route path="formik-yup" element={<FormikYupPage />} />
            <Route path="formik-components" element={<FormikComponents />} />
            <Route path="formik-abstract" element={<FormikAbstractPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
