import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Internship from './pages/Internship/Internship';
import Incubator from './pages/Incubator/Incubator';
import Courses from './pages/Courses/Courses';
import Chatbot from './pages/Chatbot/Chatbot';
import Registration from './pages/Forms/Registration';
import Application from './pages/Forms/Application';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/incubator" element={<Incubator />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/apply" element={<Application />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;