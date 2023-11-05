import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import CreateActivity from './views/Create/CreateActivity'
import Home from './views/Home/Home'
import CountryDetails from './views/Details/CountryDetail/CountryDetails'
import Landing from './views/Landing/Landing'
import Countries from './Components/CountryRender/CountryRender'
import NavBar from './Components/NavBar/NavBar'
import Activities from './Components/Activities/Activities'


function App() {
  const location = useLocation().pathname
  return (
    
      <div>
        {(location !== '/')?<NavBar/>:''}
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/countries' element={<Countries/>} />
          <Route path='/countries/:ID' element={<CountryDetails/>} />
          <Route path='/countries/name' element={<CountryDetails/>} />
          <Route path='/form' element={<CreateActivity/>} />
          <Route path='/activities' element={<Activities/>} />
        </Routes>
      </div>
 
  );
}

export default App
