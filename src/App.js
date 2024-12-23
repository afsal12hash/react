import './App.css';

import HomeNavbar from './componets/HomeNavbar';
import ParentProp from './componets/Props/ParentProp';

// import Home from './componets/Home';
// import Profiles from './componets/Profiles';
// import Contact from './componets/Contact';
// import About from './componets/About';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        {/* <HomeNavbar /> */}
      </div>
      
      
      

      {/* <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profiles />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes> */}

      {/* Props */}

      {/* <ParentProp /> */}

      {<ParentProp/>}
    </div>
  );
  
}

export default App;
