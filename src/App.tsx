import {  Route, Routes, RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import ScrollToTop from "ScrollToTop";
import Login from "Login";
import Signup from "Signup";






const router = createBrowserRouter(createRoutesFromElements(
  
    
  <Route path="/"  element={<ScrollToTop/>} >
 

  <Route path='Login' element={<Login/>} />
 
  <Route path='Signup' element={<Signup/>} />
 
</Route>

  
))


function App() {
  return (
 
    <RouterProvider router={router} /> 
  );
}

export default App;









 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  



