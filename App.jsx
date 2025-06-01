import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

initializeApp(firebaseConfig);
const auth = getAuth();

const Home = () => <div className="p-4 text-center">Welcome to Stylegenie!</div>;
const Login = () => {
  const navigate = useNavigate();
  return <div className="p-4">Login Page (Coming soon)</div>;
};
const Signup = () => <div className="p-4">Signup Page (Coming soon)</div>;
const Dashboard = () => <div className="p-4">Dashboard - Enter Measurements</div>;
const Outfit = () => <div className="p-4">AI Recommended Outfit Here</div>;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
        <Route path="/outfit" element={user ? <Outfit /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;