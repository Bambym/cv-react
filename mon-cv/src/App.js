
import './App.css';
import PageAccueil from './components/PageAccueil';
import Formations from './components/Formations';
import Competences from './components/Competences';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
              <Route path='/' element={<PageAccueil />} />
              <Route path='/Formations' element={<Formations />} />
              <Route path='/Competences' element={<Competences />} />
              <Route path='/Contact' element={<Contact />} />
            </Routes>

          </BrowserRouter>
     
      {/* <PageAccueil/> */}
    </div>
  );
}

export default App;
