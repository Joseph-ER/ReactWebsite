import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Painting from './pages/painting';
import Navbar from './components/navbar';

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
          </Routes>
        </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;
