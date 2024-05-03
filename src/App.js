import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert();
    }, 2000);
  };

  //darkMode and lightMode Toggle
  const changeMode = () => {
    if (mode === "dark" || mode === "success") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("success", "LightMode has been enabled.");
      document.title = "TextUtils - LightMode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#091832";
      showAlert("success", "DarkMode has been enabled.");
      document.title = "TextUtils - DarkMode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          logo="TextUtils"
          title="About TextUtils"
          mode={mode}
          modeControl={changeMode}
        />
        <Alert alert={alert} />
        <div className="container my-3"></div>
        <Routes>
          <Route
            path="/home"
            element={
              <Textform
                heading="Enter The Text To Convert Lowercase | UpperCase"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<AboutUs mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
