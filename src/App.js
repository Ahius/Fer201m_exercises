
import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import PlayersPresentation from './components/PlayersPresentation';
import Detail from './components/Detail';
import Players from './components/Players';

function App() {
  return (
    // <div className="App">
    //   {/* <Navigation />
    //   <Routes>
    //     <Route path='/' element={<PlayersPresentation />}> </Route>
    //     <Route path='detail/:id' element={<Detail />}></Route>
    //   </Routes> */}
    //   {/* <Main /> */}
    // </div>
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Players/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
     
    </div>
  );
}
export default App;
