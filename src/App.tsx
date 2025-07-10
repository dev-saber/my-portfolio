import Navigation from "./components/atoms/Navigation";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Home from "./layouts/Home";
import About from "./layouts/About";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navigation />
      <Home />
      <About />
    </ThemeProvider>
  );
}

export default App;
