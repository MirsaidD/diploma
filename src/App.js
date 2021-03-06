import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { HomePage } from "./pages/home-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
