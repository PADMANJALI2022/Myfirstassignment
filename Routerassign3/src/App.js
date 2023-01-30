
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'

import Navbar from './RouteAssign/Navbar';


import TextRoute from './RouteAssign/TextRoute';
import ListKeys from './RouteAssign/ListKeys';
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './RouteAssign/Slider';


function App() {
  return (
    
   <>
   <center><h1>React App- Single Page WebApplication </h1></center>
    <Navbar/>
  <Routes>
  <Route path ='/R1Carousel' element={<Slider/>}></Route>
 
    <Route path='/R3Text' element={<TextRoute/>}> TextRoute</Route>
    <Route path='/R2List' element={<ListKeys/>}> ListKeys</Route>

  </Routes>
</>
);
  }
export default App;

//   }
// export default App;
