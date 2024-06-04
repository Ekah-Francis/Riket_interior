import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Gallery from "./components/gallery";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"
/>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
