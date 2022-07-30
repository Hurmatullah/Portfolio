import "./App.css";
import Footer from "./includes/footer";
import Header from "./includes/header";
import About from "./pages/about";
import Contact from "./pages/contact";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Education></Education>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
