import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tablespage from "./pages/tables_page";
import Tablepage from "./pages/table_page";
import Nav from "./pages/nav";

function App() {

  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route exact path="/" element={<Tablespage/>} />
          <Route exact path="/table/:tableId" element={<Tablepage/>} />
          <Route path="*" element="Not Found" />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
