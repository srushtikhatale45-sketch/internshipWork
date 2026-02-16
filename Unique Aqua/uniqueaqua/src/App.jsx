import React from 'react';
import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element ={<Home/>}/>
      <Route path='/company' element ={<Company/>}/>
      <Route path='Contact' element ={<Contact/>}/>
      <Route path='/newsandevent'element ={<NewsandEvent/>}/>
      <Route path='/client' element ={<Client/>}/>

    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App