import "./App.css";
import { ThemeProvider } from "./components/ThemeContext";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
