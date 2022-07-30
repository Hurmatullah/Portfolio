import "./App.css";
import Footer from "./includes/footer";
import Header from "./includes/header";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Introduction from "./pages/introduction";
import Skills from "./pages/skills";

function App() {
  return (
    <div>
      <Header></Header>
      <Introduction></Introduction>
      <Experience></Experience>
      <Education></Education>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
