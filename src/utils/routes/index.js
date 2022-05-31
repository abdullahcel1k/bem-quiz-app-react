import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import Home from "../../containers/Home";
import Quiz from "../../containers/Quiz/Quiz";
import DashboardLayout from "../../containers/DashboardLayout";
import NotFound from "../../containers/NotFound";
import SignInUp from "../../containers/SignInUp/SignInUp";
import Layout from "../../containers/Layout";
import Dashboard from "../../containers/Dashboard/Dashboard";
import User from "../../containers/Dashboard/User";
import { useSelector } from "react-redux";
import AdminQuiz from "../../containers/Dashboard/AdminQuiz";
import QuizDetail from "../../containers/Dashboard/AdminQuiz/QuizDetail";
import { UserRole } from "../enums/auth";

const RequireAuth = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/sign-in-up" replace />;
  }
  return children;
};

const RequireAdminAuth = ({ children }) => {
  const { role } = useSelector((state) => state.auth);

  if (role != UserRole.ADMIN) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const PageRoutes = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/quiz/:slug"
            element={
              <RequireAuth>
                <Quiz />
              </RequireAuth>
            }
          />
          <Route
            path="/sign-in-up"
            element={!token ? <SignInUp /> : <Navigate to="/" />}
          />
        </Route>
        <Route
          element={
            <RequireAdminAuth>
              <DashboardLayout />
            </RequireAdminAuth>
          }
        >
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/quiz" element={<AdminQuiz />} />
          <Route path="/admin/quiz/:id" element={<QuizDetail />} />
          <Route path="/admin/users" element={<User />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="not-found" />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
