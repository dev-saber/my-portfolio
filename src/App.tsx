import Navigation from "./components/atoms/Navigation";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Resume from "./layouts/Resume";
import Projects from "./layouts/Projects";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navigation />
      <Home />
      <About />
      <Resume />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
