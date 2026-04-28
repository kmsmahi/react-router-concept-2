import { useEffect, useState } from "react";


const Home = () => {
    const [plants,setPlants]=useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/plants')
        .then(res=>res.json())
        .then(data=>setPlants(data.plants))
    },[]);
    console.log(plants);
    return (
        <div>
           
              <p>Plant Cards</p>

            
        </div>
    );
};

export default Home;