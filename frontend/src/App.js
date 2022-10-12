import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/navbar';
import Software from './pages/software';
import Painting from './pages/painting';
import Gaming from './pages/gaming';
import DeathGuard from './pages/paintingPages/DeathGuard';
import AdeptaSororitas from './pages/paintingPages/AdeptaSororitas';
import Orks from './pages/paintingPages/Orks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="Pages">
          <Routes>
            <Route 
              path='/'
              element={<Home/>}
              />
           <Route 
              path='/software'
              element={<Software/>}
              />
            <Route 
              path='/painting'
              element={<Painting/>}
              />
            <Route 
              path='/painting/DeathGuard'
              element={<DeathGuard/>}
              />
            <Route 
              path='/painting/AdeptaSororitas'
              element={<AdeptaSororitas/>}
              />
              <Route
              path='/painting/Orks'
              element={<Orks/>}
              />
            <Route
              path='/gaming'
              element={<Gaming/>}
              />
          </Routes>
        </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;
