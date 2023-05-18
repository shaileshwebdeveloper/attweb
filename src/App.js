import "./App.css";
import { Footer } from "./Components/Common/Footer";
import { Navbar } from "./Components/Common/Navbar";
import { MainRoutes } from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
