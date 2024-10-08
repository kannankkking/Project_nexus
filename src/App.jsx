import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import Home from './assets/Home';
import Error from './assets/Error';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Home" element={<Home/>} />
       <Route path="/Error" element={<Error/>} />
       </Routes>
       </BrowserRouter>
    

  )
}
export default App;