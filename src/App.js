import BubbleNav from './components/BubbleNav';
import SparkleCursor from './components/SparkleCursor';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Tech from './pages/Tech';
import Education from './pages/Education';
import { CoffeeAndChat } from './pages/Tech';

function App() {
  return (
    <>
      <SparkleCursor />
      <BubbleNav />
      {/* <Navbar /> */}
      <main className="scroll-smooth">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="tech"><Tech /></section>
        <section id="education"><Education /></section>
        <CoffeeAndChat />
      </main>
      <Footer />
    </>
  );
}

export default App;
