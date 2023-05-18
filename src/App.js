import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HandsonSix/Home";
import Student from "./HandsonSix/Student";
import Contact from "./HandsonSix/Contact";
import Nav from "./HandsonSix/Nav";
import store from "./HandsonSix/StoreComponent";
import EditStudent from "./HandsonSix/EditStudent";
import NewStudent from "./HandsonSix/NewStudent";
import './style.css';
function App() {
  const [data, setData] = useState([
    {name: "John", Age: 26, Course: "MERN", Batch: "October"},
    {name: "Doe", Age: 25, Course: "MERN", Batch: "November"},
    {name: "Biden", Age: 26, Course: "MEAN", Batch: "September"},
    {name: "Barar", Age: 22, Course: "MEAN", Batch: "September"},
    {name: "Christ", Age: 23, Course: "MEAN", Batch: "October"},
    {name: "Elent", Age: 24, Course: "MEVN", Batch: "November"},
    {name: "Harshith sharma", Age: 24, Course: "MEVN", Batch: "October"}
  ])
  return (
      <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Student" element={
            <store.Provider value={{entries: data, entriesFun: setData}}>
              <Student />
            </store.Provider>
          } />
          <Route path="/Contact" element={<Contact />} />
          {/* Edit student able to acess the contextAPI data */}
          <Route path="/editstudent" element={
            <store.Provider value={{entries: data, entriesFun: setData}}>
            <EditStudent />
          </store.Provider>
          } />
          <Route path="/newstudent" element={
            <store.Provider value={{entries: data, entriesFun: setData}}>
            <NewStudent />
          </store.Provider>
          } />
        </Routes>
        </BrowserRouter>
      </>
  );
}
export default App;