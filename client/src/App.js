import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Create from "./components/create";
import Entries from "./components/entries";
import Charts from "./components/charts";
import Login from "./components/login";
import Logout from "./components/logout";
import { useStateValue, AuthContext } from "./components/state-provider";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const currentUser = localStorage.getItem("user");

  return (
    <HelmetProvider>
      <Helmet>
        <title>Stress Tracker - Examine health and gain insights in life</title>
      </Helmet>
      <meta
        name="description"
        content=" Log stress changes daily and explore them with visual charts and statistics"
      />
      ;
      <div className="container">
        {!user && !currentUser ? <Login /> : <Navbar />}

        <AuthContext.Provider value={currentUser}>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/entries" element={<Entries />} />
            <Route exact path="/charts" element={<Charts />} />
            <Route exact path="/logout" element={<Logout />} />
          </Routes>
        </AuthContext.Provider>
      </div>
    </HelmetProvider>
  );
}
export default App;
