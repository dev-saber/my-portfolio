import Navigation from "./components/atoms/Navigation";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Resume from "./layouts/Resume";
import Activity from "./layouts/Activity";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";
import Socials from "./components/atoms/Socials";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navigation />
      <Home />
      <About />
      <Resume />
      <Activity />
      <Contact />
      <Footer />
      <Socials />
    </ThemeProvider>
  );
}

export default App;
