import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ToBePublished from "./pages/ToBePubulished";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/to-be-published" element={<ToBePublished />} />
    </Routes>
  );
};

export default App;
