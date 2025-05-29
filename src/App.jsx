import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import New_Arrival from './pages/New_Arrival';
import Camera from './pages/Camera';
import PageNotFound from './components/PageNotfound/PageNotFound';
const App = () => {
  return (
    <div className='bg-black w-[100%] h-screen overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/new_Arrival" element={<New_Arrival/>} ></Route>
        <Route path="/camera" element={<Camera/>} ></Route>
        <Route  path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
