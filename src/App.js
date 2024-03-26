import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MergeSort from './components/MergeSort';
import SelectionSort from './components/SelectionSort';
import QuickSort from './components/QuickSort';
import InsertionSort from './components/InsertionSort';
import Home from './components/Home';
import Navbar from './components/Navbar'; // Corrected import

function App() {
  return (<>
    <div className="fullscreen">
    <Router>
      <Navbar /> {/* Corrected component name */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/QuickSort' element={<QuickSort />} />
        <Route path='/MergeSort' element={<MergeSort />} />
        <Route path='/InsertionSort' element={<InsertionSort />} />
        <Route path='/SelectionSort' element={<SelectionSort />} />
      </Routes>
    </Router>   
    </div>
    </> 
  );
}

export default App;
