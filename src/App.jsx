import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Coordinator from "./components/coordinator.jsx";
import Representatives from "./components/representatives.jsx";
import Devloper from "./components/devloper.jsx";
import Contact from "./components/contact.jsx";



// const Coordinator = () => <div>Coordinator Page</div>;
// const Facilities = () => <div>Facilities Page</div>;

import { Link } from "react-router-dom";
import Landing from "./components/landing.jsx";
import Participants from "./components/participants.jsx";
import OnGoing from "./components/onGoing.jsx";
import Facilities from "./components/facilities.jsx";
import Collabration from "./components/collabration.jsx";
import Exhibition from "./components/Exhibition.jsx";
import Competition from "./components/competition.jsx";
function ErrorPage() {
  return (
    <div className="mt-20 mb-20 flex flex-col justify-center items-center text-center p-6">
      <div className="text-9xl font-extrabold  text-gray-800">404</div>
      <h1 className="text-4xl font-bold text-gray-800">Oops! Page Not Found</h1>
      <p className="text-lg md:text-xl text-gray-600 mt-2">
        The page you're looking for doesn't exist or is under development.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
    <div className="absolute inset-0 -z-20"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-[#74cac2] blur-3xl rounded-full opacity-50"></div>
        <div className="absolute top-80 -right-20 w-[700px] h-[500px] bg-[#42a096] blur-3xl rounded-full opacity-30"></div>
        <div className="absolute top-1/3 -left-1/4 w-[800px] h-[600px] bg-[#74cac2]  blur-3xl rounded-full opacity-30"></div>
        <div className="absolute top-[70%] right-0 w-[500px] h-[600px] bg-[#42a096] blur-3xl rounded-full opacity-20"></div>
        <div className="absolute top-[85%] -left-1/3 w-[1000px] h-[500px] bg-[#74cac2] blur-3xl rounded-full opacity-30"></div>
      </div>
    <div className="flex flex-col  min-h-screen">
    <Router>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<Home />} />
          <Route path="/coordinator" element={<Coordinator />} />
          <Route path="/student-representatives" element={<Representatives />} />
          <Route path="/developer" element={<Devloper />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/onGoingProjects" element={<OnGoing />} />
          <Route path="/collaboration" element={<Collabration />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/documents" element={<Competition />} />
          <Route path="/video-lectures" element={<Competition />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
  </div>
  );
}

export default App;
