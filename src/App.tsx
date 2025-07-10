import Navigation from "./components/atoms/Navigation";
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
