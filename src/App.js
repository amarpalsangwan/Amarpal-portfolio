import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contactt from "./components/contact/Contactt";
import Footer from "./components/footer/Footer";
import Headerr from "./components/header/Headerr";

function App() {
  return (
    <>
      <Headerr />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification/>
        <Testimonials/>
        <Contactt/>\
        <Footer/>
      </main>
    </>
  );
}

export default App;
