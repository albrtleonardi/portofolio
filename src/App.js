import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Information from "./pages/Information";
import { motion } from "framer-motion";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <motion.div
        initial={{ backgroundColor: isDarkMode ? "#000" : "#fff" }}
        animate={{ backgroundColor: isDarkMode ? "#000" : "#fff" }}
        transition={{ duration: 0.2 }}
        className={`w-full h-full min-h-screen transition-colors ${
          isDarkMode ? "bg-black text-gray-200" : "bg-white text-gray-900"
        }`}
      >
        <Header isDarkMode={isDarkMode} />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <div className="flex flex-col items-center justify-center py-8">
          <Routes>
            <Route
              path="/information"
              element={<Information isDarkMode={isDarkMode} />}
            />
            <Route
              path="/projects"
              element={<Projects isDarkMode={isDarkMode} />}
            />
            <Route path="/" element={<Projects isDarkMode={isDarkMode} />} />
          </Routes>
        </div>
      </motion.div>
    </Router>
  );
};

export default App;
