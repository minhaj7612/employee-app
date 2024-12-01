import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import List from "./page/List";
import Login from "./page/Login";
import FormComponent from "./components/FormComponent";
import "./App.css";
import View from "./page/View";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee/:id" element={<View />} />
        <Route path="/employee/add" element={<FormComponent mode="add" />} />
        <Route
          path="/employee/edit/:id"
          element={<FormComponent mode="edit" />}
        />
      </Routes>
    </div>
  );
}

export default App;
