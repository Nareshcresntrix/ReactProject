import React from "react";
import SelectContent from "./components/select";
import { Container, FormControl, Typography } from "@mui/material";
import Silder from "./components/silder";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import AnalyticsPage from "../src/components/Pages/AnalyticsPage";
import ClientsPage from "./components/Pages/ClientsPage";
import TaskPage from "./components/Pages/TaskPage";
import SettingsPage from "./components/Pages/SettingsPage";
import Feedback from "./components/Pages/FeedbackPage";
import FeedbackPage from "./components/Pages/FeedbackPage";
import AboutPage from "./components/Pages/AboutPage";
import LoginPage from "./components/Pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>

      {/* login */}
      
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
