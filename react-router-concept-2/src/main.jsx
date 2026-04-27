import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/contact',
    element:<Contact></Contact>
  },
  {
    path:'/about',
    element:<About></About>
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
