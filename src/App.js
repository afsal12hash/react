import './App.css';

import HomeNavbar from './componets/HomeNavbar';
import MyUseEffect from './componets/Hooks/MyUseEffect';
import MyUseRef from './componets/Hooks/MyUseRef';
import MyuseState from './componets/Hooks/MyuseState';
import UseCallbackHook from './componets/Hooks/UseCallbackHook';
import UseEffectHook from './componets/Hooks/UseEffectHook';
import UseMemoHook from './componets/Hooks/UseMemoHook';
import UseRefHook from './componets/Hooks/UseRefHook';
import UseStateHook from './componets/Hooks/UseStateHook';
import ParentProp from './componets/Props/ParentProp';
import MyChild from './componets/Propsmy/Mychild';
import MyParent from './componets/Propsmy/MyParent';

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
-



      {/* <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profiles />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes> */}

      {/* Props */}

      {/* <ParentProp /> */}

      {/* <MyParent/> */}


      {/* Hooks */}

      {/*<UseStateHook /> */}
      {/* <UseEffectHook /> */}
        {/* <UseRefHook /> */}
        {/* |<UseCallbackHook/> */}
        <UseMemoHook />

      {/* <MyuseState/> */}
      {/* <MyUseEffect/> */}
      {/* <MyUseRef /> */}

    </div>
  );

}

export default App;
