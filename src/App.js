import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Nav from "./components/nav";
import Modes from "./components/modes";
import Reg from "./components/reg";
import Parent from "./components/task/Parent";
import Badpage from "./components/Badpage";
import Input from "./components/notes/Input";
import ParentNote from "./components/notes/ParentNote";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Saved from "./Saved";
import Cam from "./components/photos/Cam";
function App() {
  const [notes,setNotes]= useState('')
  const [preview, setPreview]= useState('')
  return (
    <div className="app">
      <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Modes/>}/>
        <Route path="/addtask" element={<Parent/>}/>
        <Route path="/addnote" element={<Input notes={notes} setNotes={setNotes} preview={preview} setPreview={setPreview}/>}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route path="/addphoto" element={<Cam/>}/> 
        <Route path="*" element={<Badpage/>}/>
      </Routes>
      <Reg/>
      </Router>
    </div>
  );
}

export default App;
