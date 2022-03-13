import {Switch, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './comps/Navbar';
import CreateExercise from './pages/CreateExercise';
import EditExercise from './pages/EditExercise';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/create-exercise" element={<CreateExercise/>}/>
        <Route path="/:id/edit-exercise" element={<EditExercise/>}/>
      </Routes>
    </div>
  );
}

export default App;
