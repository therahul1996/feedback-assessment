import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from './components/Grid';
import List from './components/List';
import Add from './components/Add';

function App() {
  return (
  <BrowserRouter>
      <Routes>
          <Route index element={<Grid />} />
          <Route path="list" element={<List />} />
          <Route path="add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
