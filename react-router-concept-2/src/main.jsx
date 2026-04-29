import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import RootLayer from './components/RootLayer/RootLayer.jsx';
import PlantDetails from './components/PlantDetails/PlantDetails.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayer></RootLayer>,
    children:[

        {
           index:true,
           element:<Home></Home>,
          loader: async()=>{
            const res=await fetch('https://openapi.programming-hero.com/api/plants');
            return res.json();
          }
        },
        {
           path:'/contact',
           element:<Contact></Contact>
        },
        {
           path:'/about',
           element:<About></About>
        },
        {
           path:'/details/:id',
           element:<PlantDetails></PlantDetails>,
           loader: async ({ params }) => {
            const { id } = params;
            const res = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`);
            return res.json();
           }
        }
      
    ]
  
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
