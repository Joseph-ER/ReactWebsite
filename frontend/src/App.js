import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/navbar';
import Painting from './pages/painting';
import Gaming from './pages/gaming';


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
              element={<Home/>}
              />
            <Route 
              path='/painting'
              element={<Painting/>}
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
