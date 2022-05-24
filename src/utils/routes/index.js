import {
 BrowserRouter as Router,
 Route,
 Routes
} from "react-router-dom";
import React from 'react'
import Home from "../../containers/Home";
import Quiz from "../../containers/Quiz/Quiz";
import DashboardLayout from "../../containers/DashboardLayout";
import NotFound from "../../containers/NotFound";
import SignInUp from "../../containers/SignInUp/SignInUp";
import Layout from "../../containers/Layout";
import Dashboard from "../../containers/Dashboard";
import User from "../../containers/User";

const PageRoutes = () => {
 return (
  <Router>
   <Routes>
    <Route element={<Layout />}>
     <Route exact path="/" element={<Home />} />
     <Route path="/quiz/:slug" element={<Quiz />} />
     <Route path="/sign-in-up" element={<SignInUp />} />
    </Route>
    <Route element={<DashboardLayout />}>
     <Route path="/admin" element={<Dashboard />} />
     <Route path="/admin/users" element={<User />} />
    </Route>

    <Route path="*" element={<NotFound />} />
   </Routes>
  </Router>
 )
}

export default PageRoutes;