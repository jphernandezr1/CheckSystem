import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tables_page from "./pages/tables_page";
import Table_page from "./pages/table_page";
import Nav from "./pages/nav";


function App() {

  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route exact path="/" element={<Tables_page/>} />
          <Route exact path="table/:tableId" element={<Table_page/>} />
          <Route path="*" element="Not Found" />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
