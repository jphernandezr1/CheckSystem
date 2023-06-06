import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tablespage from "./pages/tables_page";
import Tablepage from "./pages/table_page";
import Nav from "./pages/nav";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCbPdeWFgN7Wf5dQEc2pSYbZFQ-QTHpE8A",
    authDomain: "check-system-69a68.firebaseapp.com",
    projectId: "check-system-69a68",
    storageBucket: "check-system-69a68.appspot.com",
    messagingSenderId: "533504842006",
    appId: "1:533504842006:web:3175100795a9723f0e9837",
    measurementId: "G-XER91X4S5G"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="" element={<Tablespage />} />
        <Route exact path="/table/:tableId" element={<Tablepage />} />
        <Route path="*" element="Not Found" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
