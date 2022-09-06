import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
// import PortfolioSwiper from "./components/portfolio/PortfolioSwiper";
import Languages from "./components/services/Languages";
// import Testimonial from "./components/textimonials/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Languages />
      <Experience />

      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
