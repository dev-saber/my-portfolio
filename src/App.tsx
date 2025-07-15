import Navigation from "./components/atoms/Navigation";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Resume from "./layouts/Resume";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";
import Footer from "./components/atoms/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navigation />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
