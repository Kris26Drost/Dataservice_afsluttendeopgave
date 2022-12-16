import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from '../src/pages/Home/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import NotMatch from './pages/NotMatch';

// Haveservices 
import Velkomst from './pages/ViborgHaveservice1/Forside/Velkomst';
import Services from './pages/ViborgHaveservice1/Ydelser/Services';

// Vejr
import Weather from './pages/Vejret/Weather';

// News
import News from './pages/Nyheder/News';

// Energi
import Energi from './pages/Energidata/Energi';
import Countries from './pages/Opgave5/Countries';

// Opgave 5 - Countries

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar></Navbar>

        <Routes>
          {/* <Route path='/' element={ } /> */}
          <Route path='/' element={<Home/>} />

          <Route path='/velkomst' element={<Velkomst/>} />
          <Route path='/services' element={ <Services/>} />

          <Route path='/weather' element={ <Weather/>} />

          <Route path='/news' element={ <News/>} />

          <Route path='/energi' element={ <Energi/>} />

          <Route path='/countries' element={ <Countries/>} />

          <Route path='*' element={<NotMatch/>} />


        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
